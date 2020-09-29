const svgns = 'http://www.w3.org/2000/svg';

export interface Point {
  x: number;
  y: number;
}

export interface ControlPoints {
  p1: number[];
  p2: number[];
}

export interface WaveProps {
  width?: number;
  height?: number;
  segmentCount?: number;
  layerCount?: number;
  variance?: number;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
}

let defaultData = {
  width: 1440,
  height: 300,
  segmentCount: 4,
  layerCount: 2,
  variance: 0.75,
  strokeWidth: 0,
  fillColor: '#0099ff',
  strokeColor: 'none',
};

function computeControlPoints(K: number[]): ControlPoints {
  let p1 = new Array();
  let p2 = new Array();
  let n = K.length - 1;

  let a = new Array();
  let b = new Array();
  let c = new Array();
  let r = new Array();

  a[0] = 0;
  b[0] = 2;
  c[0] = 1;
  r[0] = K[0] + 2 * K[1];

  for (let i = 1; i < n - 1; i++) {
    a[i] = 1;
    b[i] = 4;
    c[i] = 1;
    r[i] = 4 * K[i] + 2 * K[i + 1];
  }

  a[n - 1] = 2;
  b[n - 1] = 7;
  c[n - 1] = 0;
  r[n - 1] = 8 * K[n - 1] + K[n];

  for (let i = 1; i < n; i++) {
    let m = a[i] / b[i - 1];
    b[i] = b[i] - m * c[i - 1];
    r[i] = r[i] - m * r[i - 1];
  }

  p1[n - 1] = r[n - 1] / b[n - 1];
  for (let i = n - 2; i >= 0; --i) p1[i] = (r[i] - c[i] * p1[i + 1]) / b[i];

  for (let i = 0; i < n - 1; i++) p2[i] = 2 * K[i + 1] - p1[i + 1];

  p2[n - 1] = 0.5 * (K[n] + p1[n - 1]);

  return {p1: p1, p2: p2};
}

function generatePoints(width: number, height: number, segmentCount: number, layerCount: number, variance: number): Point[][] {
  const cellWidth = width / segmentCount;
  const cellHeight = height / layerCount;
  const moveLimitX = cellWidth * variance * 0.5;
  const moveLimitY = cellHeight * variance;

  const points = [];
  for (let y = cellHeight; y < height; y += cellHeight) {
    let pointsPerLayer = [];
    pointsPerLayer.push({x: 0, y: Math.floor(y)});
    for (let x = cellWidth; x < width; x += cellWidth) {
      // this decides whether a segment is crest or trough
      const varietalY = y - moveLimitY / 2 + Math.random() * moveLimitY;
      const varietalX = x - moveLimitX / 2 + Math.random() * moveLimitX;
      pointsPerLayer.push({
        x: Math.floor(varietalX),
        y: Math.floor(varietalY),
      });
    }
    pointsPerLayer.push({x: width, y: Math.floor(y)});
    points.push(pointsPerLayer);
  }
  return points;
}

function generateClosedPath(
  curvePoints: Point[],
  leftCornerPoint: Point,
  rightCornerPoint: Point,
  filleColor: string,
  strokeColor: string,
  strokeWidth: number
): SVGElement {
  const xPoints = curvePoints.map((p) => p.x);
  console.log(xPoints);
  const yPoints = curvePoints.map((p) => p.y);
  console.log(yPoints);

  const xControlPoints = computeControlPoints(xPoints);
  console.log(xControlPoints);
  const yControlPoints = computeControlPoints(yPoints);
  console.log(yControlPoints);

  let path =
    `M ${leftCornerPoint.x},${leftCornerPoint.y} ` +
    `C ${leftCornerPoint.x},${leftCornerPoint.y} ` +
    `${xPoints[0]},${yPoints[0]} ` +
    `${xPoints[0]},${yPoints[0]} `;

  for (let i = 0; i < xPoints.length - 1; i++) {
    path += `C ${xControlPoints.p1[i]},${yControlPoints.p1[i]} ` + `${xControlPoints.p2[i]},${yControlPoints.p2[i]} ` + `${xPoints[i + 1]},${yPoints[i + 1]} `;
  }

  path +=
    `C ${xPoints[xPoints.length - 1]},${yPoints[xPoints.length - 1]} ` +
    `${rightCornerPoint.x},${rightCornerPoint.y} ` +
    `${rightCornerPoint.x},${rightCornerPoint.y} Z`;

  const svgPath = document.createElementNS(svgns, 'path');
  svgPath.setAttributeNS(null, 'fill', filleColor);
  svgPath.setAttributeNS(null, 'stroke', strokeColor);
  svgPath.setAttributeNS(null, 'stroke-width', strokeWidth.toString());
  svgPath.setAttributeNS(null, 'd', path);

  return svgPath;
}

export class Wave {
  properties: WaveProps;
  points: Point[][];

  constructor(options: WaveProps) {
    this.properties = {...defaultData, ...options};
    this.points = generatePoints(
      this.properties.width,
      this.properties.height,
      this.properties.segmentCount,
      this.properties.layerCount,
      this.properties.variance
    );
  }
  generateSvg(): SVGElement {
    //   Creates an element with the specified namespace URI
    const svg = document.createElementNS(svgns, 'svg');
    svg.setAttribute('width', this.properties.width.toString());
    svg.setAttribute('height', this.properties.height.toString());
    svg.setAttribute('xmlns', svgns);

    // Append layer of a wave
    for (let i = 0; i < this.points.length; i++) {
      svg.appendChild(
        generateClosedPath(
          this.points[i],
          {x: 0, y: this.properties.height},
          {x: this.properties.width, y: this.properties.height},
          this.properties.fillColor,
          this.properties.strokeColor,
          this.properties.strokeWidth
        )
      );
    }
    return svg;
  }
}

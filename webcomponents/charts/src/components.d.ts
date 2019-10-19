/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DeckgoBarChart {
    'animation': boolean;
    'animationDuration': number;
    'draw': (width?: number, height?: number) => Promise<void>;
    'height': number;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'marginBottom': number;
    'marginLeft': number;
    'marginRight': number;
    'marginTop': number;
    'next': () => Promise<void>;
    'prev': () => Promise<void>;
    'separator': string;
    'src': string;
    'width': number;
  }
  interface DeckgoLineChart {
    'animation': boolean;
    'animationDuration': number;
    'area': boolean;
    'datePattern': string;
    'draw': (width?: number, height?: number) => Promise<void>;
    'grid': boolean;
    'height': number;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'marginBottom': number;
    'marginLeft': number;
    'marginRight': number;
    'marginTop': number;
    'next': () => Promise<void>;
    'prev': () => Promise<void>;
    'separator': string;
    'smooth': boolean;
    'src': string;
    'ticks': number;
    'width': number;
    'yAxisDomain': string;
  }
  interface DeckgoPieChart {
    'animation': boolean;
    'animationDuration': number;
    'draw': (width?: number, height?: number) => Promise<void>;
    'height': number;
    'innerRadius': number;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'next': () => Promise<void>;
    'prev': () => Promise<void>;
    'separator': string;
    'src': string;
    'width': number;
  }
}

declare global {


  interface HTMLDeckgoBarChartElement extends Components.DeckgoBarChart, HTMLStencilElement {}
  var HTMLDeckgoBarChartElement: {
    prototype: HTMLDeckgoBarChartElement;
    new (): HTMLDeckgoBarChartElement;
  };

  interface HTMLDeckgoLineChartElement extends Components.DeckgoLineChart, HTMLStencilElement {}
  var HTMLDeckgoLineChartElement: {
    prototype: HTMLDeckgoLineChartElement;
    new (): HTMLDeckgoLineChartElement;
  };

  interface HTMLDeckgoPieChartElement extends Components.DeckgoPieChart, HTMLStencilElement {}
  var HTMLDeckgoPieChartElement: {
    prototype: HTMLDeckgoPieChartElement;
    new (): HTMLDeckgoPieChartElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-bar-chart': HTMLDeckgoBarChartElement;
    'deckgo-line-chart': HTMLDeckgoLineChartElement;
    'deckgo-pie-chart': HTMLDeckgoPieChartElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoBarChart extends JSXBase.HTMLAttributes<HTMLDeckgoBarChartElement> {
    'animation'?: boolean;
    'animationDuration'?: number;
    'height'?: number;
    'marginBottom'?: number;
    'marginLeft'?: number;
    'marginRight'?: number;
    'marginTop'?: number;
    'separator'?: string;
    'src'?: string;
    'width'?: number;
  }
  interface DeckgoLineChart extends JSXBase.HTMLAttributes<HTMLDeckgoLineChartElement> {
    'animation'?: boolean;
    'animationDuration'?: number;
    'area'?: boolean;
    'datePattern'?: string;
    'grid'?: boolean;
    'height'?: number;
    'marginBottom'?: number;
    'marginLeft'?: number;
    'marginRight'?: number;
    'marginTop'?: number;
    'separator'?: string;
    'smooth'?: boolean;
    'src'?: string;
    'ticks'?: number;
    'width'?: number;
    'yAxisDomain'?: string;
  }
  interface DeckgoPieChart extends JSXBase.HTMLAttributes<HTMLDeckgoPieChartElement> {
    'animation'?: boolean;
    'animationDuration'?: number;
    'height'?: number;
    'innerRadius'?: number;
    'separator'?: string;
    'src'?: string;
    'width'?: number;
  }

  interface IntrinsicElements {
    'deckgo-bar-chart': DeckgoBarChart;
    'deckgo-line-chart': DeckgoLineChart;
    'deckgo-pie-chart': DeckgoPieChart;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}



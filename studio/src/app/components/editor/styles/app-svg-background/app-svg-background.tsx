import {Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch} from '@stencil/core';
import {RangeChangeEventDetail} from '@ionic/core';

import {ColorUtils, InitStyleColor} from '../../../../utils/editor/color.utils';
import {Wave, WaveProps} from './../../../../utils/editor/wave.utils';

@Component({
  tag: 'app-svg-background',
})
export class AppSvgBackground {
  @Element() el: HTMLElement;

  @Prop()
  selectedElement: HTMLElement;

  @Prop()
  moreColors: boolean = true;

  @Prop()
  slide: boolean = false;

  @Prop()
  deck: boolean = false;

  @Prop()
  colorType: 'text' | 'background' = 'text';

  @Prop()
  expander: boolean = true;

  @State()
  private color: string;

  @State()
  private hasSvgBackground: boolean = false;

  @State()
  private colorOpacity: number = 100;

  @Event() colorChange: EventEmitter<void>;

  async componentWillLoad() {
    await this.initCurrentColors();
  }

  @Watch('colorType')
  async onColorTypeChange() {
    await this.initCurrentColors();
  }

  @Method()
  async initCurrentColors() {
    if (!this.selectedElement) {
      return;
    }

    let styleColor: InitStyleColor;

    // prettier-ignore
    if (this.colorType === 'background') {
      styleColor = await ColorUtils.splitColor(this.selectedElement.style.getPropertyValue('--background') ? this.selectedElement.style.getPropertyValue('--background') : this.selectedElement.style.background);
    } else {
      styleColor = await ColorUtils.splitColor(this.selectedElement.style.getPropertyValue('--color') ? this.selectedElement.style.getPropertyValue('--color') : this.selectedElement.style.color);
    }

    this.color = styleColor.rgb;
    this.colorOpacity = styleColor.opacity;
  }

  waveInit(data: WaveProps): {element: HTMLElement; svg: SVGElement} {
    let wavery = new Wave(data);
    var svg = wavery.generateSvg();
    var element = document.getElementById('svg-background');

    return {element, svg};
  }

  private async toggleSvgBackground($event: CustomEvent) {
    if (!this.selectedElement || !$event || !$event.detail) {
      return;
    }
    const {element, svg} = this.waveInit({});
    if (!this.hasSvgBackground) {
      await this.applySvg(element, svg);
    } else {
      await this.removeSvg(element);
    }
  }

  private async applySvg(element: HTMLElement, svg: SVGElement): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.selectedElement || !element || !svg) {
        resolve();
        return;
      }
      this.hasSvgBackground = true;
      element.appendChild(svg);
      resolve();
    });
  }

  private async removeSvg(element: HTMLElement): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.selectedElement || !element) {
        resolve();
        return;
      }
      this.hasSvgBackground = false;
      element.innerHTML = '';
      resolve();
    });
  }

  private async changeSVGColor(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.selectedElement || !this.color || !this.hasSvgBackground) {
        resolve();
        return;
      }
      var svgElement = document.getElementById('wave-svg');
      var fillColor = `rgb(${this.color})`;
      svgElement.setAttribute('fill', fillColor);
      resolve();
    });
  }

  private async selectColor($event: CustomEvent) {
    if (!this.selectedElement || !$event || !$event.detail) {
      return;
    }

    this.color = $event.detail.rgb;
    await this.changeSVGColor();
  }

  private updateOpacity($event: CustomEvent<RangeChangeEventDetail>): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if (!$event || !$event.detail || $event.detail.value < 0 || $event.detail.value > 100) {
        resolve();
        return;
      }

      $event.stopPropagation();

      const opacity: number = $event.detail.value as number;

      this.colorOpacity = opacity;

      await this.applyColor();

      resolve();
    });
  }

  render() {
    return (
      <app-expansion-panel expander={this.expander}>
        <ion-label slot="title">
          Wavy Background
          <ion-toggle onIonChange={(e: CustomEvent) => this.toggleSvgBackground(e)}></ion-toggle>
        </ion-label>
        <ion-list class="ion-no-padding">
          <ion-item-divider class="ion-padding-top">
            <ion-label>
              Waves <small>{this.colorOpacity}%</small>
            </ion-label>
          </ion-item-divider>
          <ion-item class="item-opacity">
            <ion-range
              color="primary"
              min={0}
              max={100}
              disabled={!this.color || this.color === undefined}
              value={this.colorOpacity}
              mode="md"
              onIonChange={(e: CustomEvent<RangeChangeEventDetail>) => this.updateOpacity(e)}></ion-range>
          </ion-item>
        </ion-list>
        <deckgo-color
          class="ion-padding-start ion-padding-end ion-padding-bottom"
          more={this.moreColors}
          onColorChange={($event: CustomEvent) => this.selectColor($event)}
          color-rgb={this.color}>
          <ion-icon src="/assets/icons/ionicons/ellipsis-vertical.svg" slot="more" aria-label="More" class="more"></ion-icon>
        </deckgo-color>
        <ion-item class="action-button ion-margin-bottom">
          <ion-button shape="round" onClick={() => this.resetColor()} fill="outline" class="delete" disabled={this.color === null}>
            <ion-label>Reset color</ion-label>
          </ion-button>
        </ion-item>
      </app-expansion-panel>
    );
  }
}

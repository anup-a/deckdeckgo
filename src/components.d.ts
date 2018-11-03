/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DeckgoDeck {
    'doPrint': () => Promise<void>;
    'getActiveIndex': () => Promise<number>;
    'getLength': () => Promise<number>;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'keyboard': boolean;
    'pager': boolean;
    'slideNext': () => Promise<void>;
    'slidePrev': () => Promise<void>;
    'slideTo': (index: number, speed?: number) => Promise<void>;
    'toggleFullScreen': () => Promise<void>;
  }
  interface DeckgoDeckAttributes extends StencilHTMLAttributes {
    'keyboard'?: boolean;
    'pager'?: boolean;
  }

  interface DeckgoPager {
    'activeIndex': number;
    'length': number;
  }
  interface DeckgoPagerAttributes extends StencilHTMLAttributes {
    'activeIndex'?: number;
    'length'?: number;
  }

  interface DeckgoSlideCode {
    'anchor': string;
    'anchorZoom': string;
    'beforeSwipe': (swipeLeft: boolean) => Promise<boolean>;
    'hideAnchor': boolean;
    'lazyLoadImages': () => Promise<void>;
    'srcFile': string;
  }
  interface DeckgoSlideCodeAttributes extends StencilHTMLAttributes {
    'anchor'?: string;
    'anchorZoom'?: string;
    'hideAnchor'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'srcFile'?: string;
  }

  interface DeckgoSlideContent {
    'beforeSwipe': (swipeLeft: boolean) => Promise<boolean>;
    'lazyLoadImages': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideContentAttributes extends StencilHTMLAttributes {
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }

  interface DeckgoSlideSplit {
    'beforeSwipe': (swipeLeft: boolean) => Promise<boolean>;
    'lazyLoadImages': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideSplitAttributes extends StencilHTMLAttributes {
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }

  interface DeckgoSlideTitle {
    'beforeSwipe': (swipeLeft: boolean) => Promise<boolean>;
    'lazyLoadImages': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideTitleAttributes extends StencilHTMLAttributes {
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DeckgoDeck': Components.DeckgoDeck;
    'DeckgoPager': Components.DeckgoPager;
    'DeckgoSlideCode': Components.DeckgoSlideCode;
    'DeckgoSlideContent': Components.DeckgoSlideContent;
    'DeckgoSlideSplit': Components.DeckgoSlideSplit;
    'DeckgoSlideTitle': Components.DeckgoSlideTitle;
  }

  interface StencilIntrinsicElements {
    'deckgo-deck': Components.DeckgoDeckAttributes;
    'deckgo-pager': Components.DeckgoPagerAttributes;
    'deckgo-slide-code': Components.DeckgoSlideCodeAttributes;
    'deckgo-slide-content': Components.DeckgoSlideContentAttributes;
    'deckgo-slide-split': Components.DeckgoSlideSplitAttributes;
    'deckgo-slide-title': Components.DeckgoSlideTitleAttributes;
  }


  interface HTMLDeckgoDeckElement extends Components.DeckgoDeck, HTMLStencilElement {}
  var HTMLDeckgoDeckElement: {
    prototype: HTMLDeckgoDeckElement;
    new (): HTMLDeckgoDeckElement;
  };

  interface HTMLDeckgoPagerElement extends Components.DeckgoPager, HTMLStencilElement {}
  var HTMLDeckgoPagerElement: {
    prototype: HTMLDeckgoPagerElement;
    new (): HTMLDeckgoPagerElement;
  };

  interface HTMLDeckgoSlideCodeElement extends Components.DeckgoSlideCode, HTMLStencilElement {}
  var HTMLDeckgoSlideCodeElement: {
    prototype: HTMLDeckgoSlideCodeElement;
    new (): HTMLDeckgoSlideCodeElement;
  };

  interface HTMLDeckgoSlideContentElement extends Components.DeckgoSlideContent, HTMLStencilElement {}
  var HTMLDeckgoSlideContentElement: {
    prototype: HTMLDeckgoSlideContentElement;
    new (): HTMLDeckgoSlideContentElement;
  };

  interface HTMLDeckgoSlideSplitElement extends Components.DeckgoSlideSplit, HTMLStencilElement {}
  var HTMLDeckgoSlideSplitElement: {
    prototype: HTMLDeckgoSlideSplitElement;
    new (): HTMLDeckgoSlideSplitElement;
  };

  interface HTMLDeckgoSlideTitleElement extends Components.DeckgoSlideTitle, HTMLStencilElement {}
  var HTMLDeckgoSlideTitleElement: {
    prototype: HTMLDeckgoSlideTitleElement;
    new (): HTMLDeckgoSlideTitleElement;
  };

  interface HTMLElementTagNameMap {
    'deckgo-deck': HTMLDeckgoDeckElement
    'deckgo-pager': HTMLDeckgoPagerElement
    'deckgo-slide-code': HTMLDeckgoSlideCodeElement
    'deckgo-slide-content': HTMLDeckgoSlideContentElement
    'deckgo-slide-split': HTMLDeckgoSlideSplitElement
    'deckgo-slide-title': HTMLDeckgoSlideTitleElement
  }

  interface ElementTagNameMap {
    'deckgo-deck': HTMLDeckgoDeckElement;
    'deckgo-pager': HTMLDeckgoPagerElement;
    'deckgo-slide-code': HTMLDeckgoSlideCodeElement;
    'deckgo-slide-content': HTMLDeckgoSlideContentElement;
    'deckgo-slide-split': HTMLDeckgoSlideSplitElement;
    'deckgo-slide-title': HTMLDeckgoSlideTitleElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}

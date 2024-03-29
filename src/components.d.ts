/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';


export namespace Components {

  interface SpiHeader {}
  interface SpiHeaderAttributes extends StencilHTMLAttributes {}

  interface SpiHome {}
  interface SpiHomeAttributes extends StencilHTMLAttributes {}

  interface SpiList {}
  interface SpiListAttributes extends StencilHTMLAttributes {}

  interface SpiLg {}
  interface SpiLgAttributes extends StencilHTMLAttributes {}

  interface SpiProfile {}
  interface SpiProfileAttributes extends StencilHTMLAttributes {}

  interface SpiRoot {}
  interface SpiRootAttributes extends StencilHTMLAttributes {}

  interface SpiUe {}
  interface SpiUeAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SpiHeader': Components.SpiHeader;
    'SpiHome': Components.SpiHome;
    'SpiList': Components.SpiList;
    'SpiLg': Components.SpiLg;
    'SpiProfile': Components.SpiProfile;
    'SpiRoot': Components.SpiRoot;
    'SpiUe': Components.SpiUe;
  }

  interface StencilIntrinsicElements {
    'spi-header': Components.SpiHeaderAttributes;
    'spi-home': Components.SpiHomeAttributes;
    'spi-list': Components.SpiListAttributes;
    'spi-lg': Components.SpiLgAttributes;
    'spi-profile': Components.SpiProfileAttributes;
    'spi-root': Components.SpiRootAttributes;
    'spi-ue': Components.SpiUeAttributes;
  }


  interface HTMLSpiHeaderElement extends Components.SpiHeader, HTMLStencilElement {}
  var HTMLSpiHeaderElement: {
    prototype: HTMLSpiHeaderElement;
    new (): HTMLSpiHeaderElement;
  };

  interface HTMLSpiHomeElement extends Components.SpiHome, HTMLStencilElement {}
  var HTMLSpiHomeElement: {
    prototype: HTMLSpiHomeElement;
    new (): HTMLSpiHomeElement;
  };

  interface HTMLSpiListElement extends Components.SpiList, HTMLStencilElement {}
  var HTMLSpiListElement: {
    prototype: HTMLSpiListElement;
    new (): HTMLSpiListElement;
  };

  interface HTMLSpiLgElement extends Components.SpiLg, HTMLStencilElement {}
  var HTMLSpiLgElement: {
    prototype: HTMLSpiLgElement;
    new (): HTMLSpiLgElement;
  };

  interface HTMLSpiProfileElement extends Components.SpiProfile, HTMLStencilElement {}
  var HTMLSpiProfileElement: {
    prototype: HTMLSpiProfileElement;
    new (): HTMLSpiProfileElement;
  };

  interface HTMLSpiRootElement extends Components.SpiRoot, HTMLStencilElement {}
  var HTMLSpiRootElement: {
    prototype: HTMLSpiRootElement;
    new (): HTMLSpiRootElement;
  };

  interface HTMLSpiUeElement extends Components.SpiUe, HTMLStencilElement {}
  var HTMLSpiUeElement: {
    prototype: HTMLSpiUeElement;
    new (): HTMLSpiUeElement;
  };

  interface HTMLElementTagNameMap {
    'spi-header': HTMLSpiHeaderElement
    'spi-home': HTMLSpiHomeElement
    'spi-list': HTMLSpiListElement
    'spi-lg': HTMLSpiLgElement
    'spi-profile': HTMLSpiProfileElement
    'spi-root': HTMLSpiRootElement
    'spi-ue': HTMLSpiUeElement
  }

  interface ElementTagNameMap {
    'spi-header': HTMLSpiHeaderElement;
    'spi-home': HTMLSpiHomeElement;
    'spi-list': HTMLSpiListElement;
    'spi-lg': HTMLSpiLgElement;
    'spi-profile': HTMLSpiProfileElement;
    'spi-root': HTMLSpiRootElement;
    'spi-ue': HTMLSpiUeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}

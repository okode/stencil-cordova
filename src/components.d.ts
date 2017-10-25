/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import '@ionic/core';

import { MyName as MyName } from './components/my-name/my-name';

interface HTMLMyNameElement extends MyName, HTMLElement {
}
declare var HTMLMyNameElement: {
  prototype: HTMLMyNameElement;
  new (): HTMLMyNameElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "my-name": HTMLMyNameElement;
  }
  interface ElementTagNameMap {
      "my-name": HTMLMyNameElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "my-name": JSXElements.MyNameAttributes;
      }
  }
  namespace JSXElements {
      export interface MyNameAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          first?: string,
          last?: string
      }
  }
}


import { Component } from '@stencil/core';

@Component({
  tag: 'demo-app',
  styleUrl: 'demo-app.scss'
})
export class DemoApp {

  render() {
    return (
      <ion-button onClick={() => console.log('Clicked!')}>Say hello to Stencil!</ion-button>
    );
  }

}

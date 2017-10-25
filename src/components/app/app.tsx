import { Component } from '@stencil/core';

@Component({
  tag: 'app',
  styleUrl: 'app.scss'
})
export class App {

  render() {
    return (
      <ion-button onClick={() => console.log('Clicked!')}>Say hello to Stencil!</ion-button>
    );
  }

}

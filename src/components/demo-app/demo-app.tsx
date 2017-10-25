import { Component, State } from '@stencil/core';

@Component({
  tag: 'demo-app',
  styleUrl: 'demo-app.scss'
})
export class DemoApp {

  @State() counter = 0;

  render() {
    return (
      <ion-item>
        <ion-button onClick={() => ++this.counter}>Say hello to Stencil!</ion-button>
        Clicked {this.counter} times
      </ion-item>
    );
  }

}

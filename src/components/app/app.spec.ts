import { render } from '@stencil/core/testing';
import { App } from './app';

describe('my-name', () => {
  it('should build', () => {
    expect(new App()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [App],
        html: '<app></app>'
      });
    });

  });
});
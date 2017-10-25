import { render } from '@stencil/core/testing';
import { DemoApp } from './demo-app';

describe('demo-app', () => {
  it('should build', () => {
    expect(new DemoApp()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [DemoApp],
        html: '<demo-app></demo-app>'
      });
    });

  });
});
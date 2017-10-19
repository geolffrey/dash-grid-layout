import React from 'react';
import {shallow} from 'enzyme';
import GridLayout from '../GridLayout.react';

describe('GridLayout', () => {
  it('Renders using default values', () => {
    const component = shallow(<GridLayout />);
    expect(component).to.be.ok;
  });

  it('Renders when provided a list of children', () => {
    // Generate a random-length list of children
    const len = Math.floor(Math.random() * 10);
    const children = [];

    for(let i = 0; i < len; i++) {
      children[i] = (
        <div key={i}>Test</div>
      );
    }

    const component = shallow(
      <GridLayout>
        { children }
      </GridLayout>
    );

    expect(component).to.be.ok;
    expect(component.children()).to.have.length(len);
  });

  it('Renders when a correct layout array is provided', () => {
    const children = [
      (<div key={1}>Test</div>),
      (<div key={2}>Test</div>)
    ];
    const layout = [
      { x: 1, y: 1, w: 3, h: 1 },
      { x: 1, y: 2, w: 2, h: 2 }
    ];

    const component = shallow(
      <GridLayout
        layout={layout}
      >
        { children }
      </GridLayout>
    );

    expect(component).to.be.ok;
  });

  it('Does not render when an incorrect layout is provided', () => {
    const children = [
      (<div key={1}>Test</div>),
      (<div key={2}>Test</div>)
    ];
    const layout = [
      { wrong: 1, y: 1, w: 3, h: 1 },
      { x: 1, wrong: 2, w: 2, h: 2 }
    ];

    expect(() => (<GridLayout
        layout={layout}
      >
        { children }
      </GridLayout>
    )).to.throw();
  });
});

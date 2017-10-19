import React from 'react';
import {shallow} from 'enzyme';
import GridLayoutComponent from '../GridLayoutComponent.react';

describe('GridLayoutComponent', () => {
  it('Renders using default values', () => {
    const component = shallow(<GridLayoutComponent />);
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
      <GridLayoutComponent>
        { children }
      </GridLayoutComponent>
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
      <GridLayoutComponent
        layout={layout}
      >
        { children }
      </GridLayoutComponent>
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

    expect(() => (<GridLayoutComponent
        layout={layout}
      >
        { children }
      </GridLayoutComponent>
    )).to.throw();
  });
});

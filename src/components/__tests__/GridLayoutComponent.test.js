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

});

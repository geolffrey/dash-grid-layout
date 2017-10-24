import React from 'react';
import {shallow} from 'enzyme';
import GridItem from '../GridItem.react';

describe('GridItem', () => {
  it('Renders successfully using default values', () => {
    const component = shallow(<GridItem i={1}>Test</GridItem>);
    expect(component).to.be.ok;
  });

  it('Renders when layout information is provided', () => {
    const component = shallow(
      <GridItem layout={{x: 1, y: 1, h: 1, w: 1}} i={1}>Test</GridItem>
    );
    expect(component).to.be.ok;
  });

  it('Does not render if x,y,w,h values are missing from layout', () => {
    expect(() => (
      <GridItem layout={{isDraggable: false}} i={1}>Test</GridItem>
    )).to.throw();
  });
});

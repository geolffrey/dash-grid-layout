import React from 'react';
import {shallow} from 'enzyme';
import GridItem from '../../components/GridItem.react';
import gridItemWrapper from '../GridItemWrapper';

describe('GridItemWrapper', () => {
  it('Renders when a valid GridItem component is provided', () => {
    const gridItem = (<GridItem i='1' layout={{x: 1, y: 1, w: 1, h: 1}}>Hello World</GridItem>);
    const component = shallow(gridItemWrapper(gridItem));

    expect(component).to.be.ok;
  });

  it('Throws an error when any other component is provided', () => {
    const child = (<div>Not a GridItem</div>);
    expect(() => gridItemWrapper(child)).to.throw();
  })
});

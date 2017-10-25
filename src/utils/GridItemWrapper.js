import React from 'react';
import GridItem from '../components/GridItem.react';

/**
 * A wrapper function for GridItem
 * Because React Grid Layout works on the props of the
 * children passed to the root element, we can't just rely on
 * injecting the correct props at render time. Instead, we intercept
 * the GridItem pre-render, and replace it with a different component with the correct layout.
 *
 * In the future, this plain div will be replaced with a GridItemProxy component, that will
 * contain the necessary event handlers
 */
const gridItemWrapper = (gridItem, newLayout) => {
  if(gridItem.type !== GridItem) {
    throw new TypeError('Expected type GridItem, got type ' + gridItem.type);
  }

  const {
    i,
    layout
  } = gridItem.props;

  newLayout = (newLayout || new Array());
  let updatedLayout = Object.assign({}, (newLayout.find(x => x.i === i) || layout));
  updatedLayout.i = i;

  return (
    <div data-grid={updatedLayout} key={i}>
      { React.cloneElement(gridItem, { layout: updatedLayout }) }
    </div>
  );
}

export default gridItemWrapper;

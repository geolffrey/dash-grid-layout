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
const gridItemWrapper = (gridItem) => {
  if(gridItem.type !== GridItem) {
    throw new TypeError('Expected type GridItem, got type ' + gridItem.type);
  }

  const {
    i,
    layout
  } = gridItem.props;

  return (
    <div data-grid={layout} key={i}>
      { gridItem }
    </div>
  );
}

export default gridItemWrapper;

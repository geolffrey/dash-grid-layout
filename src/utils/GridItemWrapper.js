import React from 'react';

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
  const {
    layout,
    children
  } = gridItem.props;

  const key = gridItem.key;


  return (
    <div data-grid={layout} key={key}>
      { children }
    </div>
  );
}

export default gridItemWrapper;

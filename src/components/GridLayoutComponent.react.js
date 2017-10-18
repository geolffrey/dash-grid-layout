import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGridLayout from 'react-grid-layout';

class GridLayoutComponent extends Component {
  render() {
    const {
      rowHeight = 30,
      cols = 12,
      width = 1200, // May remove, make responsive
      children,
    } = this.props;

    return (
      <ReactGridLayout width={width} rowHeight={rowHeight} cols={cols}>
        { children }
      </ReactGridLayout>
    );
  }
}

GridLayoutComponent.propTypes = {
  /**
   * The ID used to identify the component in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * A list of renderable child elements, that will be placed inside the grid
   */
  children: PropTypes.node,

  /**
   * The height, in pixels of a row in the grid
   */
  rowHeight: PropTypes.number,

  /**
   * The number of columns to display on the grid
   */
  cols: PropTypes.number,

  /**
   * The width, in pixels, of the grid
   */
  width: PropTypes.number,

  /**
   * Dash-assigned callback that should be called whenever any of the properties change
   */
  setProps: PropTypes.func
};

export default GridLayoutComponent;

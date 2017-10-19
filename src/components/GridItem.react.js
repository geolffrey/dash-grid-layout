import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GridItem extends Component {
  render() {
    return (
      <div key={this.props.key}>Hello World</div>
    );
  }
}

GridItem.propTypes = {
  /**
   * A key for identifying components. Used to improve rendering times
   */
  key: PropTypes.string.isRequired,

  /**
   * A list of child elements to place inside the grid ite,
   */
  children: PropTypes.node,

  /**
   * The x-value of the element location, in grid units
   */
  x: PropTypes.number,

  /**
   * The y-value of the element location, in grid units
   */
  y: PropTypes.number,

  /**
   * The width of the element, in grid units
   */
  w: PropTypes.number,

  /**
   * The height of the element, in grid units
   */
  h: PropTypes.number,

  /**
   * The minimum width of the element, in grid units
   */
  minW: PropTypes.number,

  /**
   * The maximum width of the element, in grid units
   */
  maxW: PropTypes.number,

  /**
   * The minimum height of the element, in grid units
   */
  minH: PropTypes.number,

  /**
   * The maximum height of the element, in grid units
   */
  maxH: PropTypes.number,

  /**
   * Is static: if true, the element is not resizable or draggable
   */
  static: PropTypes.bool,

  /**
   * If false, element can not be dragged
   */
  isDraggable: PropTypes.bool,

  /**
   * If false, the element can not be resized
   */
  isResizable: PropTypes.bool,

  /**
   * Dash-assigned callback that should be called whenever any of the properties change
   */
  setProps: PropTypes.func
};

GridItem.defaultProps = {
  minW: 0,
  maxW: Infinity,
  minH: 0,
  maxH: Infinity,
  static: false,
  isDraggable: true,
  isResizable: true
};

export default GridItem;

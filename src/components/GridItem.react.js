import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A class for displaying an item in a grid
 * Designed to be wrapped in a function, similar to a higher-order component. Otherwise
 * the layout will render incorrectly
 */
class GridItem extends Component {
  /**
   * Upon mounting the component, perform a relayout on
   * Plotly components
   */
  componentDidMount() {
    // Relayout after a time period so that the rest of the layout can render properly
    window.setTimeout(() => {
      const children = this.props.children;

      if(Array.isArray(children)) {
        children.map(this.relayout);
      } else if(children) {
        this.relayout(children);
      }
    }, 200);
  }

  /**
   * Relayout the Plotly objects; modify their sizes to fit inside the columns
   */
  relayout(child) {
    if(child.props && child.props.id) {
      const id = child.props.id;
      const elem = document.getElementById(id);

      if(elem) {
        const parent = elem.parentElement.parentElement; //.react-grid-item

        const update = {
          width: parent.offsetWidth,
          height: parent.offsetHeight
        };

        try {
          window.Plotly.relayout(elem, update);
        } catch(e) {
          // Log the error
          window.console.log(e);
        }
      }
    }
  }

  render() {
    return (
      <div>{ this.props.children }</div>
    );
  }
}

GridItem.propTypes = {
  /**
   * An identifier for the component.
   * Synonymous with `key`, but `key` cannot be specified as
   * a PropType without causing errors. A caveat to this is that when using
   * the component in pure React (as opposed to via Dash), both `i` and `key`
   * must be specified
   */
  i: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * A list of child elements to place inside the grid ite,
   */
  children: PropTypes.node,

  /**
   * An object describing the layout of the element
   */
  layout: PropTypes.shape({
    /**
     * The x-value of the element location, in grid units
     */
    x: PropTypes.number.isRequired,

    /**
     * The y-value of the element location, in grid units
     */
    y: PropTypes.number.isRequired,

    /**
     * The width of the element, in grid units
     */
    w: PropTypes.number.isRequired,

    /**
     * The height of the element, in grid units
     */
    h: PropTypes.number.isRequired,

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
    isResizable: PropTypes.bool
  }),


  /**
   * Dash-assigned callback that should be called whenever any of the properties change
   */
  setProps: PropTypes.func
};

export default GridItem;

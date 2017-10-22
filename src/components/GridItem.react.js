import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GridItem extends Component {
    render() {
        return (
            <div>{ this.props.children }</div>
        );
    }
}

GridItem.propTypes = {
    /**
     * The x value in the grid
     */
    'data-grid': PropTypes.object,

    /**
     * The Key
     */
    key: PropTypes.string.isRequired,

    /**
     *
     */
    children: PropTypes.node,
}

export default GridItem;

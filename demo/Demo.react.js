import React, {Component} from 'react';
import {GridLayoutComponent} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h1>dash-grid-layout Demo</h1>

                <hr/>
                <h2>ExampleComponent</h2>
                <GridLayoutComponent
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;

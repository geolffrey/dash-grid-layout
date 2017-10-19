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
                  layout={
                   [
                    { x: 1, y: 1, h: 1, w: 1 },
                    { x: 2, y: 1, h: 1, w: 1 }
                   ]
                  }>
                  <div key={1}>Test</div>
                  <div key={2}>Test</div>
                </GridLayoutComponent>
                <hr/>
            </div>
        );
    }
}

export default Demo;

import React, {Component} from 'react';
import {GridLayout} from '../src';

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
                <GridLayout
                  layout={
                   [
                    { x: 1, y: 1, h: 1, w: 1 },
                    { x: 2, y: 1, h: 1, w: 1 }
                   ]
                  }>
                  <div key={1}>Test</div>
                  <div key={2}>Test</div>
                </GridLayout>
                <hr/>
            </div>
        );
    }
}

export default Demo;

import dash_grid_layout as dgl
import dash
import dash_core_components as dcc
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = dgl.GridLayout(
        [
            dgl.GridItem('Hello World', i=1),
            dgl.GridItem(
                [
                    dcc.Graph(
                        id='basic-chart',
                        figure={
                            'data': [
                                {
                                    'x': [1, 2, 3, 4],
                                    'y': [4, 1, 3, 5],
                                    'text': ['a', 'b', 'c', 'd'],
                                    'customdata': ['c.a', 'c.b', 'c.c', 'c.d'],
                                    'name': 'Trace 1',
                                    'mode': 'markers',
                                    'marker': {'size': 12}
                                    },
                                {
                                    'x': [1, 2, 3, 4],
                                    'y': [9, 4, 1, 4],
                                    'text': ['w', 'x', 'y', 'z'],
                                    'customdata': ['c.w', 'c.x', 'c.y', 'c.z'],
                                    'name': 'Trace 2',
                                    'mode': 'markers',
                                    'marker': {'size': 12}
                                    }
                                ]
                            },
                        config={
                            'autosizable': True
                            }
                        )
                    ],
                i=2,
                ),
            dgl.GridItem(
                [
                    dcc.Graph(
                        id='example-graph',
                        figure={
                            'data':                                                     [
                                {'x': [1, 2, 3], 'y': [4, 1, 2], 'type': 'bar', 'name': 'SF'},
                                {'x': [1, 2, 3], 'y': [2, 4, 5], 'type': 'bar', 'name': u'Montréal'},
                                ],
                            'layout': {
                                'title': 'Dash Data Visualization'
                                }
                            },
                        config={
                            'autosizable': True,
                            'doubleClick': 'autosize',
                            'frameMargins': 0,
                            },
                        ),

                    ],
                i=3
                )
            ],
        cols=2,
        rowHeight=300
        )

if __name__ == '__main__':
    app.run_server(debug=True)
    children

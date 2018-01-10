import dash_grid_layout as dgl
import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
import dash_widget_component as dwc

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    dgl.GridLayout(
        [
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
                        ),
                        dwc.Widget(type='global',
                            filters=[
                            {
                                'name': 'filter1',
                                'values': [
                                    'value1',
                                    'value2',
                                    'value3',
                                    ],
                                'default': 'value1'
                            },
                            {
                                'name': 'filter2',
                                'values': [
                                    'value4',
                                    'value5',
                                    'value6',
                                ],
                                'default': 'value4'
                            },
                            ])
                    ],
                i='2',
                layout={
                    'x': 0,
                    'y': 1,
                    'w': 3,
                    'h': 2
                    }
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
                i='3',
                layout={
                    'x': 0,
                    'y': 2,
                    'w': 3,
                    'h': 2,
                    }
                ),
            ],
        id='grid-layout',
        cols=4,
        rowHeight=300
        ),
        html.Div(id='hidden-div', style={'display': 'none'}),
        ])

if __name__ == '__main__':
    app.run_server(debug=True)

import dash_grid_layout
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = dash_grid_layout.GridLayout(
    [
        dash_grid_layout.GridItem('Hello world', key='1', **{
                'data-grid': {
                    'x': 1,
                    'y': 0,
                    'w': 3,
                    'h': 1
                }
            }),
        dash_grid_layout.GridItem('Hello world', key='2', **{
                'data-grid': {
                    'x': 2,
                    'y': 1,
                    'w': 1,
                    'h': 1
                }
            }),
    ],
    cols=4
)

if __name__ == '__main__':
    app.run_server(debug=True)

import dash_grid_layout
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = dash_grid_layout.GridLayout(
    [
        dash_grid_layout.GridItem('Hello World', i=1),
        dash_grid_layout.GridItem('Hello World', i=2, layout={
                'x': 2,
                'y': 4,
                'h': 2,
                'w': 3,
                'static': True
            })
    ],
    cols=4
)

if __name__ == '__main__':
    app.run_server(debug=True)

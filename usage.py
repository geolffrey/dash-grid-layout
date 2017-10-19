import dash_grid_layout
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = dash_grid_layout.GridLayoutComponent(
    [
        html.Div('Hello', key=0),
        html.Div('World', key=1)
    ],
    cols=2,
    layout=[
        { 'x': 0, 'y': 0, 'w': 1, 'h': 1, 'i': '0' },
        { 'x': 1, 'y': 0, 'w': 1, 'h': 1, 'i': '1' }
    ]
)

if __name__ == '__main__':
    app.run_server(debug=True)

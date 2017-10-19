import dash_grid_layout
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = dash_grid_layout.GridLayout(
    [
        dash_grid_layout.GridItem('Hello World', key='1')
    ],
)

if __name__ == '__main__':
    app.run_server(debug=True)

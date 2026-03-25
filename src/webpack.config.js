const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'main.js': [
      path.resolve(__dirname, 'index.js'),
      path.resolve(__dirname, 'game.js')
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../public')
  },
  // 4. Plugins to handle tasks like generating the index.html
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Tells Webpack to use your HTML file as a template
    })
  ],
  // Set to 'production' for optimized/minified code, or 'development' for readable code
  mode: 'production'

}

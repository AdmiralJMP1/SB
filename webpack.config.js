const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'static'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract([ 'css-loader', 'stylus-loader' ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

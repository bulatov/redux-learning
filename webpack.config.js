const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 entry: {
      main: './src/index.jsx',
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            ["transform-object-rest-spread", { "useBuiltIns": true }]
          ]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!resolve-url-loader!sass-loader?sourceMap'
        }),
      }
    ]
  },

  plugins: [
        new ExtractTextPlugin({
            filename: '[name].css?',
        }),
    ],
};

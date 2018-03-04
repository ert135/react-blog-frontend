var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var url

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css"
});

module.exports = {
  devtool: 'inline-source-map',
  entry: {
     app: path.resolve(__dirname, 'src/index.tsx'),
     vendor: path.resolve(__dirname, 'src/vendor.ts')
  },
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: './dist',
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: "/",
    historyApiFallback: {
      index: 'index.html'
    },
    port: 3000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin({
       name: "vendor"
    })
  ],
  module: {
    rules: [
      {test: /\.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader"},
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { url: false }
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.(png|svg)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader?name=img/[name].[ext]',
          options: {
            emitFile: false
          }
         }]
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};

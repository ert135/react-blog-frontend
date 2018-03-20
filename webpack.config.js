const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css"
});

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
     app: path.resolve(__dirname, 'src/index.tsx'),
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
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    }),
    new UglifyJsPlugin()
  ],
  module: {
    rules: [
      {test: /\.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader"},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "react"]
          }
        }
      },
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

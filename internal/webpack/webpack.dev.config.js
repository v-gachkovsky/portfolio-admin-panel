const path = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: 'app/index.hbs',
    templateParameters: {
      title: 'Portfolio Admin Panel',
    },
  }),
];

if (process.env.analyze) {
  plugins.push(new BundleAnalyzerPlugin());
}

const buildFolder = '../../build';

module.exports = {
  entry: './app/index.js',
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, buildFolder),
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },
    ],
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, buildFolder),
    compress: true,
    stats: 'errors-only',
    port: 3030,
  },
};

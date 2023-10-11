const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
  new HtmlWebpackPlugin({
    template: './index.html',
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'src/assets/mocks',
        to: 'assets',
      },
    ],
  }),
];

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode,
  target,
  plugins,
  devtool: 'source-map',
  entry: './src/app/main.tsx',
  devServer: {
    static: './dist',
    hot: true,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp|ico|svg)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
      },

      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      { test: /\.json$/, type: 'json' },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

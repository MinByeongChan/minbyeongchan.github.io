const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = (env) => {
  dotenv.config();
  const { ENV } = process.env;

  return {
    mode: ENV,
    entry: './src/index.tsx',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: `MBC Dev Blog | 기술블로그 | ${ENV === 'developement' && '개발'}`,
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
    optimization: {
      runtimeChunk: 'single',
    },
    devServer: {
      static: './build',
      port: 3000,
      open: true,
      hot: true,
    },
    devtool: 'inline-source-map',
  };
};

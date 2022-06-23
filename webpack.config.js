const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const meta = require('./meta');

module.exports = (env) => {
  dotenv.config();
  const { ENV } = process.env;

  return {
    mode: ENV,
    entry: './src/index.tsx',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
      assetModuleFilename: 'assets/[hash][ext][query]',
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
        // {
        //   test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         name: '[name].[ext]?[hash]',
        //         outputPath: 'assets/',
        //         publicPath: path.resolve(__dirname, './src/assets'),
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.(jpg|jpeg|gif|png|ico)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                fallback: 'file-loader',
                name: '[name].[ext]?[hash]',
                outputPath: 'assets/',
                publicPath: path.resolve(__dirname, './src/assets'),
              },
            },
          ],
          type: 'javascript/auto',
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.txt/,
          type: 'asset',
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
          use: ['@svgr/webpack'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({ ...meta }),
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
      historyApiFallback: { index: '/', disableDotRule: true },
    },
    devtool: 'inline-source-map',
  };
};

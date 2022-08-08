const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const meta = require('./meta');
const getPost = require('./config/post.js');

// posts fs 가져오기
getPost();

module.exports = () => {
  dotenv.config();
  const { ENV } = process.env;

  return {
    mode: ENV,
    entry: './src/index.tsx',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
      assetModuleFilename: 'images/[hash][ext][query]',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
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
          test: /\.(jpg|jpeg|gif|png|ico)$/i,
          type: 'asset/resource',
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.txt/,
          type: 'asset',
        },
        {
          // url-loadaer role
          test: /\.(jpg|jpeg|gif|png|ico|md)$/i,
          type: 'asset/inline',
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(txt|json)/,
          type: 'asset/source',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|)$/,
          type: 'asset/inline',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@store': path.resolve(__dirname, './src/store'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({ ...meta }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './public/assets'),
            to: path.resolve(__dirname, './build/assets'),
          },
          {
            from: path.resolve(__dirname, './_posts'),
            to: path.resolve(__dirname, './build/posts'),
          },
          {
            from: path.resolve(__dirname, './fonts'),
            to: path.resolve(__dirname, './build/fonts'),
          },
        ],
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

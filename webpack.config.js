const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV !== 'production' ? 'development' : 'production';

module.exports = {
  mode,
  devtool: mode === 'production' ? false : 'inline-source-map',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './public/assets/js/')
  },
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    port: 30001,
    open: false,
    contentBase: path.resolve(__dirname, './public'),
    watchContentBase: true,
    historyApiFallback: true,
    writeToDisk: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:30000'
      }
    }
  },
  optimization:
    mode === 'production'
      ? {
          minimizer: [
            new TerserPlugin({
              extractComments: false,
              terserOptions: {
                ecma: 6,
                compress: {
                  warnings: false,
                  drop_console: true
                }
              }
            })
          ]
        }
      : {}
};

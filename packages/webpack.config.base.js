const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv, dirname = __dirname) => {
  let config = {
    entry: [],
    output: {
      filename: '[name].js',
      path: path.resolve(dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@src': path.resolve(dirname, 'src/'),
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };

  if (argv.mode === 'development') {
    config = {
      ...config,
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Development',
          showErrors: true,
        }),
      ],
      devServer: {
        open: {
          app: {
            name: 'Google Chrome', // 플랫폼에 다름, 윈도우에서는 'chrome'
          }
        },
        host: '0.0.0.0',
        client: {
          overlay: {
            warnings: false,
            errors: false,
          },
        }
      },
      devtool: 'eval-cheap-module-source-map',
    };
  }

  return config;
};

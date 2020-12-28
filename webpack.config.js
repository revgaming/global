const webpack = require('webpack')
const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')

let isProduction = false

require('dotenv').config()

module.exports = (env, argv) => {
  isProduction = env.production === true

  process.env.NODE_ENV = argv.mode

  console.log('APP: ', process.env.APP_NAME)
  console.log('Mode: ', argv.mode)
  console.log('NODE_ENV: ', process.env.NODE_ENV)
  console.log('APP_ENV: ', process.env.APP_ENV)
  console.log('isProduction: ', isProduction) // bool

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 8,
            safari10: true,
          },
        }),
      ],
    },
    watchOptions: {
      aggregateTimeout: 200,
      poll: 500,
      ignored: 'node_modules/**',
    },
    plugins: [
      new webpack.EnvironmentPlugin([
        'APP_NAME',
        'APP_VERSION',
        'APP_URL',
        'APP_ENV',
        'APP_SSL',
        'APP_DEBUG',
        'APP_TIMEZONE',
        'APP_LOCALE',
        'APP_CURRENCY',
        'NODE_ENV',
      ])
    ],
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve('./src'),
      },
    },
  }
}

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

const paths = {
  source: {
    scripts: ['./src/js/main.js'],
    styles: './src/scss/main.scss',
    libs: [
      './src/libs/css/font-awesome.min.css',
      './src/config.json'
    ]
  },
  dest: {
    path: __dirname + '/build',
    scripts: 'assets/bundle.js',
    styles: 'assets/[name].css'
  }
};

module.exports = {
  entry: [
    ...paths.source.scripts,
    paths.source.styles,
    ...paths.source.libs,
  ],
  output: {
    path: paths.dest.path,
    filename: paths.dest.scripts
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "eslint-loader",
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }]
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: {sourceMap: true}
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          }
        ])
      },
      {
        test: /\.(css)$/,
        loader: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {sourceMap: true}
          }
        ])
      },
      {
        test: /\.(json)/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'url-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
        options: {
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: paths.dest.styles,
      allChunks: true,
    }),
    new HtmlWebpackPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['build']}
    }),
    new CopyWebpackPlugin([
      {
        context: 'src',
        from: 'img/**/*',
        to: ''
      },
    ]),
    new StyleLintPlugin({})
  ],
};
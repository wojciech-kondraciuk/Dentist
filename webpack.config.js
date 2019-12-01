const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/js/app.js"
  },

  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name].[chunkhash].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|jpg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
              publicPath: "images"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      ignoreOrder: false
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true //minimalize or not
      },
      hash: true,
      template: "index.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  optimization: {
    minimize: true,
    runtimeChunk: {
      name: "vendor"
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          minSize: 1
        }
      }
    }
  }
};

var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var SRC_DIR = path.join(__dirname, "./src");
var DIST_DIR = path.join(__dirname, "./dist");

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
    sourceMapFilename: "bundle.js.map"
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.jsx
    }),
  ],
  module : {
    rules : [
      {
        test : /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader","css-loader", "sass-loader"],
      }
    ]
  },

};
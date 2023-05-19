const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const ExtensionReloader = require("webpack-extension-reloader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Use 'production' for actual deployment
  context: path.resolve(__dirname, "./src"), // Change './src' to the path of your source files
  entry: {
    background: "./background.js", // Path to your background script file
    popup: "./popup.js", // Path to your popup script file
  },
  output: {
    path: path.resolve(__dirname, "./dist"), // Output path for bundled files
    filename: "[name].js",
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./popup.html", // Path to your popup HTML file
      inject: "body",
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" }, // Copy all files from 'assets' directory in 'src' to 'assets' directory in 'dist'
        { from: "manifest.json", to: "manifest.json" }, // Copy 'manifest.json' to 'dist'
      ],
    }),
    new ExtensionReloader({
      manifest: path.resolve(__dirname, "./src/manifest.json"), // Path to your manifest.json file
    }),
  ],
};

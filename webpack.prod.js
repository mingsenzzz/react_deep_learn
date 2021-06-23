const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  //打包时，可以针对多个同时组件进行打包，
  entry: {
    YourComponent: path.resolve(__dirname, "./src/YourComponent/index.js"),
    HerComponent: path.resolve(__dirname, "./src/HerComponent/index.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  // entry: "./src/index.js",
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "YourComponent.js",
  //   libraryTarget: "commonjs2",
  // },
  externals: {
    react: "react", // 避免打包react源码
    antd: "antd", //不将antd打包进去
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  //打包之前，清除之前的dist文件
  plugins: [new CleanWebpackPlugin()],
};

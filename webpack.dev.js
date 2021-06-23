const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./demo/app.js",
  output: {
    path: path.resolve(__dirname, "demo_dist"),
    filename: "demo.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            //配置在开发时，antd的按需加载
            plugins: [
              [
                "import",
                {
                  libraryName: "antd",
                  libraryDirectory: "es",
                  style: "css", // `style: true` 会加载 less 文件
                },
              ],
            ],
          },
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
  devServer: {
    port: 8088, //启动端口
    open: true, //配置默认打开浏览器，
    // proxy: {  //配置跨域
    // 	'/api': 'http://localhost:3000',
    // }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "公共组件打包",
    }),
  ],
};

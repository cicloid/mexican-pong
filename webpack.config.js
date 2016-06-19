var path = require("path");

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  resolve: {
    extensions: ['','.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./build",
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
}

const path = require("path");


module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./src/app.js']
  },
  resolve: {
    extensions: ['','.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
  },
  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  }
}

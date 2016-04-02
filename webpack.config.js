module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015' ],
          plugins: ["transform-es2015-spread", "transform-object-rest-spread"]
        }
      }
    ]
  }
}
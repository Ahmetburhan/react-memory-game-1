module.exports = {
  entry: {
    main: [
      './src/index.js',
      'webpack-dev-server/client?http://localhost:5000',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?' + JSON.stringify({ presets: ['react', 'es2015' ], plugins: ['transform-es2015-spread', 'transform-object-rest-spread'] })],
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    port: 5000,
  }
}
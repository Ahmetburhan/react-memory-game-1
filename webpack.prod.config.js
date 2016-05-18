var webpack = require('webpack')

var definePlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
})

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [definePlugin],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [
        'react-hot',
        'babel?' + JSON.stringify(
          {
            presets: ['react', 'es2015' ],
            plugins: [
              'transform-es2015-spread',
              'transform-object-rest-spread'
            ]
          })
      ],
      exclude: /node_modules/,
    }]
  }
}

module.exports = {
  entry: './index.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime']
        }
      }
    ]
  }
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name]-[chunkhash:5].js',
    path: __dirname + '/dist'
  }
};
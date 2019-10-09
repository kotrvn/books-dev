const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'build/js')
  }
};

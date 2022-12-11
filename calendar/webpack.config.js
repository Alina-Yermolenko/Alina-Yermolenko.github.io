const path = require('path');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
  // target: 'node',
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCss.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new MiniCss({
      filename: 'style.min.css'
    })
  ]
};

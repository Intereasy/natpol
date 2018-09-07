var ExtractTextPlugin = require('extract-text-webpack-plugin');
//if you want run webpack in loop. write : webpack --watch
module.exports = {
  entry: ['./app.js', './scss/styles.scss'],
  output: {
    filename: 'css/bundle.js'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
        options: {
          includePath: "./css/plain_css.css"
        }
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'css/[name].style.css',
      allChunks: true,
    }),
  ],
};

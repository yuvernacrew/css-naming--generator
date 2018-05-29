const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // npm run devで実行
  mode: 'development',
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader?blacklist[]=regenerator',
          options: {
            presets: ['env']
          }
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',

      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    // v15から必要
    new VueLoaderPlugin()
  ]
}

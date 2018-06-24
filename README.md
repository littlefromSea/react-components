## Install
```
  npm install rc-react -save-dev
```

## Usage

```js
  import { Button } from 'rc-react'
```

##config
```js
 var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    one:path.resolve(__dirname, './src/components/Button'),
    two:path.resolve(__dirname, './src/components/Collapse'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/components'),
    filename: '[name].js',
  },
  module:{
    rules:[
          {    
            test: /\.jsx?$/,    
            exclude: /(node_modules|bower_components)/,    
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference    
            query: {    
              presets: ['react', 'es2015']    
            }    
          },    
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          },
          {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
              'style-loader',
              'css-loader',
              'less-loader'
            ]
        },
        {
            test:/\.(woff|svg|eot|ttf)\??.*$/,
            use:[
                'file-loader?publicPath=/static/res/&outputPath=font/'
            ]
        }
      ]
  },
  resolve:{
      extensions: ['.js', '.jsx']
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"production"'
        }
      })
  ]
};
```

const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
        // publicPath:'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }
          ]
         },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'img/[name].[hash:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
    },
    resolve:{
      //alias:别名
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      } 
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
      new webpack.BannerPlugin("author guoyili"),
      new HtmlWebpackPlugin({template:'index.html'}),
      new UglifyJsPlugin() 
    ],
    devServer:{
      contentBase:'./dist',
      inline:true
    }
}
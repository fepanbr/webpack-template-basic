// const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
 entry: './js/main.js',   // 진입점 설정
   // 결과를 내어주는 부분 
 output: {
  // path: path.resolve(__dirname, 'dist'),   // 절대 경로로 설정해야함. 경로를 합쳐주는 역할 (__dirname => 그 파일이 있는 경로)
  // filename: 'main.js',
  clean: true,
 },

 module: {
   rules: [
     {
       test: /\.s?css$/,
       use: [   // 순서중요
         'style-loader',
         'css-loader',
         'postcss-loader',
         'sass-loader'
       ]
     },
     {
       test: /\.js$/,
       use: [
         'babel-loader'
       ]
     }
   ]
  },

 // 번들링 후 결과물의 처리방식 등 다양한 플러그인들을 설정
 plugins:  [
   new HtmlPlugin({
     template: './index.html'
   }),
   new CopyPlugin({
     patterns: [
       { from: 'static' },
     ]
   })
 ],

 devServer: {
   host: 'localhost'
 }
}
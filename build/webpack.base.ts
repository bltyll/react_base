import * as dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, DefinePlugin } from 'webpack';

import path from 'path';
// 加载配置文件
const envConfig = dotenv.config({
  path: path.resolve(__dirname, '../env/.env.' + process.env.NODE_ENV)
});
const baseConfig: Configuration = {
  entry: path.join(__dirname, '../src/index.tsx'), // 入口文件
  // 打包出口文件
  output: {
    filename: 'static/js/[name].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },
  // loader 配置
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/, // 匹配.ts, tsx,js,jsx文件
        use: 'babel-loader',
        exclude: /node_modules/ //不需要处理包里的，因为一般都化简过的js的
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 匹配图片文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024 // 小于10kb转base64
          }
        },
        generator: {
          filename: 'static/images/[hash][ext][query]' // 文件输出目录和命名
        }
      },
      {
        test: /\.m\.css$/, //匹配 module css 文件
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local', //模块化的默认值，其他值还有icss、global、pure
                localIdentName: '[path][name]__[local]--[hash:5]'
              }
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /.css$/,
        exclude: /\.m\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  //别名设置
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      // 复制 'index.html' 文件，并自动引入打包输出的所有资源（js/css）
      template: path.join(__dirname, '../public/index.html'),
      publicPath: './',
      // 压缩html资源
      minify: {
        collapseWhitespace: true, //去空格
        removeComments: true // 去注释
      }
    }),
    //环境变量
    new DefinePlugin({
      'process.env': JSON.stringify(envConfig.parsed) //{ BASE_URL: 'DEV_URL',BASE_ENV='development' }
    })
  ]
};
export default baseConfig;

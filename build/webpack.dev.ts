//webpack.dev.ts
import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const host = '127.0.0.1';
const port = '3005';

// 合并公共配置,并添加开发环境配置
const devConfig: Configuration = merge(baseConfig, {
  mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host,
    port,
    // 是否自动打开网页
    open: false,
    // gzip压缩,开发环境不开启，提升热更新速度
    compress: false,
    // 开启热更新
    hot: true,
    // 任何404响应都会被替代为 index.html 的内容，这样在前端路由时不会导致404错误。
    historyApiFallback: true,
    // 允许在 SIGINT 和 SIGTERM 信号时关闭开发服务器和退出进程。
    setupExitSignals: true,
    // 托管静态资源public文件夹
    static: {
      directory: path.join(__dirname, '../public')
    }
    // 默认情况下dev-server使用http协议，通过配置可以支持https，
    // https: true,
    //代理，/bili/user => https://api.bilibili.com/user
    // proxy: {
    //   "/bili": {
    //     // 以 /bili 开头的请求，会转发到下面的 target 配置
    //     target: "https://api.bilibili.com", // 目标服务器
    //     pathRewrite: { "^/bili": "" }, // 重写路径
    //     secure: false, // https接口，需要配置这个参数
    //   },
    // },
  }
});

export default devConfig;

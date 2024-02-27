import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';
const crypto = require('crypto');
const CompressionPlugin = require('compression-webpack-plugin');
const MAX_REQUEST_NUM = 20;
// 指定一个 module 可以被拆分为独立 区块（chunk） 的最小源码体积（单位：byte）
const MIN_LIB_CHUNK_SIZE = 10 * 1000;
const prodConfig: Configuration = merge(baseConfig, {
  mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
  performance: {
    //打包文件大小配置
    maxAssetSize: 300 * 1000
  },
  optimization: {
    splitChunks: {
      maxInitialRequests: MAX_REQUEST_NUM,
      maxAsyncRequests: MAX_REQUEST_NUM,
      minSize: MIN_LIB_CHUNK_SIZE,
      // 分隔代码
      cacheGroups: {
        defaultVendors: false,
        default: false,
        vendors: {
          // 提取node_modules代码
          test: /node_modules/, // 只匹配node_modules里面的模块
          name(module: any) {
            const hash = crypto.createHash('sha1');
            // if (isModuleCSS(module)) {
            //   module.updateHash(hash);
            // } else {
            if (!module.libIdent) {
              throw new Error(
                `Encountered unknown module type: ${module.type}. Please check webpack/prod.client.config.js.`
              );
            }
            hash.update(module.libIdent({ context: path.join(__dirname, '../') }));
            // }

            return `lib.${hash.digest('hex').substring(0, 8)}`;
          }, // 提取文件命名为vendors,js后缀和chunkhash会自动加
          minChunks: 1, // 只要使用一次就提取出来
          chunks: 'all', // 只提取初始化就能获取到的模块,不管异步的
          priority: 2, // 提取优先级为1
          reuseExistingChunk: true
        },
        shared: {
          chunks: 'all',
          name(module: any, chunks: any) {
            return `shared.${crypto
              .createHash('sha1')
              .update(
                chunks.reduce((acc: any, chunk: { name: any }) => {
                  return acc + chunk.name;
                }, '')
              )
              .digest('hex')
              .substring(0, 8)}${''}`;
          },
          priority: 1,
          minChunks: 2,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'), // 复制public下文件
          to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
          filter: source => !source.includes('index.html') // 忽略index.html
        }
      ]
    }),
    new CompressionPlugin({
      test: /.(js|css)$/, // 只生成css,js压缩文件
      filename: '[path][base].gz', // 文件命名
      algorithm: 'gzip', // 压缩格式,默认是gzip
      threshold: 10240, // 只有大小大于该值的资源会被处理。默认值是 10k
      minRatio: 0.8 // 压缩率,默认值是 0.8
    })
  ]
});

export default prodConfig;

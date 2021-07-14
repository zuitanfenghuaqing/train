import { defineConfig } from 'umi';
import path from 'path';

function resolve(v:string){
  return path.resolve(__dirname, v)
}

export default defineConfig({
  // base: '/',
  // hash: true,
  history: { type: 'hash' },
  nodeModulesTransform: {
    type: 'none',
  },
  devtool: 'source-map',
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  alias: {
    "@": resolve('./src'),
    'asset': resolve('./src/asset'),
    'component': resolve('./src/component'),
    'utils': resolve('./src/utils')
  },
  devServer: {
    host: 'localhost',
    open: true,
    hot: true,
    proxy: {

    }
  }
});

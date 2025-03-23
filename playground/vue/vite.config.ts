import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import jsxToDisplayString from '../../dist/index.js';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      babelPlugins: [
        jsxToDisplayString()
      ]
    })
  ]
});
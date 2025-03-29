import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import jsxToDisplayString from 'babel-plugin-jsx-to-display-string';
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      babelPlugins: [
        jsxToDisplayString()
      ]
    }),
    Inspect()
  ]
});
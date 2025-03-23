# babel-plugin-jsx-to-display-string 🚀

<div align="center">

[![NPM version](https://img.shields.io/npm/v/babel-plugin-jsx-to-display-string.svg)](https://www.npmjs.com/package/babel-plugin-jsx-to-display-string)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[English](./README.md) | [简体中文](./README.zh-CN.md)

一个实现了类似 Vue 的 `toDisplayString` 功能的 Babel 插件，适用于 React JSX/TSX 和 Vue JSX。它可以帮助你在 JSX 表达式中直观地显示复杂数据类型，如对象、数组、Map、Set 和 Symbol。

</div>

## ✨ 特性

- 🔄 在 React/Vue JSX 中实现类似 Vue 的 `toDisplayString`
- 📦 零配置设置
- 🎯 TypeScript 类型安全
- 🛠️ 同时支持 React 和 Vue
- 🔌 可扩展的插件选项

## 🚀 工作原理

该插件会将 JSX/TSX 表达式从：

```jsx
<div>{myObject}</div>
```

转换为：

```jsx
import { toDisplayString } from 'babel-plugin-jsx-to-display-string/runtime';

<div>{toDisplayString(myObject)}</div>
```

`toDisplayString` 函数可以处理多种数据类型的格式化：
- 📋 对象以 JSON 格式显示
- 📚 数组以 JSON 格式显示
- 🗺️ Map 以键值对形式显示
- 📑 Set 以集合形式显示
- 🔣 Symbol 被正确地字符串化
- ⚡ 函数以其字符串表示形式显示

## 📦 安装

```bash
npm install babel-plugin-jsx-to-display-string --save-dev
```

## 🔨 使用方法

### 在 React 和 Babel 中使用

在你的 `.babelrc` 或 babel 配置中：

```json
{
  "plugins": [
    ["babel-plugin-jsx-to-display-string"]
  ]
}
```

### 在 React 和 Vite 中使用

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsxToDisplayString from 'babel-plugin-jsx-to-display-string';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          jsxToDisplayString()
        ]
      }
    })
  ]
}); 
```

### 在 Vue JSX 和 Vite 中使用

在你的 `vite.config.js` 或 `vite.config.ts` 中：

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import jsxToDisplayString from 'babel-plugin-jsx-to-display-string';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      babelPlugins: [
        [jsxToDisplayString()]
      ]
    })
  ]
});
```

## ⚙️ 插件选项

- `importSource`: 导入 `toDisplayString` 的源模块（默认值：'babel-plugin-jsx-to-display-string/runtime'）
- `functionName`: 要使用的函数名称（默认值：'toDisplayString'）

## 👨‍💻 开发

构建插件：

```bash
npm run build
```

在 React playground 中测试：

```bash
npm run start:react
```

在 Vue playground 中测试：

```bash
npm run start:vue
```

## 📄 许可证

[MIT](./LICENSE) 
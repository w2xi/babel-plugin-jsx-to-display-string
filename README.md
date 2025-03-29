# babel-plugin-jsx-to-display-string 🚀

> **Warning**
> This project is a Work in Progress (WIP). Features and APIs are subject to change without notice.

<div align="center">

[![NPM version](https://img.shields.io/npm/v/babel-plugin-jsx-to-display-string.svg)](https://www.npmjs.com/package/babel-plugin-jsx-to-display-string)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[English](./README.md) | [简体中文](./README.zh-CN.md)

A Babel plugin that implements Vue-like `toDisplayString` functionality for React JSX/TSX and Vue JSX. This helps to visualize complex data types like Objects, Arrays, Maps, Sets, Symbols directly in JSX expressions.

</div>

## ✨ Features

- 🔄 Vue-like `toDisplayString` in React/Vue JSX
- 📦 Zero-config setup
- 🎯 Type-safe with TypeScript
- 🛠️ Works with both React and Vue
- 🔌 Extensible plugin options

## 🚀 How it works

This plugin transforms JSX/TSX expressions from:

```jsx
<div>{myObject}</div>
```

to:

```jsx
import { toDisplayString } from 'babel-plugin-jsx-to-display-string/runtime';

<div>{toDisplayString(myObject)}</div>
```

The `toDisplayString` function handles formatting of various data types:
- 📋 Objects are displayed as JSON
- 📚 Arrays are displayed as JSON
- 🗺️ Maps are displayed with keys and values
- 📑 Sets are displayed as collections
- 🔣 Symbols are properly stringified
- ⚡ Functions are displayed as their string representation

## 📦 Installation

```bash
npm install babel-plugin-jsx-to-display-string --save-dev
```

## 🔨 Usage

### With React and Babel

In your `.babelrc` or babel configuration:

```json
{
  "plugins": [
    ["babel-plugin-jsx-to-display-string"]
  ]
}
```

### With React and Vite

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

### With Vue JSX and Vite

In your `vite.config.js` or `vite.config.ts`:

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

## ⚙️ Plugin options

- `importSource`: The source module for importing `toDisplayString` (default: 'babel-plugin-jsx-to-display-string/runtime')
- `functionName`: The name of the function to use (default: 'toDisplayString')

## 👨‍💻 Development

To build the plugin:

```bash
npm run build
```

To test with the React playground:

```bash
npm run start:react
```

To test with the Vue playground:

```bash
npm run start:vue
```

## 📄 License

[MIT](./LICENSE) 
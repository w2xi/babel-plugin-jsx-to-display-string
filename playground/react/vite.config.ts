import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsxToDisplayString from 'babel-plugin-jsx-to-display-string';
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          jsxToDisplayString()
        ]
      }
    }),
    Inspect()
  ]
}); 
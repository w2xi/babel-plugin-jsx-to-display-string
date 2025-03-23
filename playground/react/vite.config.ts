import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsxToDisplayString from '../../dist/index.js';

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
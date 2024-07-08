import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lib-hooks-react'
    },
    sourcemap: true,
    minify: false,
    target: 'es6',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDom'
        }
      }
    }
  },
  plugins: [react(), dts({ include: ['src'], exclude: ['**/*.test.ts'] })]
})

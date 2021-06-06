import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import vitePluginImp from 'vite-plugin-imp'
// import { getThemeVariables } from 'antd/dist/theme'

const resolve = dir => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    // vitePluginImp({
    //   libList: [{
    //     libName: 'antd',
    //     style: (name) => `antd/lib/${name}/style/index.less`
    //   }]
    // })
  ],
  resolve: {
    extension: ['.js', '.jsx', '.styl'],
    alias: [{
      find: '/^~/', replacement: resolve('src'),
    }, {
      find: 'components', replacement: resolve('src/components')
    }]
  },
  optimizeDeps: {
    // include: ['axios']
  },
  build: {
    outDir: 'dist',
    minify: 'terser'
  },
  server: {
    open: true,
    // proxy: {
    //   '/api': {
    //     target: 'https://api.xxx.com/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  css: {
    preprocessorOptions: {
      // less: {
      //   javascriptEnabled: true,
      //   modifyVars: {
      //     ...getThemeVariables({
      //       dark: true
      //     }),
      //     ...{
      //       'primary-color': '#00a862'
      //     }
      //   }
      // }
    }
  }
})

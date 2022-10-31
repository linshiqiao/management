import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// Antd CSS样式插件按需引入 不用再想import 'antd/dist/antd.css' 引入所有样式
import styleImport, {AntdResolve} from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves: [
        AntdResolve()
      ],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})

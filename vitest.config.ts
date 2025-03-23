import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true, // 允许使用全局 `describe`、`it`
    environment: 'jsdom', // 模拟浏览器环境
    // setupFiles: './test/setup.ts', // 预加载的全局配置文件
  },
})

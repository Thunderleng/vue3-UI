import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [HstVue()],
  setupFile: 'histoire.setup.ts',
  locale: 'zh-CN',  // 设置为中文
})
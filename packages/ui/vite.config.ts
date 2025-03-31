import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
  build: {
    lib: {
      entry: resolve(__dirname, "./index.js"),
      name: "@zencold/content",
      formats: ["es", "cjs"],
      fileName: "zencold",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

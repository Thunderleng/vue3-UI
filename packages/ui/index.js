import components from "./src/index";

export * from "./src/index";
// 完整组件库安装方法（支持全局注册）
export default {
  install: (app) => components.forEach((c) => app.use(c)),
};

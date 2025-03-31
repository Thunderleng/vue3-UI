import { openBlock as r, createElementBlock as s } from "vue";
const _ = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [c, e] of n)
    o[c] = e;
  return o;
}, a = {};
function l(t, n) {
  return r(), s("div", null, " 123123 ");
}
const f = /* @__PURE__ */ _(a, [["render", l]]), u = [f], p = {
  install: (t) => u.forEach((n) => t.use(n))
};
export {
  f as Button,
  p as default
};

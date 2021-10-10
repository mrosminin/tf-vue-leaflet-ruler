import LRuler from "./LRuler.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("l-ruler", LRuler);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

LRuler.install = install;

export default LRuler;
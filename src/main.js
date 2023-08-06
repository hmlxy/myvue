import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";//css样式需要单独引入
import 'element-ui/lib/theme-chalk/display.css';//视口查询

Vue.use(ElementUI);
Vue.config.productionTip = false; //关闭生产环境的提示

new Vue({
  render: (h) => h(App), //render函数会将组件渲染到页面
}).$mount("#app");

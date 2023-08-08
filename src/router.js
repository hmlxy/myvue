import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import LayoutElement from './components/LayoutElement.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/HelloWorld', component: HelloWorld },
  { path: '/LayoutElement', component: LayoutElement },
 
];

const router = new VueRouter({
  routes
});

export default router;
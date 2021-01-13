import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/MyHeader'

//加载 vant 组件
import { NavBar, Icon, Step, Steps, Button, Swipe, SwipeItem, Lazyload, Tabbar, TabbarItem } from 'vant';


Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.component("my-header", MyHeader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

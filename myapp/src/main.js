import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/MyHeader'

//加载 vant 组件
import { Step, Steps, Button } from 'vant';


Vue.use(Step);
Vue.use(Steps);
Vue.use(Button)

Vue.component("my-header", MyHeader);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Row,
  Col,
  Icon,
  Card,
  Header,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'element-ui';

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Header);
Vue.use(Container);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

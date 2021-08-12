import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Input,
  Row,
  Col,
  Icon,
  Card,
  Header,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  PageHeader,
  Autocomplete,
} from 'element-ui';

Vue.use(Button);
Vue.use(Input);
Vue.use(Autocomplete);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Header);
Vue.use(Container);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(PageHeader);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

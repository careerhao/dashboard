import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Aside,
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
  Dialog,
  Form,
  Select,
  FormItem,
  Option,
  Menu,
  RadioButton,
  MenuItemGroup,
  MenuItem,
  Submenu,
  RadioGroup,
  Main,
  Skeleton,
  SkeletonItem,
  Radio,
  Notification,
  Tabs,
  TabPane,
  Link,
  Switch,
  Drawer,
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
Vue.use(Dialog);
Vue.use(Form);
Vue.use(Select);
Vue.use(FormItem);
Vue.use(Option);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Submenu);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Skeleton);
Vue.use(SkeletonItem);
Vue.use(Radio);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Link);
Vue.use(Switch);
Vue.use(Drawer);

Vue.prototype.$notify = Notification;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

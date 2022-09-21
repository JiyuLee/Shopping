import Vue from 'vue'
import App from './App.vue'
//引入路由相关文件
import router from '@/router'
// 引入仓库进行注册
import store from '@/store';
// 引入  三级联动组件---全局组件 轮播图  分页
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { Button,MessageBox } from 'element-ui';

// 注册  第一个参数：全局组件的名字；第二个参数：那一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
// 注册全局组件
Vue.component(Button.name,Button);
// elementui还有一种注册方法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入MockServer.js------mock虚拟数据
import '@/mock/mockServe';
//引入swiper样式
import 'swiper/css/swiper.css';

// 统一接口api文件夹里面全部请求函数
// 统一引入
import * as API from '@/api';

// 引入插件
import VueLazyload from 'vue-lazyload'
// 注册插件
Vue.use(VueLazyload,{
  // 懒加载默认图片
  // loading:
});

// 引入自定义对象
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins);

// 引入表单校验插件
import "@/plugins/validate"


import {reqGetSearchInfo} from '@/api';
console.log(reqGetSearchInfo({}));
// Vue.config.productionTip = false

// // 测试
// import {reqCategoryList} from '@/api';
// reqCategoryList();
new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  },
  //注册路由；底下的写法KV一致，省略v[router的r是小写]
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
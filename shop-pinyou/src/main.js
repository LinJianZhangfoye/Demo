import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import NavType from './components/NavType/NavType.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Pagination from '@/components/Pagination/Pagination.vue'
import './mock/mockServer'
import 'swiper/dist/css/swiper.min.css'

//同一节后api文件夹(这个目的是为了将api接口全部引入)
import * as API from '@/api'
//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: './assets/loading.gif',
});
//引入表单校验插件
import '@/plugins/validate'
//获取数据测试
/* import { reqCategoryList } from '@/api'
reqCategoryList()
 */
//调用自定义插件
import myPluins from '@/plugins/myPlugins'
Vue.use(myPluins)


Vue.component(NavType.name, NavType)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    //安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
        //将所有的额接口都挂载VUE原型接口上,所有的组件都可以使用这些接口
        Vue.prototype.$API = API
    },
    router,
    store,
}).$mount('#app')
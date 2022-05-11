import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)
let router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})

router.beforeEach(async(to, from, next) => {
    //to:可以获取到你要跳转到那个路由信息
    //from:可以获取到你从哪个路由而来的信息
    //next:放行函数. next()放行 next(path)放行到指 令路由
    let token = localStorage.getItem('TOKEN');
    let name = store.state.user.userInfo.name;
    if (token) {
        //如果已经登录
        if (to.path == '/login' || to.path == '/register') {
            //已经登录，去login
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //token失效，获取不到用户信息，重新登录
                    await store.dispatch('userLogOut')
                    next('/login')
                }
            }
        }
    } else {
        // 除此之外 放行
        // console.log(to.path); 
        // 获取用户去往的页面
        let toPath = to.path
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            // 把未登录的时候想去而没有去成的信息，存储于地址栏中
            next(`/login?redirect=${toPath}`)
        }
        next()
    }
})

export default router
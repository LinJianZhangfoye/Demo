//单独将路由规则提取出来
// import Home from '@/pages/Home/Home.vue'
// import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue'
import Search from '@/pages/Search/Search.vue'
import Detail from '@/pages/Detail/Detail.vue'
import AddCartSuccess from '@/components/AddCartSuccess/AddCartSuccess.vue'
import ShopCart from '@/pages/ShopCart/ShopCart.vue'
import Trade from '@/pages/Trade/trade.vue'
import Pay from '@/pages/Pay/pay.vue'
import PaySuccess from '@/pages/PaySuccess/paysuccess.vue'
import Center from '@/pages/Center/center.vue'
import groupOrder from '@/pages/Center/groupOrder/grouporder.vue'
import myOrder from '@/pages/Center/myOrder/myorder.vue'


const Home = () =>
    import ('@/pages/Home/Home.vue');
/**
 * 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
 * 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。
 */

export default [{
        path: '/center',
        component: Center,
        meta: {
            showFooter: true
        },
        children: [{
                path: 'myorder',
                component: myOrder
            },
            {
                path: 'grouporder',
                component: groupOrder
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/pay',
        component: Pay,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: {
            showFooter: true
        }
    },
    {
        path: "*",
        redirect: "/home",
    },
    {
        path: "/home",
        component: Home,
        meta: { showFooter: true },
    },
    {
        name: "search",
        path: "/serach/:keyword?",
        component: Search,
        meta: { showFooter: true },
    },
    {
        path: "/login",
        component: () =>
            import ('@/pages/Login/Login.vue'),
        meta: {
            //是否隐藏底部组件
            showFooter: false,
        },
    },
    {
        path: "/register",
        component: Register,
        meta: {
            //是否隐藏底部组件
            showFooter: false,
        },
    },
    {
        //点击产品的页面，跳转到详情页面，需要带上产品的id
        path: "/detail/:skuid",
        component: Detail,
        meta: {
            //是否隐藏底部组件
            showFooter: true,
        },
    },
    {

        path: '/addcartSuccess',
        component: AddCartSuccess,
        name: 'addcartSuccess',
        meta: {
            //是否隐藏底部组件
            showFooter: true,
        },
    },
    {
        path: '/trade',
        component: Trade,
        meta: {
            showFooter: true
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                //只能从购物车进入
                next();
            } else {
                next(false)
            }
        }
    }

];
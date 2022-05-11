// axios二次封装
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/store/utils/token'

let requests = axios.create({
    baseURL: "/api",
    timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    //查看本地存储是否有游客id
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    if (uuid_token) {
        config.headers.userTempId = uuid_token
    }
    //判断携带token带给服务器
    let token = getToken()
    if (token) {
        config.headers.token = token
    }
    NProgress.start();
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    NProgress.done()
        // console.log(res.data)
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

//对外暴露
export default requests
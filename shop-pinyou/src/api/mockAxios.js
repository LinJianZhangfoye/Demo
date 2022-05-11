// axios二次封装
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
let mockRequests = axios.create({
    baseURL: "/mock",
    timeout: 5000
})

// 请求拦截器
mockRequests.interceptors.request.use((config) => {
    NProgress.start();
    return config
})

// 响应拦截器
mockRequests.interceptors.response.use((res) => {
    NProgress.done()
        // console.log(res.data)
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

//对外暴露
export default mockRequests
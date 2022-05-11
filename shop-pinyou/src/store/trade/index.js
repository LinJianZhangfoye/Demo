//登录和注册模块
import { reqAddressInfo, reqOrderInfo } from '@/api'

const state = {
    address: [],
    orderInfo: {},
}

const actions = {
    //获取用户地址信息
    /**
     * 账号：13700000000
     * 密码：111111
     * @param {*} param0 
     */
    // 获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo()
        if (result.code == 200) {
            commit('ADDRESS', result.data)
        }
    },
    // 获取商品清单数据
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo()
        if (result.code == 200) {
            commit('ORDERINFO', result.data)
        }
    },
}

const mutations = {
    ADDRESS(state, address) {
        state.address = address
    },
    ORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo
    },

}
const getters = {

}

export default ({
    actions,
    mutations,
    state,
    getters
})
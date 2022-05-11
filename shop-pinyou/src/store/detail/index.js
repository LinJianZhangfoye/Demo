import { reqGoodsInfo, reqAddOrUpdateShopCart } from '../../api'
import { getUUID } from '../utils/uuid_token'
const state = {
    goodInfo: {},
    uuid_token: getUUID()
}

const actions = {
    // 获取产品信息的action
    async getGoodsInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
            // console.log(result.data)
        if (result.code == 200) {
            commit('GOODINFO', result.data)
        }
    },
    // 将产品添加到购物车中
    async addAddOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
            // console.log(result.data)
        if (result.code == 200) {
            return "ok"
        } else {
            return new Promise(new Error('fail'))
        }
    }
}

const mutations = {
    GOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const getters = {
    categoryView() {
        return state.goodInfo.categoryView || {}
    },
    skuInfo() {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList() {
        return state.goodInfo.spuSaleAttrList || []
    }

}

export default ({
    actions,
    mutations,
    state,
    getters
})
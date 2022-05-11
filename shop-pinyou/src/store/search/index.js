import { reqGoodsList } from '@/api'
const state = {
    searchList: []
}

const actions = {
    async getSearchList({ commit }, params = {}) {
        const reeult = await reqGoodsList(params);
        if (reeult.code == 200) {
            // console.log(reeult.data)
            commit('SEARCHLIST', reeult.data)
        }
    }
}

const mutations = {
    SEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
}
const getters = {
    //同时需要考虑没有网络的情况
    //商品展示数组
    goodsList() {
        return state.searchList.goodsList || []
    },
    //商品信息数组
    attrsList() {
        return state.searchList.attrsList || []
    },
    //商品品牌数组
    trademarkList() {
        return state.searchList.trademarkList || []
    }
}

export default ({
    actions,
    mutations,
    state,
    getters
})
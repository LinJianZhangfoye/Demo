import { reqCartList, reqDeleteCartById, reqUpdataCheckedById } from '@/api'
const state = {
    cartList: [],
}

const actions = {
    //获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('CARTLIST', result.data)
        }
        // console.log(result)
    },
    //删除购物车中的某一个数据
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return '删除成功'
        } else {
            return new Promise(new Error('删除失败'))
        }
    },
    //修改购物车某一产品的选中状态
    async updataCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdataCheckedById(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return new Promise(new Error('fail'))
        }
    },
    //修改全部产品的状态
    updataAllCartIsChecked({ dispatch, state }, isChecked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach((item) => {
            let promise = dispatch('updataCheckedById', {
                skuId: item.skuId,
                isChecked
            })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    },
    //删除全部勾选的商品
    deleteAllCheckedCart({ dispatch, getters }, ) {
        let promiseAll = [];
        console.log(getters.cartNewList.cartInfoList)
        getters.cartNewList.cartInfoList.forEach((item) => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
            promiseAll.push(promise)
        })

        return Promise.all(promiseAll)
    }

}

const mutations = {
    CARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const getters = {
    cartNewList() {
        return state.cartList[0] || []
    }
}

export default ({
    actions,
    mutations,
    state,
    getters
})
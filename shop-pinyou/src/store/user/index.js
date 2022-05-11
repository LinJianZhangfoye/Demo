//登录和注册模块
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogOut } from '@/api'
import { setToken, getToken, removeToken } from '../utils/token'
const state = {
    code: '',
    token: getToken(),
    userInfo: {},
}

const actions = {
    //获取仓库验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        console.log(result)
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //注册新用户
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //登录用户
    async userLogin({ commit }, user) {
        let result = await reqUserLogin(user);
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //获取用户信息
    // 获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit("GETUSERINFO", result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //退出登录
    async userLogOut({ commit }) {
        let result = await reqLogOut();
        // console.log(result)
        if (result.code == 200) {
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}

const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}
const getters = {

}

export default ({
    actions,
    mutations,
    state,
    getters
})
import requests from "./Axios";
import mockRequests from "./mockAxios";

//获取三级联动的数据
//请求地址：/api/product/getBaseCategoryList  请求方式:'GET'  请求参数：无
export const reqCategoryList = () =>
    requests({ url: "/product/getBaseCategoryList", method: "get" });

//获取轮播图数据
export const reqBannerList = () =>
    mockRequests({
        url: "/banner",
        method: "get",
    });
//获取floor数据
export const reqFloorList = () => mockRequests({
    url: '/floor',
    method: 'get',
})

//获取搜索模块的数据，地址:/api/list  请求方式post 参数:可选参数很多

export const reqGoodsList = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
});
//获取产品详情的数据 地址:/api/item/{skuId} 请求方式get 
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'get'
});
//添加产品到购物车(修改购物车产品数量)
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
});
//获取购物车列表数据
export const reqCartList = () => requests({
    url: '/cart/cartList',
    method: 'get',
})

//删除购物产品的接口
export const reqDeleteCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
});

//修改商品选中状态cart / checkCart / { skuID }/{isChecked}
export const reqUpdataCheckedById = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
});
//获取验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });
//注册用户 phone password code   
export const reqUserRegister = (data) => requests({
    url: '/user/passport/register',
    data,
    method: 'post'
});
//登录用户
export const reqUserLogin = (data) => requests({
    url: '/user/passport/login',
    data,
    method: 'post'
});
//获取用户信息，带着用户token向服务器要信息
export const reqUserInfo = () => requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
});
//退出登录
export const reqLogOut = () => requests({
    url: '/user/passport/logout',
    method: 'get'
});
//获取用户地址信息
export const reqAddressInfo = () => requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get',
});
// 获取商品的清单
export const reqOrderInfo = () => requests({ url: `/order/auth/trade`, method: 'get' });

//提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: `post` });
//获取订单支付信息
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: `GET` });
// 获取支付订单状态
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: `get` });
//获取个人中心的数据
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })
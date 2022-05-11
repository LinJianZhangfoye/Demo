module.exports = {
    productionSourceMap: false,
    lintOnSave: false,
    //代理跨域
    devServer: {
        proxy: {
            '/api': {
                //target: 'http://39.98.123.211',
                target: 'http://gmall-h5-api.atguigu.cn',
                // pathRewrite:{'^/api':''}
                changeOrigin: true // 支持跨域
            }
        }
    }
}
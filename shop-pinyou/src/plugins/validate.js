//vee-validate表单插件
import Vue from "vue";
import VeeValidate from "vee-validate";
import zh_CN, { attributes } from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

//表单验证
VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必须与密码相同` //修改内置规则的message,让确认密码和密码相同
    },
    //校验field属性映射中文名称
    attributes: {
        phone: '手机号',
        code: '验证码',
        password: '密码',
        password1: '确定密码',
        isCheck: '协议'
    }
})
import { v4 as uuidv4 } from 'uuid'

//生成一个随机数据并保存在本地存储
export const getUUID = () => {
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    if (!uuid_token) {
        uuid_token = uuidv4()
        localStorage.setItem('UUIDTOKEN', uuid_token)
    }
    return uuid_token
}
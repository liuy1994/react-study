import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import { message } from 'antd'
import reducer from '../redux'
import cookie from '../utils/cookie'
function unlogin() {
    reducer.dispatch({
        type: 'LOGOUT'
    })
    cookie.removeItem('max_blog')
    window.location.href = '#/sign/in'
}
axios.defaults.baseURL = '/blog'
axios.defaults.timeout =  6000
axios.interceptors.request.use(
    (request: AxiosRequestConfig) => {
        console.log(request)
        return request
    },
    (err: AxiosError) => {
        console.log(err)
    }
)
axios.interceptors.response.use(
    (response: AxiosResponse): any => {
        let res
        console.log('success')
        if (response.data === undefined) {
            res = JSON.parse(response.request.responseText)
        } else {
            res = response.data
        }
        if ('4001, 4002'.includes(res.code)) {
            unlogin()
            return Promise.reject(res)
        }
        if (res.code === '0000') {
            return res
        } else {
            message.error(res.msg)
            return Promise.reject(res)
        }
    },
    (err: AxiosError) => {
        let msg = '暂时连接不到Mysql，请放弃'
        if(err.response && err.response.statusText) {
            msg = err.response.statusText
        }
        message.error(msg)
        if(err.response && err.response.status){
            switch (err.response.status) {
                case 401:
                    unlogin()
            }
        }
        return Promise.reject(msg) // 返回接口返回的错误信息
    }
)
export default axios

import * as action from './actionTypes'
import {
    getQrKey,
    getQr,
    getQrCheck,
    getRefreshLogin,
    getLoginStatus,
    getLogout,
    getLoginWithPhoneAndPassword,
} from '@/service/login.js';

export const changeQrKeyAction = (res) => ({
    type: action.CHANGE_QR_KEY,
    qrKey: res.data.unikey,
})

export const changeQrAction = (res) => ({
    type: action.CHANGE_QR,
    qr: res.data.qrurl,
})

// res 数据结构
// {
//     "code": 800,
//      "message": "二维码不存在或已过期",
//      "cookie": ""
// }
export const changeQrCheckAction = (res) =>( {
    type: action.CHANGE_QR_CHECK,
    qrCheck: res,
})

// res数据结构
// {
//     "msg": "需要登录",
//     "code": 301,
//     "message": null
// }
export const changeRefreshLoginAction = (res) => ({
    type: action.CHANGE_REFRESH_LOGIN,
    refreshLogin : res
})


//可以获取到登录的账号信息
// {
//     "data": {
//         "code": 200,
//         "account": null,
//         "profile": null
//     }
// }
export const changeLoginStatusAction = (res) => ({
    type: action.CHANGE_LOGIN_STATUS,
    loginStatus: res.data
})
//退出成功会返回code200
// {
//     "code": 200
// }
export const changeLogoutAction = (res) => ({
    type: action.CHANGE_LOGOUT,
    logout: res.code
})

export const changeLoginWithPhoneAndPasswordAction = (res) => ({
    type: action.CHANGE_LOGIN_WITH_PHONE_AND_PASSWORD,
    loginWithPhoneAndPassword: res
})

//发送网络请求将结果传递给派发的action中
export const getQrKeyAction = () => {
    return (dispatch) => {
        //发送二维码key网络请求
        getQrKey(new Date()).then((res) => {
            dispatch(changeQrKeyAction(res))
        })
    }
}
export const getQrAction = (key) => {
    return (dispatch) => {
        //发送二维码网络请求
        getQr(key, true, new Date()).then((res) => {
            dispatch(changeQrAction(res))
        })
    }
}
export const getQrCheckAction = (key) => {
    return (dispatch) => {
        //发送二维码检测网络请求
        getQrCheck(key,new Date()).then((res) => {
            dispatch(changeQrCheckAction(res))
        })
    }
}
export const getRefreshLoginAction = () => {
    return (dispatch) => {
        //发送刷新登录网络请求
        getRefreshLogin.then((res) => {
            dispatch(changeRefreshLoginAction(res))
        })
    }
}
export const getLoginStatusAction = () => {
    return (dispatch) => {
        //发送登录状态网络请求
        getLoginStatus().then((res) => {
            dispatch(changeLoginStatusAction(res));
        })
    }
}
export const getLogoutAction = () => {
    return (dispatch) => {
        //发送退出登录网络请求
        getLogout().then((res) => {
            dispatch(changeLogoutAction(res))
        })
    }
}

export const getLoginWithPhoneAndPasswordAction = (phone, password) => {
    return (dispatch) => {
        //发送登录网络请求
        getLoginWithPhoneAndPassword(phone, password).then((res) => {
            dispatch(changeLoginWithPhoneAndPasswordAction(res))
        })
    }
}


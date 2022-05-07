import * as action from './actionTypes'
import {
    
    getLoginUserInfo,
    getUserDetail,
    getUserPlaylist,
} from '@/service/user';

import {
    getLoginStatus
} from '@/service/login'
export const changeLoginUserPlaylistAction = (res) => ({
    type: action.CHANGE_LOGIN_USER_PLAYLIST,
    qrKey: res,
})

export const changeLoginUserInfoAction = (res) => ({
    type: action.CHANGE_LOGIN_USER_INFO,
    qr: res,
})

export const changeUserDetailAction = (res) =>( {
    type: action.CHANGE_USER_DETAIL,
    qrCheck: res,
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




//发送网络请求将结果传递给派发的action中
export const getLoginUserPlaylistAction = (uid) => {
    return (dispatch) => {
        //发送用户歌单请求
        getUserPlaylist(uid).then((res) => {
            dispatch(changeLoginUserPlaylistAction(res))
        })
    }
}
export const getLoginUserInfoAction = (key) => {
    return (dispatch) => {
        //发送登录用户简单信息请求
        getLoginUserInfo().then((res) => {
            dispatch(changeLoginUserInfoAction(res))
        })
    }
}
export const getUserDetailAction = (uid) => {
    return (dispatch) => {
        //发送用户详细信息请求
        getUserDetail(uid).then((res) => {
            dispatch(changeUserDetailAction(res))
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





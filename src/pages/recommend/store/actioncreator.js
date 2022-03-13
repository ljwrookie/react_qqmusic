import * as actionTypes from './actionTypes'
import {
    getTopBanners,
    getHotRecommends,
    getPrivateContent,
    getNewSongs,
    getMvRecommends,
    //   getNewAlbums,
    // getSettleSinger,
} from '@/service/recommend.js'
// import { getToplistDetail } from '@/service/toplist'

// 轮播图Action
export const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNER,
    topBanners: res.banners,
})
//推荐歌单Action
export const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result,
})
// 独家放送Action
export const changePrivateContentAction = (res) => ({
    type: actionTypes.CHANGE_PRIVATE_CONTENT,
    privateContent: res.result,
})
// 最新歌曲Action
export const changeNewSongsAction = (res) => ({
    type: actionTypes.CHANGE_NEW_SONG,
    newSongs: res.data,
})
// 推荐mv Action
export const changeMvRecommendAction = (res) => ({
    type: actionTypes.CHANGE_MV_RECOMMEND,
    mvRecommends: res.result,
})
// --------------------------------------------------------------
// 发送网络请求将结果传递给派发的Action中 (react-redux可以让该函数返回一个函数而不是返回一个对象: redux-thunk使用)
// 轮播图network request
export const getTopBannersAction = () => {
    return (dispatch) => {
        // 发送网络请求
        getTopBanners().then((res) => {
            dispatch(changeTopBannerAction(res))
        })
    }
}

// 推荐歌单network request
export const getHotRecommendAction = () => {
    return (dispatch) => {
        // 发送网络请求
        getHotRecommends(10).then((res) => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}

// 独家放送network request
export const getPrivateContentAction = () => {
    return (dispatch) => {
        // 发送网络请求
        getPrivateContent(3).then((res) => {
            dispatch(changePrivateContentAction(res))
        })
    }
}
// 最新歌曲network request
export const getNewSongsAction = () => {
    return (dispatch) => {
        // 发送网络请求
        getNewSongs(0, 12).then((res) => {
            dispatch(changeNewSongsAction(res))
        })
    }
}
// 推荐MV network request
export const getMvRecommendAction = () => {
    return (dispatch) => {
        // 发送网络请求
        getMvRecommends(3).then((res) => {
            dispatch(changeMvRecommendAction(res))
        })
    }
}
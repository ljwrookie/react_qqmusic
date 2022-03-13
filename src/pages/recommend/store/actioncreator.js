import * as actionTypes from './actionTypes'
import {
    getTopBanners,
    //   getHotRecommends,
    //   getNewAlbums,
    // getSettleSinger,
} from '@/service/recommend.js'
// import { getToplistDetail } from '@/service/toplist'

// 轮播图Action
export const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNER,
    topBanners: res.banners,
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
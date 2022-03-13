import { Map } from 'immutable'

import * as actionTypes from './actionTypes'

// 使用Immutable管理redux中的state (修改的`state`不会修改原有数据结构, 而是返回修改后新的数据结构)
const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    privateContent:[],
    newSongs:[],
    mvRecommends:[]
    // newAlbums: [],

    // upRanking: {},
    // newRanking: {},
    // originRanking: {},

    // settleSinger: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNER:
            return state.set('topBanners', action.topBanners)
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommends', action.hotRecommends)
        case actionTypes.CHANGE_PRIVATE_CONTENT:
            return state.set('privateContent', action.privateContent)
        case actionTypes.CHANGE_NEW_SONG:
            return state.set('newSongs', action.newSongs)
        case actionTypes.CHANGE_MV_RECOMMEND:
            return state.set('mvRecommends', action.mvRecommends)
        // case actionTypes.CHANGE_NEW_ALBUMS:
        //     return state.set('newAlbums', action.newAlbums)

        // case actionTypes.CHANGE_UP_RANKING:
        //     return state.set('upRanking', action.upRanking)
        // case actionTypes.CHANGE_NEW_RANKING:
        //     return state.set('newRanking', action.newRanking)
        // case actionTypes.CHANGE_ORIGIN_RANKING:
        //     return state.set('originRanking', action.originRanking)

        // case actionTypes.CHANGE_SETTLE_SINGER:
        //     return state.set('settleSinger', action.settleSinger)
        default:
            return state
    }
}

export default reducer
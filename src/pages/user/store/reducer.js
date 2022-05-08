import {Map} from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = Map({
    loginUserInfo: {},
    loginUserPlaylist: [],
    loginStatus: {},
    userDetail: {},
    loginUserLoverList: [],
})

function reducer(state=defaultState, action){
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN_USER_PLAYLIST:
            return state.set('loginUserPlaylist', action.loginUserPlaylist);
        case actionTypes.CHANGE_REFRESH_LOGIN:
            return state.set('loginUserInfo', action.loginUserInfo);
        case actionTypes.CHANGE_LOGIN_STATUS:
            return state.set('loginStatus', action.loginStatus);
        case actionTypes.CHANGE_USER_DETAIL:
            return state.set('userDetail', action.userDetail);
        case actionTypes.CHANGE_LOGIN_USER_LOVER_LIST:
            return state.set('loginUserLoverList', action.loginUserLoverList);
        default:
            return state;
    }
}
export default reducer;
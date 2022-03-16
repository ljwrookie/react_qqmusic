import {Map} from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = Map({
    qrKey: '',
    qr: '',
    qrCheck: {},
    refreshLogin: {},
    loginStatus: {},
    logout: {}
})

function reducer(state=defaultState, action){
    switch (action.type) {
        case actionTypes.CHANGE_QR_KEY:
            return state.set('qrKey', action.qrKey)
        case actionTypes.CHANGE_QR:
            return state.set('qr', action.qr)
        case actionTypes.CHANGE_QR_CHECK:
            return state.set('qrCheck', action.qrCheck)
        case actionTypes.CHANGE_REFRESH_LOGIN:
            return state.set('refreshLogin', action.refreshLogin)
        case actionTypes.CHANGE_LOGIN_STATUS:
            return state.set('loginStatus', action.loginStatus)
        case actionTypes.CHANGE_LOGOUT:
            return state.set('logout', action.logout)
        default:
            return state
    }
}
export default reducer;
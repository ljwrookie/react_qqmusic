import { Map } from 'immutable'

import * as actionType from './actionType'

const defaultState = Map({
    allMv: [],
    newMv: [],
    exclusiveMv: [],
    mvRanking:[],
})
function reducer(state=defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_ALL_MV:
            return state.set('allMv', action.allMv)
        case actionType.CHANGE_NEW_MV:
            return state.set('newMv', action.newMv)
        case actionType.CHANGE_EXCLUSIVE_MV:
            return state.set('exclusiveMv', action.exclusiveMv)
        case actionType.CHANGE_MV_RANKING:
            return state.set('mvRanking', action.mvRanking)
        default:
            return state
    }
}
export default reducer
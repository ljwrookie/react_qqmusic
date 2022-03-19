import { Map } from "immutable";
import * as actionType from './actionType'
const defaultState = Map({
    mvDetail: {},
    mvDetailInfo: {},
    mvUrl:'',
    simMv: [],
    mvComments: {},
})

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_MV_DETAIL:
            return state.set('mvDetail', action.mvDetail)
        case actionType.CHANGE_MV_DETAIL_INFO:
            return state.set('mvDetailInfo', action.mvDetailInfo)
        case actionType.CHANGE_MV_URL:
            return state.set('mvUrl', action.mvUrl)
        case actionType.CHANGE_SIM_MV:
            return state.set('simMv', action.simMv)
        case actionType.CHANGE_MV_COMMENTS:
            return state.set('mvComments', action.mvComments)
        default:
            return state
    }
}
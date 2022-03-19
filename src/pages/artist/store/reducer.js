import { Map } from "immutable";
import * as actionType from './actionType'
const defaultState = Map({
    artistDesc: {},
    artistDetail: {},
    simArtist: [],
})

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_ARTIST_DESC:
            return state.set('artistDesc', action.artistDesc)
        case actionType.CHANGE_ARTIST_DETAIL:
            return state.set('artistDetail', action.artistDetail)
        case actionType.CHANGE_SIM_ARTIST:
            return state.set('simArtist', action.simArtist)
        default:
            return state
    }
}
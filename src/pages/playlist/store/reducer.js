import * as actionType from './actionType'
import { Map } from 'immutable'
const defaultState = Map({
    playlistDetail : {},
    playlistAllSongs: [],
    playlistComment:[],
    playlistSubscriber:[],
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_PLAYLIST_DETAIL:
            return state.set('playlistDetail', action.playlistDetail)
        case actionType.CHANGE_PLAYLIST_ALL_SONGS:
            return state.set('playlistAllSongs', action.playlistAllSongs)
        case actionType.CHANGE_PLAYLIST_COMMENT:
            return state.set('playlistComment', action.playlistComment)
        case actionType.CHANGE_PLAYLIST_SUBSCRIBER:
            return state.set('playlistSubscriber', action.playlistSubscriber)
        default:
            return state;
    }
}

export default reducer


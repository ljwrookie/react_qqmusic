import { Map } from 'immutable';
import * as actionTypes from './actionType';

const defaultState = Map({
    songList: [],
    mvList: [],
    albumList: [],
    singerList: [],
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_SONG_LIST:
            return state.set('songList', action.songList);
        case actionTypes.CHANGE_MV_LIST:
            return state.set('mvList', action.mvList);
        case actionTypes.CHANGE_ALBUM_LIST:
            return state.set('albumList', action.albumList);
        case actionTypes.CHANGE_SINGER_LIST:
            return state.set('singerList', action.singerList);
        default:
            return state;
    }
}
export default reducer;

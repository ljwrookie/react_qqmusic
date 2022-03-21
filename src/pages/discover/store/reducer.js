import { Map } from 'immutable';
import * as actionTypes from './actionType';

const defaultState = Map({
    newSongList: [],
    newAlbumList: [],
    allSingerList: [],
    topList: [],
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_NEW_SONG:
            return state.set('newSongList', action.res.data);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set('newAlbumList', action.res.albums);
        case actionTypes.CHANGE_SINGER_LIST:
            return state.set('allSingerList', action.res.artists);
        case actionTypes.CHANGE_TOP_LIST:
            return state.set('topList', action.res.list);
        default:
            return state;
    }
}
export default reducer;

import { Map } from 'immutable';
import * as actionTypes from './actionType';

const defaultState = Map({
    newSongList: [],
    newAlbumList: [],
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_NEW_SONG:
            return state.set('newSongList', action.res.data);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set('newAlbumList', action.res.albums);
        default:
            return state;
    }
}
export default reducer;

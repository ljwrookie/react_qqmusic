import * as actionTypes from './actionType';

import { getNewSong, getNewAlbum } from '@/service/discover';

const changeNewSongAction = (res) => ({
    type: actionTypes.CHANGE_NEW_SONG,
    res
});

const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    res,
});

export const getNewSongAction = (type = 0) => {
    return (dispatch) => {
        getNewSong(type).then((res) => {
            dispatch(changeNewSongAction(res));
        });
    };
};
export const getNewAlbumAction = (area = '全部') => {
    return (dispatch) => {
        getNewAlbum(area).then((res) => {
            dispatch(changeNewAlbumAction(res));
        });
    };
};

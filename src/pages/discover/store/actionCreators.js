import * as actionTypes from './actionType';

import {
    getNewSong,
    getNewAlbum,
    getSingerList,
    getTopList,
} from '@/service/discover';

const changeNewSongAction = (res) => ({
    type: actionTypes.CHANGE_NEW_SONG,
    res,
});

const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    res,
});

const changeSingerListAction = (res) => ({
    type: actionTypes.CHANGE_SINGER_LIST,
    res,
});

const changeTopListAction = (res) => ({
    type: actionTypes.CHANGE_TOP_LIST,
    res,
});
export const getNewSongAction = (type = 0) => {
    return (dispatch) => {
        getNewSong(type).then((res) => {
            dispatch(changeNewSongAction(res));
        });
    };
};
export const getNewAlbumAction = (area = 'ALL') => {
    return (dispatch) => {
        getNewAlbum(area).then((res) => {
            dispatch(changeNewAlbumAction(res));
        });
    };
};
export const getSingerListAction = (
    type = -1,
    area = -1,
    initial = -1,
    limit = 30,
    offset
) => {
    return (dispatch) => {
        getSingerList(type, area, initial, limit, offset).then((res) => {
            dispatch(changeSingerListAction(res));
        });
    };
};
export const getTopListAction = () => {
    return (dispatch) => {
        getTopList().then((res) => {
            dispatch(changeTopListAction(res));
        });
    };
};

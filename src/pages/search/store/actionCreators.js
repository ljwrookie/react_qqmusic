import * as actionTypes from './actionType';

import { getSearchList } from '@/service/search';

const changeSongListAction = (res) => ({
    type: actionTypes.CHANGE_SONG_LIST,
    songList: res.result.songs,
});

const changeMvListAction = (res) => ({
    type: actionTypes.CHANGE_MV_LIST,
    mvList: res.result.videos,
});
const changeAlbumListAction = (res) => ({
    type: actionTypes.CHANGE_ALBUM_LIST,
    albumList: res.result.albums,
});
const changeSingerListAction = (res) => ({
    type: actionTypes.CHANGE_SINGER_LIST,
    singerList: res.result.artists,
});

export const getSongListAction = (keywords, limit = 30, offset = 0) => {
    return (dispatch) => {
        getSearchList(keywords, 1, limit, offset).then((res) => {
            dispatch(changeSongListAction(res));
        });
    };
};
export const getMvListAction = (keywords, limit = 30, offset = 0) => {
    return (dispatch) => {
        getSearchList(keywords, 1014, limit, offset).then((res) => {
            dispatch(changeMvListAction(res));
        });
    };
};
export const getAlbumListAction = (keywords, limit = 30, offset = 0) => {
    return (dispatch) => {
        getSearchList(keywords, 10, limit, offset).then((res) => {
            dispatch(changeAlbumListAction(res));
        });
    };
};
export const getSingerListAction = (keywords, limit = 30, offset = 0) => {
    return (dispatch) => {
        getSearchList(keywords, 100, limit, offset).then((res) => {
            dispatch(changeSingerListAction(res));
        });
    };
};

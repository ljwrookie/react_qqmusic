import {
    getPlaylistDetail,
    getPlaylistAllSongs,
    getPlaylistComment,
    getPlaylistSubscriber
} from '@/service/playlist.js'
import * as actionType from './actionType'
export const changePlaylistDetailAction = (res)=>{
    return({
        type: actionType.CHANGE_PLAYLIST_DETAIL,
        playlistDetail: res.playlist,
    })
}
export const changePlaylistAllSongsAction = (res) => {
    return ({
        type: actionType.CHANGE_PLAYLIST_ALL_SONGS,
        playlistAllSongs: res.songs
    })
}

export const changePlaylistCommentAction = (res) => {
    return ({
        type: actionType.CHANGE_PLAYLIST_COMMENT,
        playlistComment: res
    })
}

export const changePlaylistSubscriberAction = (res) => {
    return ({
        type: actionType.CHANGE_PLAYLIST_SUBSCRIBER,
        playlistSubscriber: res.subscribers
    })
}

export const getPlaylistDetailAction = (id) => {
    return (dispatch) => {
        getPlaylistDetail(id).then((res)=> {
            dispatch(changePlaylistDetailAction(res))
        })
    }
}

export const getPlaylistAllSongsAction = (id) => {
    return (dispatch) => {
        getPlaylistAllSongs(id).then((res) => {
            dispatch(changePlaylistAllSongsAction(res))
        })
    }
}

export const getPlaylistCommentAction = (id, limit, offset) => {
    return (dispatch) => {
        getPlaylistComment(id, limit, offset).then((res) => {
            dispatch(changePlaylistCommentAction(res))
        })
    }
}
export const getPlaylistSubscriberAction = (id, limit, offset) => {
    return (dispatch) => {
        getPlaylistSubscriber(id, limit, offset).then((res) => {
            dispatch(changePlaylistSubscriberAction(res));
        });
    };
};



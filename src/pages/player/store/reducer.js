import { Map } from 'immutable';
import * as actionType from './actionType';
// 使用immutable管理state

const defaultState = Map({
    playList: [],
    currentSongIndex: 0,
    currentSong: {},
    playSequence: 0, // 0循环播放  1随机播放  2单曲循环
    firstLoad: true,
    lyricList: [],
    currentLyricIndex: 0,
    addSongDetail: {},
    playListCount: 1,

    newComments: [],
    hotComments: [],
    commentTotal: 0,
    currentPage: 1,
    // 歌曲详情
    songLyric: [],
    songInfo: {},
    similarSong: [], //相似歌曲
    similarAlbum: [], //包含这首歌的歌单
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_CURRENT_SONG:
            return state.set('currentSong', action.currentSong);
        case actionType.CHANGE_PLAY_LIST:
            return state.set('playList', action.playList);
        case actionType.CHANGE_CURRENT_SONG_INDEX:
            return state.set('currentSongIndex', action.index);
        case actionType.CHANGE_PLAY_SEQUENCE:
            return state.set('playSequence', action.sequence);
        case actionType.CHANGE_FIRST_LOAD:
            return state.set('firstLoad', action.isLoad);
        case actionType.CHANGE_LYRIC_LIST:
            return state.set('lyricList', action.lyric);
        case actionType.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set('currentLyricIndex', action.index);
        case actionType.CHANGE_ADD_SONG_DETAIL:
            return state.set('addSongDetail', action.addSongDetail);
        case actionType.CHANGE_PLAY_LIST_COUNT:
            return state.set('playListCount', action.count);
        case actionType.CHANGE_HOT_COMMENT:
            return state.set('hotComments', action.res);
        case actionType.CHANGE_NEW_COMMENT:
            return state.set('newComments', action.res);
        case actionType.CHANGE_PAGE_TOTAL:
            return state.set('commentTotal', action.res);
        case actionType.CHANGE_CURRENT_PAGE:
            return state.set('currentPage', action.res);
        case actionType.CHANGE_DETAIL_LYRIC:
            return state.set('songLyric', action.res);
        case actionType.CHANGE_SONG_DETAIL_INFO:
            return state.set('songInfo', action.res);
        case actionType.CHANGE_SIMILAR_SONG:
            return state.set('similarSong', action.res);
        case actionType.CHANGE_SIMILAR_ALBUM:
            return state.set('similarAlbum', action.res);
        default:
            return state;
    }
}

export default reducer;

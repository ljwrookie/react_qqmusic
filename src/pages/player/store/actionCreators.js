import * as actionType from './actionType';
import {
    getSongDetail,
    getLyric,
    getSongComment,
    getSimilarSong,
    getSimilarAlbum,
} from '@/service/player';
import { getRandomNumber } from '@/utils/math-utils';
import { parseLyric } from '@/utils/parse-lyric';
import { addPlaylistId, setCurrentSongIndex } from '@/utils/localstorage';

// 歌曲详情Action
const changeCurrentSongAction = (currentSong) => ({
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong,
});

// 更改歌曲索引Action
export const changeSongIndexAction = (index) => {
    // 设置本次存储Index
    setCurrentSongIndex(index);
    return {
        type: actionType.CHANGE_CURRENT_SONG_INDEX,
        index,
    };
};

// 更改播放列表Action
export const changePlayListAction = (playList) => ({
    type: actionType.CHANGE_PLAY_LIST,
    playList,
});

// 改变歌词Action
const changeLyricAction = (lyric) => ({
    type: actionType.CHANGE_LYRIC_LIST,
    lyric,
});

// 改变歌曲数量
const changePlayListCount = (count) => ({
    type: actionType.CHANGE_PLAY_LIST_COUNT,
    count,
});

// 首次加载Action
export const changeFirstLoad = (isFirstLoad) => ({
    type: actionType.CHANGE_FIRST_LOAD,
    isLoad: isFirstLoad,
});

// 改变currentLyricIndex
export const changeCurrentLyricIndexAction = (index) => ({
    type: actionType.CHANGE_CURRENT_LYRIC_INDEX,
    index,
});

// 更改播放顺序Action
export const changePlaySequenceAction = (sequence) => ({
    type: actionType.CHANGE_PLAY_SEQUENCE,
    sequence,
});

// 更改播放顺序Action
export const changeCurrentCommentTotal = (total) => ({
    type: actionType.CHANGE_CURRENT_TOTAL,
    total,
});

// 歌曲详情歌词
export const changeSongDetailLyricAction = (res) => ({
    type: actionType.CHANGE_DETAIL_LYRIC,
    res,
});

// 歌曲详情信息
export const changeSongDetailInfoAction = (res) => ({
    type: actionType.CHANGE_SONG_DETAIL_INFO,
    res,
});

// 热门评论
const changeSongHotCommentAction = (res) => ({
    type: actionType.CHANGE_HOT_COMMENT,
    res,
});

// 节目新评论
const changeSongNewCommentAction = (res) => ({
    type: actionType.CHANGE_NEW_COMMENT,
    res,
});

// 分页初始页
const changeSongCurrentPage = (res) => ({
    type: actionType.CHANGE_CURRENT_PAGE,
    res,
});

// 评论total
const changeSongTotal = (res) => ({
    type: actionType.CHANGE_PAGE_TOTAL,
    res,
});

// 相似歌曲
const changeSimilarSong = (res) => ({
    type: actionType.CHANGE_SIMILAR_SONG,
    res,
});

// 包含这首歌的歌单
const changeSimilarAlbumAction = (res) => ({
    type: actionType.CHANGE_SIMILAR_ALBUM,
    res,
});

// 切换歌曲Action
export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch, getState) => {
        // 根据playSequence决定是顺序播放还是随机播放
        const playSequence = getState().getIn(['player', 'playSequence']);
        // 播放列表
        const playList = getState().getIn(['player', 'playList']);
        // 当前播放的索引/下标
        let currentSongIndex = getState().getIn(['player', 'currentSongIndex']);

        // 根据播放顺序选择下一首音乐
        switch (playSequence) {
            case 1: // 随机播放
                // 生成一个随机数
                let random = getRandomNumber(playList.length);
                while (random === currentSongIndex) {
                    random = getRandomNumber(playList.length);
                }
                // 更改当前播放音乐的下标
                currentSongIndex = random;
                break;
            default:
                // 顺序播放
                // 更改当前播放音乐的下标
                currentSongIndex += tag;
                // 判断当前音乐的下标是否超出播放列表长度
                if (currentSongIndex >= playList.length) currentSongIndex = 0;
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        }

        // 获取需要播放的音乐
        const song = playList[currentSongIndex];
        // 更改当前播放的音乐
        dispatch(changeCurrentSongAction(song));
        dispatch(changeSongIndexAction(currentSongIndex));
        // 请求歌曲的歌词
        dispatch(getLyricAction(song.id));
    };
};

// 修改播放列表并修改歌曲数量
export const changePlaylistAndCount = (playlist) => {
    return (dispatch) => {
        dispatch(changePlayListAction(playlist));
        dispatch(changePlayListCount(playlist.length));
    };
};

// 歌曲详情network request
export const getSongDetailAction = (idx = 28940048) => {
    return async (dispatch, getState) => {
        // debugger
        // 1.根据id查找playList中是否已经有了该歌曲
        const playList = getState().getIn(['player', 'playList']);
        const songIndex = playList.findIndex((song) => song.id === idx);
        let song = null;
        // 2.判断是否找到歌曲
        if (songIndex !== -1) {
            // 找到歌曲
            // 设置当前播放歌曲的currentIndex
            dispatch(changeSongIndexAction(songIndex));
            song = playList[songIndex];
            // 设置当前播放的歌曲
            dispatch(changeCurrentSongAction(song));
            // 请求歌曲的歌词
            dispatch(getLyricAction(idx));
        } else {
            // 没找到歌曲
            // 请求该歌曲的数据
            // console.log(1)
            await getSongDetail(idx).then((res) => {
                // (0)歌曲ID添加到本地存储
                addPlaylistId(idx);
                const song = res.songs && res.songs[0];
                // console.log(song)
                if (!song) return;
                // (1)添加到播放列表中
                playList.push(song);
                dispatch(changePlayListAction(playList));
                // (2)更改当前播放的索引
                const songIndex = playList.length - 1;
                dispatch(changeSongIndexAction(songIndex));
                // (3)更改当前播放歌曲
                dispatch(changeCurrentSongAction(song));
                // (4)请求歌曲的歌词
                dispatch(getLyricAction(idx));
                // (5)更新歌曲数量
                dispatch(changePlayListCount(playList.length));
            });
        }
    };
};

// 歌曲详情network request(只有首次加载才会触发 Action,所以不redux中的playlist肯定不存在歌曲)
export const getSongDetailArrayAction = (listId, index) => {
    // 为什么单独抽离: (是根据listId来进行存储的)
    return (dispatch, getState) => {
        const playList = getState().getIn(['player', 'playList']);
        let i = 0;
        let timer = null;
        let executeRun = true;

        timer = setInterval(() => {
            let idx = listId[i];
            new Promise((resolve, reject) => {
                executeRun &&
                    getSongDetail(idx).then((res) => {
                        executeRun = false;
                        // console.log(res.songs[0])
                        // (0)歌曲ID添加到本地存储
                        addPlaylistId(idx);
                        const song = res.songs && res.songs[0];
                        // console.log(song)
                        if (!song) return;
                        // (1)添加到播放列表中
                        playList.push(song);
                        dispatch(changePlayListAction(playList));
                        // (2)更改当前播放的索引
                        const songIndex = index ?? playList.length - 1;
                        dispatch(changeSongIndexAction(songIndex));
                        // (3)更改当前播放歌曲
                        let currentIndexSong = playList[songIndex] || song;
                        // console.log(currentIndexSong)
                        dispatch(changeCurrentSongAction(currentIndexSong));
                        // (4)请求歌曲的歌词
                        dispatch(getLyricAction(idx));
                        // (5)更新歌曲数量
                        dispatch(changePlayListCount(playList.length));
                        resolve(i);
                    });
            }).then((value) => {
                executeRun = true;
                // console.log(value)
            });
            i++;
            if (i >= listId.length) {
                clearInterval(timer);
            }
        });
    };
};

// 歌词network request
export const getLyricAction = (id) => {
    return async (dispatch) => {
        await getLyric(id).then((res) => {
            const lyric = res.lrc && res.lrc.lyric;
            const lyricList = parseLyric(lyric);
            dispatch(changeLyricAction(lyricList));
        });
    };
};

// 获取歌曲详情用于添加到播放列表
export const getAddSongDetailAction = (id) => {
    return (dispatch, getState) => {
        getSongDetail(id).then((res) => {
            // (0)歌曲ID添加到本地存储
            addPlaylistId(id);
            const playList = getState().getIn(['player', 'playList']);
            // 先判断是已经存在播放列表,如果不存在,再进行添加
            const songIndex = playList.findIndex((song) => song.id === id);
            if (songIndex !== -1) return; // 找到了(后续不再执行)
            // 获取要添加播放的歌曲信息
            const willAddSong = res.songs && res.songs[0];
            // 添加到播放列表
            playList.push(willAddSong);
            // 派发action
            dispatch(changePlayListAction(playList));
            dispatch(changePlayListCount(playList.length));
        });
    };
};

// 获取歌曲详情 getSongDetail
export const getSongInfoAction = (ids) => {
    return (dispatch) => {
        getSongDetail(ids).then((res) => {
            const item = res && res.songs;
            dispatch(changeSongDetailInfoAction(...item));
        });
    };
};

// 获取歌曲详情歌词，可能会和播放的不同，需要重新获取一个
export const getSongLyricAction = (id) => {
    return async (dispatch) => {
        await getLyric(id).then((res) => {
            const { lyric } = res && res.lrc;
            const item = parseLyric(lyric);
            dispatch(changeSongDetailLyricAction(item));
        });
    };
};

// 获取歌曲热门评论
export const getHotCommentAction = (id, limit, offset) => {
    return (dispatch) => {
        getSongComment(id, limit, offset).then((res) => {
            const hotComments = res && res.hotComments;
            const comments = res && res.comments;
            const total = res && res.total;
            dispatch(changeSongHotCommentAction(hotComments));
            dispatch(changeSongNewCommentAction(comments));
            dispatch(changeSongTotal(total));
        });
    };
};

// 获取相似歌曲
export const getSimilarSongAction = (id) => {
    return (dispatch) => {
        getSimilarSong(id).then((res) => {
            const item = res && res.songs;
            dispatch(changeSimilarSong(item));
        });
    };
};

// 包含这首歌的歌单
export const getSimilarAlbumAction = (id) => {
    return (dispatch) => {
        getSimilarAlbum(id).then((res) => {
            const item = res && res.playlists;
            dispatch(changeSimilarAlbumAction(item));
        });
    };
};

// 分页
export const getSongCommentTotalAction = (currentPage) => {
    return (dispatch) => {
        dispatch(changeSongCurrentPage(currentPage));
    };
};

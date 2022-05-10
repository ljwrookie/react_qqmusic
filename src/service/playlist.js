import request from './request'

//获取当前歌单的详细信息
export function getPlaylistDetail(id) {
    return request({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}

//获取当前歌单的所有歌曲信息
export function getPlaylistAllSongs(id) {
    return request({
        url: '/playlist/track/all',
        params: {
            id,
            timerstamp: Date.now()
        }
    })
}
//获取当前歌单的所有评论信息
export function getPlaylistComment(id, limit, offset) {
    return request({
        url: '/comment/playlist',
        params: {
            id,
            limit,
            offset
        }
    })
}

//获取当前歌单的所有收藏者
export function getPlaylistSubscriber(id, limit, offset) {
    return request({
        url: '/playlist/subscribers',
        params: {
            id,
            limit,
            offset,
        },
    });
}
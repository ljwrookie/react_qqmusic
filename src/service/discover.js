import request from './request';

export function getSongList(cat, limit, before) {
    return request({
        url: 'top/playlist',
        params: {},
    });
}
export function getNewSong(type) {
    return request({
        url: '/top/song',
        params: {
            type,
        },
    });
}

export function getNewAlbum(area) {
    return request({
        url: '/top/album',
        params: {
            area,
        },
    });
}

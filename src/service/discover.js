import request from './request';

export function getSongList(cat, limit, before) {
    return request({
        url: 'top/playlist',
        params: {},
    });
}

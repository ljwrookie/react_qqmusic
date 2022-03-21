import request from './request';

//获取新歌
export function getNewSong(type) {
    return request({
        url: '/top/song',
        params: {
            type,
        },
    });
}
//新碟上架
export function getNewAlbum(area) {
    return request({
        url: '/album/new',
        params: {
            area,
        },
    });
}
//获得歌手分类
export function getSingerList(
    type = -1,
    area = -1,
    initial = -1,
    limit = 30,
    offset
) {
    return request({
        url: '/artist/list',
        params: {
            type,
            area,
            initial,
            limit,
            offset,
        },
    });
}

//获得排行榜
export function getTopList() {
    return request({
        url: '/toplist',
    });
}

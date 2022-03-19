import request from './request'

//获取歌手描述
export function getArtistDesc(id) {
    return request({
        url: '/artist/desc',
        params: {
            id
        }
    })
}

//获取歌手详情
export function getArtistDetail(id) {
    return request({
        url: '/artist/detail',
        params: {
            id
        }
    })
}
//获取相似歌手
export function getSimArtist(id) {
    return request({
        url: '/simi/artist',
        params: {
            id
        }
    })
}
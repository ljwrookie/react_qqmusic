import request from './request'

//请求mv详情数据
export function getMvDetail(mvid){
    return request({
        url: '/mv/detail',
        params: {
            mvid
        }
    })
}
//请求MV点赞评论数量

export function getMvDetailInfo(mvid) {
    return request({
        url: '/mv/detail/info',
        params: {
            mvid
        }
    })
}

//请求mv视频地址
export function getMvUrl(id,r) {
    return request({
        url: '/mv/url',
        params: {
            id,
            r
        }
    })
}

//请求相似MV
export function getSimMv(mvid) {
    return request({
        url: '/simi/mv',
        params: {
            mvid
        }
    })
}

//请求MV评论内容
export function getMvComments(id,limit, offset) {
    return request({
        url: '/comment/mv',
        params: {
            id,
            limit,
            offset
        }
    })
}


import request from './request'
//获取全部MV
// area: 地区, 可选值为全部, 内地, 港台, 欧美, 日本, 韩国, 
// 不填则为全部 type: 类型, 可选值为全部, 官方版, 原生, 现场版, 网易出品, 不填则为全部
// order: 排序, 可选值为上升最快, 最热, 最新, 不填则为上升最快
// limit: 取出数量, 默认为 30
// offset: 偏移数量, 用于分页, 如 : (页数 - 1) * 50, 其中 50 为 limit 的值, 默认 为 0
export function getAllMv(area, order, limit=60, offset) {
    return request({
        url: '/mv/all',
        params: {
            area, order, limit, offset
        }
    })
}

//获取最新MV
// 可选参数: area: 地区, 可选值为全部, 内地, 港台, 欧美, 日本, 韩国, 不填则为全部
// 可选参数: limit: 取出数量, 默认为 30
export function getNewMv(limit) {
    return request({
        url: '/mv/first',
        params: {
            limit
        }
    })
}


//获取独家MV
// 可选参数: limit: 取出数量, 默认为 30
// offset: 偏移数量, 用于分页, 如 : (页数 - 1) * 30, 其中 30 为 limit 的值, 默认 为 0
export function getExclusiveMv(limit) {
    return request({
        url: '/mv/exclusive/rcmd',
        params: {
            limit
        }
    })
}

//获取MV排行
// 可选参数: limit: 取出数量, 默认为 30
// area: 地区, 可选值为内地, 港台, 欧美, 日本, 韩国, 不填则为全部
// offset: 偏移数量, 用于分页, 如 : (页数 - 1) * 30, 其中 30 为 limit 的值, 默认 为 0
export function getMvRanking(area, limit) {
    return request({
        url: '/top/mv',
        params: {
            area, limit
        }
    })
}
import request from './request'

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

// 热门推荐歌单
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}
// 推荐 mv
// 说明 : 调用此接口 , 可获取推荐 mv
// 接口地址 : /personalized/mv
export function getMvRecommends(limit) {
  return request({
    url: "/personalized/mv",
    params: {
      limit
    }
  })
}
// 独家放送列表
// 说明 : 调用此接口 , 可获取独家放送列表
// 可选参数 :
// limit : 返回数量 , 默认为 60
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*60, 其中 60 为 limit 的值 , 默认为 0
// 接口地址 : /personalized/privatecontent/list
// 调用例子 : /personalized/privatecontent/list?limit=1&offset=2
export function getPrivateContent(limit) {
  return request({
    url: "/personalized/privatecontent/list",
    params: {
      limit
    }
  })
}

// 首页下的新碟上架 type: 地区类型 id,对应以下:
//全部:0 华语:7 欧美:96 日本:8 韩国:16
export function getNewSongs(type) {
  return request({
    url: '/top/song',
    params:{
      type
    }
  })
}
// 首页下的新碟上架
export function getNewAlbums() {
  return request({
    url: '/album/newest'
  })
}

// 入驻歌手
export function getSettleSinger(limit) {
  return request({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
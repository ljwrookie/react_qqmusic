import  request from '@/service/request';
import { func } from 'prop-types';
//喜欢音乐列表
export const getLikeMusicList = (uid) => {
    return request({
        url: '/likelist',
        params: {
            uid
        }
    })
}
//获取到帐号信息

export function getAccountInfo() {
    return request({
        url: '/user/account',
    });
}

//获取登录用户信息
export function getLoginUserInfo() {
    return request({
        url: '/user/subcount',
    });
}

//获取用户等级
export function getUserLevel() {
    return request({
        url: '/user/level',
    });
}

//签到
export function getSignIn() {
    return request({
        url: '/daily_signin',
    });
}

//获取用户详情
export function getUserDetail(uid) {
    return request({
        url: '/user/detail',
        params: {
            uid,
            timerstamp: Date.now(),
        }
    });
}

// 获取点赞过的视频
// 说明 : 调用此接口, 可获取获取点赞过的视频

// 接口地址 : /playlist/mylike
// 请求方式 : GET
export function getLikeVideo() {
    return request({
        url: '/playlist/mylike',
    });
}

// 获取用户歌单
// 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
// 必选参数 : uid : 用户 id
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// 接口地址 : /user/playlist
// 请求方式 : GET
export function getUserPlaylist(uid, limit, offset) {
    return request({
        url: '/user/playlist',
        params: {
            uid,
            limit,
            offset,
            timerstamp: Date.now(),
        }
    });
}

// 删除歌单
// 说明 : 调用此接口 , 传入歌单 id 可删除歌单
// 必选参数 : id : 歌单 id,可多个,用逗号隔开
// 接口地址 : /playlist/delete
// 请求方式 : POST
export function deletePlaylist(id) {
    return request({
        url: '/playlist/delete',
        // method: 'POST',
        params: {
            id,
            timerstamp: Date.now()
        }
    });
}

// 获取用户关注列表
// 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户关注列表
// 必选参数 : uid : 用户 id
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 ,如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// 接口地址 : /user/follows
export function getFollows (uid,limit,offset){
    return request({
        url: '/user/follows',
        params:{
            uid,
            limit,
            offset,
            timerstamp: Date.now()
        }
    })
}

// 获取用户粉丝列表
// 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户粉丝列表
// 必选参数 : uid : 用户 id
// 可选参数 : limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 ,如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// 接口地址 : /user/followeds
export function getFolloweds (uid,limit,offset){
    return request({
        url: '/user/followeds',
        params:{
            uid,
            limit,
            offset,
            timerstamp: Date.now()
        }
    })
}

// 收藏/取消收藏歌单
// 说明 : 调用此接口 , 传入类型和歌单 id 可收藏歌单或者取消收藏歌单
// 必选参数 :
// t : 类型,1:收藏,2:取消收藏 id : 歌单 id
// 接口地址 : /playlist/subscribe
// 调用例子 : /playlist/subscribe?t=1&id=106697785 /playlist/subscribe?t=2&id=106697785
export function subscribePlaylist(t,id){
    return request({
        url: '/playlist/subscribe',
        params:{
            t,
            id,
            timerstamp: Date.now()
        }
    })
}

// 喜欢音乐
// 说明 : 调用此接口 , 传入音乐 id, 可喜欢该音乐
// 必选参数 : id: 歌曲 id
// 可选参数 : like: 布尔值 , 默认为 true 即喜欢 , 若传 false, 则取消喜欢
// 接口地址 : /like
// 调用例子 : /like?id=347230
export function likeSong(like,id){
    return request({
        url: '/like',
        params: {
            like,
            id,
            timerstamp: Date.now()
        }
    })
}

// 私人 FM
// 说明 : 私人 FM( 需要登录 )
// 接口地址 : /personal_fm
export function getPersonalFm(){
    return request({
        url: '/personal_fm',
        params:{
            timerstamp: Date.now()
        }
    })
}
import request from './request'
//二维码key生成接口，可以生成二维码需要的key
export function getQrKey(timerstamp) {
    return request({
        url: "/login/qr/key",
        params: {
            timerstamp
        }
    })
}
//二维码生成接口，可以生成二维码，需调用上面获取到的key
export function getQr(key, qrimg, timerstamp) {
    return request({
        url: "/login/qr/create",
        params: {
            key,
            qrimg,
            timerstamp
        }
    })
}
//二维码检测扫码接口
// 说明: 轮询此接口可获取二维码扫码状态,800 为二维码过期,
// 801 为等待扫码,802 为待确认,803 为授权登录成功
// (803 状态码下会返回 cookies),需调用上面获取到的key
export function getQrCheck(key, timerstamp) {
    return request({
        url: "/login/qr/check",
        params: {
            key,
            timerstamp
        }
    })
}
// 刷新登录
// 说明 : 调用此接口 , 可刷新登录状态
// 调用例子 : /login/refresh
export function getRefreshLogin() {
    return request({
        url: "/login/refresh",
    })
}
// 登录状态
// 说明 : 调用此接口 , 可获取登录状态

export function getLoginStatus() {
    return request({
        url: "/login/status",
    })
}
// 推出登录
// 说明 : 调用此接口 , 可退出登录
export function getLogout() {
    return request({
        url: "/logout",
    })
}

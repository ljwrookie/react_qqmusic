import request from './request';

//搜索
export function getSearchList(keywords, type, limit = 30, offset = 0) {
    return request({
        url: '/cloudsearch',
        params: {
            keywords,
            type,
            limit,
            offset,
            // timerstamp: Date.now(),
        },
    });
}

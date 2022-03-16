export function getSizeImage(imgUrl, width, height) {
    return `${imgUrl}?param=${width}x${height}`;
}

export function getCount(count) {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    } else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + '万';
    } else {
        return Math.floor(count / 10000000) / 10 + '亿';
    }
}

export function getPlayUrl(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export function formatDate(time, fmt) {
    let date = new Date(time);

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? str : padLeftZero(str)
            );
        }
    }
    return fmt;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

export function formatMonthDay(time) {
    return formatDate(time, 'MM月dd日');
}
export function formatYearMonthDay(time) {
    return formatDate(time, 'YY-MM-dd');
}
export function formatMinuteSecond(time) {
    return formatDate(time, 'mm:ss');
}

/**
 * 获取url参数
 * @param name 参数名
 */
export function getQueryObject(url) {
    url = url == null ? window.location.href : url;
    const search = url.substring(url.lastIndexOf('?') + 1);
    const obj = {};
    const reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1);
        let val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}

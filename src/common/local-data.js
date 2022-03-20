export const siderLinks = [
    {
        title: '推荐',
        icon: <span className="iconfont">&#xe606;</span>,
        link: '/recommend',
    },
    {
        title: '音乐馆',
        icon: <span className="iconfont">&#xe62d;</span>,
        link: '/discover',
    },
    {
        title: '视频',
        icon: <span className="iconfont">&#xe600;</span>,
        link: '/mv',
    },
    {
        title: '电台',
        icon: <span className="iconfont">&#xe693;</span>,
        link: '/radio',
    },
];

export const siderSongLinks = [
    {
        title: '我喜欢',
        icon: <span className="iconfont">&#xe617;</span>,
        link: '/like',
    },
    {
        title: '本地歌曲',
        icon: <span className="iconfont">&#xe620;</span>,
        link: '/localsong',
    },
    {
        title: '下载歌曲',
        icon: <span className="iconfont">&#xe796;</span>,
        link: '/download',
    },
    {
        title: '最近播放',
        icon: <span className="iconfont">&#xe675;</span>,
        link: '/recent',
    },
];

export const discoverLinks = [
    {
        title: '最新音乐',
        link: '/discover/new',
    },
    {
        title: '排行榜',
        link: '/discover/ranking',
    },
    {
        title: '歌手',
        link: '/discover/singer',
    },
];

export const mvLinks = [
    {
        title: '推荐',
        link: '/mv/recommend',
    },
    {
        title: '排行榜',
        link: '/mv/ranking',
    },
    {
        title: '视频库',
        link: '/mv/list',
    },
];

export const searchLinks = [
    {
        title: '歌曲',
        link: '/search/song',
    },
    {
        title: '视频',
        link: '/search/mv',
    },
    {
        title: '专辑',
        link: '/search/album',
    },
    {
        title: '歌手',
        link: '/search/singer',
    },
];
export const singerAreaList = {
    全部: -1,
    华语: 7,
    欧美: 96,
    日本: 8,
    韩国: 16,
    其他: 0,
};
export const singerTypeList = {
    全部: -1,
    男: 1,
    女: 2,
    组合: 3,
};
function range(first, last) {
    var r = [],
        i = first.charCodeAt(0);

    while (i <= last.charCodeAt(0)) {
        r.push(String.fromCharCode(i++));
    }

    return r;
}
export const singInitial = range('A', 'Z');

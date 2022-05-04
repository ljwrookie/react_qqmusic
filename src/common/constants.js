import theme from 'styled-theming';
export const LIGHT_MODE = {
    logoUrl: require('@/assets/image/logo.png'),
    themeColor: '#1fcfa1',
    bodyColor: '#f9f9f9',
    sideColor: '#F6F6F6',
    sideFontColor: '#313131',
    searchBarColor: '#e6e6e6',
    normalColor: '#000',
    grayFontColor: '#7d7d7d',
    hoverColor: '#dedede',
    boxShadow: 'rgba(0,0,0,0.1)',
};

export const DARK_MODE = {
    logoUrl: require('@/assets/image/logo_dark.png'),
    themeColor: '#1fcfa1',
    bodyColor: '#1D1D1F',
    sideColor: '#171718',
    sideFontColor: '#d1d1d1',
    searchBarColor: '#343435',
    normalColor: '#fff',
    grayFontColor: '#8e8e8f',
    hoverColor: '#2e2e2f',
    boxShadow: 'rgba(52, 53, 52, 0.5)',
};

const logoUrl = theme('mode', {
    light: LIGHT_MODE.logoUrl,
    dark: DARK_MODE.logoUrl,
});
const themeColor = theme('mode', {
    light: LIGHT_MODE.themeColor,
    dark: DARK_MODE.themeColor,
});
const bodyColor = theme('mode', {
    light: LIGHT_MODE.bodyColor,
    dark: DARK_MODE.bodyColor,
});
const sideColor = theme('mode', {
    light: LIGHT_MODE.sideColor,
    dark: DARK_MODE.sideColor,
});
const sideFontColor = theme('mode', {
    light: LIGHT_MODE.sideFontColor,
    dark: DARK_MODE.sideFontColor,
});
const searchBarColor = theme('mode', {
    light: LIGHT_MODE.searchBarColor,
    dark: DARK_MODE.searchBarColor,
});
const normalColor = theme('mode', {
    light: LIGHT_MODE.normalColor,
    dark: DARK_MODE.normalColor,
});
const grayFontColor = theme('mode', {
    light: LIGHT_MODE.grayFontColor,
    dark: DARK_MODE.grayFontColor,
});
const hoverColor = theme('mode', {
    light: LIGHT_MODE.hoverColor,
    dark: DARK_MODE.hoverColor,
});
const boxShadow = theme('mode', {
    light: LIGHT_MODE.boxShadow,
    dark: DARK_MODE.boxShadow,
});
export const myTheme = {
    logoUrl,
    themeColor,
    bodyColor,
    sideColor,
    sideFontColor,
    searchBarColor,
    normalColor,
    grayFontColor,
    hoverColor,
    boxShadow,
};

export function getMode() {
    let mode = localStorage.getItem('MODE');
    let modeName;
    if (mode) {
        modeName = mode;
    } else {
        modeName = 'LIGHT_MODE';
        localStorage.setItem('MODE', 'LIGHT_MODE');
    }
    return modeName;
}

// export function asyncGetMode() {
//     window.load = () => {
//         window.addEventListener('storage', (e) => {
//             console.log(e);
//         });
//     };
// }

export const HOT_RECOMMEND_LIMIT = 8;
export const NEW_ALBUM_PAGE_NUM = 2;
export const NEW_ALBUM_PER_PAGE = 5;
export const SETTLE_SINGER = 5;

// 默认音乐id
export const SONG_PLAYLIST_ID = [
    167876, 411214279, 1483891561, 1363948882, 467952048,
];
// 本地存储音乐Key
export const LOCAL_PLAYLIST_ID_KEY = 'playlistId'; // 歌曲列表id
export const LOCAL_CURRENT_SONG_INDEX_KEY = 'currentSongIndex'; // 歌曲所引

// LOCAL_CURRENT_SONG_INDEX_KEY
// LOCAL_PLAYLIST_ID_KEY

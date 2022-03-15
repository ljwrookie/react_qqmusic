export const LIGHT_MODE = {
    themeColor:'#1fcfa1', 
    bodyColor:'#f9f9f9', 
    sideColor:'#F6F6F6',
    sideFontColor:'#313131',
    searchBarColor: '#e6e6e6',
    normalColor: '#000',
    grayFontColor: '#7d7d7d',
    hoverColor:'#dedede',

}

export const DARK_MODE =  {
    themeColor:'#1fcfa1', 
    bodyColor:'#1D1D1F', 
    sideColor:'#171718',
    sideFontColor:'#d1d1d1',
    searchBarColor: '#343435',
    normalColor: '#fff',
    grayFontColor: '#8e8e8f',
    hoverColor:'#2e2e2f',
}
export function getMode(){
    let mode = localStorage.getItem("MODE");
    let modeName
    if(mode){
        modeName = mode
    }
    else{
        modeName = "LIGHT_MODE"
        localStorage.setItem("MODE", "LIGHT_MODE")
    }
    return modeName
}

export const HOT_RECOMMEND_LIMIT = 8;
export const NEW_ALBUM_PAGE_NUM = 2;
export const NEW_ALBUM_PER_PAGE = 5;
export const SETTLE_SINGER = 5;

// 默认音乐id
export const SONG_PLAYLIST_ID = [167876, 411214279, 1483891561, 1363948882, 1387581250];
// 本地存储音乐Key
export const LOCAL_PLAYLIST_ID_KEY = 'playlistId'; // 歌曲列表id
export const LOCAL_CURRENT_SONG_INDEX_KEY = 'currentSongIndex'; // 歌曲所引

// LOCAL_CURRENT_SONG_INDEX_KEY
// LOCAL_PLAYLIST_ID_KEY


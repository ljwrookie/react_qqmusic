// export const DARK_MODE = {themeColor:'#00cd98', bodyColor:'#f9f9f9', sideColor:'#F6F6F6'}
// export const LIGHT_MODE =  {themeColor:'#00cd98', bodyColor:'#1D1D1F', sideColor:'#171718'}
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

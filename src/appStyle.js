import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE } from '@/common/constants';
// 存储
// localStorage.setItem("MODE", "LIGHT_MODE");
// 检索
let mode = localStorage.getItem("MODE");
// console.log(mode)
if(mode === undefined){
    localStorage.setItem("MODE", "LIGHT_MODE");
    mode = localStorage.getItem("MODE");
}

const {bodyColor, sideColor} = (mode==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
export const AppWrapper = styled.div`

.app_main {
    /* display: flex; */
    height: 100%;
    min-width: 1310px;
}
.app_left {
    position: fixed;
    width: 210px;
    height: 100%;
    background: ${sideColor};
}
.app_right {
    margin-left: 210px;
    padding-bottom: 80px;
    background: ${bodyColor};
    /* overflow: auto; */
}
`;
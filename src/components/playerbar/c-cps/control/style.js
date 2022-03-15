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

const {themeColor} = (mode==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
export const ControlWrapper = styled.div`
    position: relative;
    top: -5px;
    .iconfont {
        font-size: 20px;
        padding: 0 10px;
        color: #000;
    }
    .play_pause {
        position: relative;
        top: 5px;
        /* position: fixed; */
        /* margin-top: 50px; */
        font-size: 35px;
        color: ${themeColor};
    }
`;

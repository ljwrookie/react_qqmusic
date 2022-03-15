import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE } from '@/common/constants';
// 存储
localStorage.setItem("MODE", "LIGHT_MODE");
// 检索
let mode = localStorage.getItem("MODE");
// console.log(mode)
if(mode === undefined){
    localStorage.setItem("MODE", "LIGHT_MODE");
    mode = localStorage.getItem("MODE");
}

const {themeColor, bodyColor} = (mode==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
export const TopNav = styled.div`
    color: #000000;
    .nav_title {
        font-size: 32px;
        font-weight: 900;
        margin: 20px 0;
    }
    .nav_list {
        display: flex;
        padding: 5px 0;
        font-size: 14px;
        background-color: ${bodyColor};
        .nav_item {
            margin-right: 50px;
            text-align: center;
            a {
                color: #000;
                display: inline-block;
                &:hover,
                &.active {
                    text-decoration: none;
                    color: ${themeColor};
                }
            }
        }
    }
`;

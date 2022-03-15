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
export const AppSiderNav = styled.div`
    .logo {
        display: block;
        width: 105px;
        height: 30px;
        margin-top: 40px;
        margin-left: 45px;
        padding-top: 30px;
        padding-bottom: 30px;
        background: url('${require('@/assets/image/logo.png')}') no-repeat;
        background-size: 90px 25px;
    }
`;

export const NavList = styled.div`
    margin-bottom: 50px;
    .list_title {
        margin-left: 50px;
        color: #d0d0d0;
        font-size: 12px;
    }
    .list_item {
        display: block;
        width: 160px;
        height: 30px;
        margin-top: 8px;
        margin-left: 25px;
        padding-left: 15px;
        line-height: 30px;
        color: #6e6e6e;
        font-size: 14px;
        border-radius: 5px;
        .iconfont {
            font-size: 18px;
            margin-right: 10px;
        }
        &:hover {
            background-color: #dddddd;
            text-decoration: none;
        }
        &:active {
            background-color: ${themeColor};
            color: #ffffff;
        }
    }
    .active {
        background-color: ${themeColor};
        color: #ffffff;
    }
`;

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

const {themeColor, bodyColor} = (mode==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 75px;
    background-color:${bodyColor};
    z-index: 9999;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;

    .prev_next {
        margin-left: 40px;
        span {
            cursor: pointer;
            &:hover {
                color: ${themeColor};
            }
        }
    }
    .search {
        height: 32px;
        width: 200px;
        margin-left: 10px;
        padding-left: 20px;
        border-radius: 16px;
        background-color: #e1e1e1;
        .anticon-search {
            color: #a9a9a9;
        }
        .ant-input {
            background-color: #e1e1e1;
            color: #181818;
            padding-left: 10px;
            margin-top: 2px;
            font-size: 12px;
        }
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: 40px;
    .login {
        &:hover {
            text-decoration: none;
            color: ${themeColor};
        }
    }
    .toolbar {
        margin-left: 20px;
        font-size: 16px;
        color: #7d7d7d;
        cursor: pointer;
        &:hover {
            color: ${themeColor};
        }
    }
`;

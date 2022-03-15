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
export const HeaderWrapper = styled.div`
    
    height: 33px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        display: flex;
        align-items: center;
        color: #3f3f3f;
        .title {
            font-size: 20px;
            font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
            margin-right: 20px;
        }
        .keyword {
            display: flex;
            .item {
                color: #C1C1C1;
                .link{
                    text-decoration: none;
                    margin:0 15px;
                    &:hover{
                    color: ${themeColor};
                    }
                    &:active{
                        /* background-color:#3f3f3f; */
                        color: ${themeColor};
                    }
                }
            }
        }
    }
    .right {
        display: flex;
        align-items: center;
        font-size: 13px;
        .link{
            text-decoration: none;
            &:hover {
                color: ${themeColor};
            }
        
        }
    }

`;

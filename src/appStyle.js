import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, bodyColor, sideColor, searchBarColor } = myTheme;
export const AppWrapper = styled.div`
    /*定义滚动条样式（高宽及背景）*/ 
    
    /* height: 100%; */
    .app_main {
        display: flex;
        height: 100%;
        /* min-width: 800px; */
    }
    .app_left {
        position: fixed;
        width: 210px;
        height: 100%;
        /* height:auto; */
        overflow-x: auto;
        ::-webkit-scrollbar {
                width: 6px;
                height: 6px;
                background-color: ${searchBarColor};
            }

            /*定义滚动条轨道 内阴影+圆角*/
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
                border-radius: 3px;
            }

            /*定义滑块 内阴影+圆角*/
            ::-webkit-scrollbar-thumb {
                border-radius: 3px;
                -webkit-box-shadow: inset 0 0 6px #d4d4d4;
                background-color: ${bodyColor};
            }
        background: ${sideColor};
    }
    .app_right {
        flex: 1;
        margin-left: 210px;
        margin-top: 75px;
        background-color: ${bodyColor};
    }
    .app-top {
        position: fixed;
        top: 0;
        left: 210px;
        right: 0;
        z-index: 9;
    }
`;

export const BackTopWrapper = styled.div`
    .ant-back-top {
        bottom: 85px;
    }
    .back_top {
        line-height: 40px;
        padding: 0 10px;
        background-color: ${themeColor};
        color: #fff;
        border-radius: 10px;
    }
`;

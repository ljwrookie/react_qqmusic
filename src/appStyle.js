import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, bodyColor, sideColor, grayFontColor } = myTheme;
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
        overflow-x: scroll;
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

import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, bodyColor, sideColor } = myTheme;
export const AppWrapper = styled.div`
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

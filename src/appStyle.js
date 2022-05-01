import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
const { themeColor, bodyColor, sideColor } =
    getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;
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
        padding-top: 75px;
        padding-bottom: 80px;
        height: 100%;
        /* min-height: 1000px; */
        background: ${bodyColor};
        /* overflow: auto; */
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

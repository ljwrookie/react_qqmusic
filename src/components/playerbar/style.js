import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE ,getMode} from '@/common/constants';

const {serachBarColor, bodyColor} = (getMode()==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
export const PlayerBarWrapper = styled.div`
    .slider {
        background-color: ${serachBarColor} !important;
    }
    position: fixed;
    left: 210px;
    bottom: 0px;
    /* width: 100%;
     */
    right: 0px;
    height: 80px;
    background-color: ${bodyColor};
    z-index: 9999;
    .ant-slider {
        width: 100%;
        margin: 4px 0;
        background-color: ${serachBarColor} !important;
    }
    .control {
        position: relative;
        div {
            position: absolute;
        }
        .left {
            left: 0;
            width: 300px;
        }
        .center {
            display: flex;
            justify-content: center;
            left: 300px;
            right: 300px;
        }
        .right {
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0;
            width: 300px;
            height: 68px;
        }
    }
`;

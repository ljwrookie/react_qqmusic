import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';


const {themeColor, normalColor} = (getMode()==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
export const ControlWrapper = styled.div`
    position: relative;
    top: -5px;
    .iconfont {
        font-size: 20px;
        padding: 0 10px;
        color: ${normalColor};
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

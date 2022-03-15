import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {themeColor, grayFontColor, normalColor} = (getMode()==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)

export const PlayerInfo = styled.div`
    position: relative;
    top: 5px;
    margin-left: 40px;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    height: 40px;
    .image {
        /* position: absolute; */
        display: inline-block;
        width: 40px;
        height: 40px;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    .info_block {
        /* position: absolute; */
        display: inline-block;
        position: relative;
        height: 40px;
        width: 20px;
        padding-left: 12px;
        .song_name {
            color: ${normalColor};
        }
        .icons {
            color: ${grayFontColor};
            .iconfont {
                font-size: 20px;
                margin: 0 8px;
            }
        }
    }
`;

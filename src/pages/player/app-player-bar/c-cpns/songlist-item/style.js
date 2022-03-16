import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const { themeColor, normalColor, searchBarColor, grayFontColor } =
    getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;
export const ItemWrapper = styled.div`
    /* position: fixed; */
    display: flex;
    height: 65px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    .info {
        padding-left: 10px;
        .song_name {
            color: ${normalColor};
            font-size: 16px;
        }
        .singer_name {
            top: 5px;
            color: ${grayFontColor};
            font-size: 14px;
        }
    }
    .operator {
        display: flex;
        vertical-align: bottom;
        color: ${grayFontColor};
        .iconfont {
            font-size: 20px;
            cursor: pointer;
            &:hover {
                color: ${themeColor};
            }
        }
        .total_time {
            font-size: 14px;
            margin: 5px 10px 0;
        }
    }
    &:hover {
        background-color: ${searchBarColor};
    }
`;

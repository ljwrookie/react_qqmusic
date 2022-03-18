import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
// 存储

const { themeColor, searchBarColor, grayFontColor, normalColor } =
    getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const SongItem = styled.div`
    display: flex;
    font-size: 14px;
    padding: 8px 0 12px;
    &:hover {
        background-color: ${searchBarColor};
    }
    &:hover .operator {
        opacity: 1;
    }
    color: ${normalColor};
    /* justify-content: space-between; */
    .first_line {
        display: flex;
        justify-content: space-between;
        width: 400px;
        padding-right: 20px;
    }
    .iconfont {
        margin: 0 8px;
        font-size: 16px;
        &:hover {
            color: ${themeColor};
            cursor: pointer;
        }
    }
    .operator {
        opacity: 0;
    }
    .singer {
        width: 200px;
    }
    .album {
        width: 300px;
    }
    .alias {
        padding-left: 20px;
        color: ${grayFontColor};
    }
`;

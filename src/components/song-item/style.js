import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, searchBarColor, grayFontColor, normalColor } = myTheme;

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
        padding-left: 40px;
        width: 400px;
        color: ${grayFontColor};
    }
    .name,
    .singer {
        &:hover {
            color: ${themeColor};
        }
    }
`;

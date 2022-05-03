import styled from 'styled-components';
import { myTheme } from '@/common/constants';
const { themeColor, searchBarColor, normalColor, grayFontColor } = myTheme;
export const AlbumItemWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;
    &:hover {
        background-color: ${searchBarColor};
    }
    img {
        width: 60px;
        border-radius: 6px;
        margin-left: 8px;
        cursor: pointer;
    }
    .album_name {
        margin-left: 20px;
        color: ${normalColor};
        cursor: pointer;
        &:hover {
            color: ${themeColor};
        }
    }
    .artist {
        position: absolute;
        left: 500px;
        cursor: pointer;
        color: ${normalColor};
        &:hover {
            color: ${themeColor};
        }
    }
    .publish_time {
        position: absolute;
        left: 750px;
        color: ${grayFontColor};
    }
    .size {
        position: absolute;
        right: 0;
        padding-right: 20px;
        color: ${grayFontColor};
    }
`;

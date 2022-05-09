import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const {
    themeColor,
    bodyColor,
    normalColor,
    grayFontColor,
    searchBarColor,
} = myTheme;

export const DiscoverNewWrapper = styled.div`
    position: relative;
    height: 68px;

    .switch_part {
        position: absolute;
        display: flex;
        margin: 15px 0;
        left: 50%;
        transform: translateX(-50%);
        height: 38px;
        width: 260px;
        border: solid 1px ${themeColor};
        border-radius: 19px;
        line-height: 36px;
        font-size: 14px;
        color: ${normalColor};
        .songs,
        .album {
            display: flex;
            justify-content: center;
            width: 50%;
            height: 100%;
            border-radius: 19px;
            text-decoration: none;
            &:hover {
                background-color: ${searchBarColor};
                color: ${normalColor}
            }
        }
        .active {
            background-color: ${themeColor};
            color: #fff;
        }
    }
`;

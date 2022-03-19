import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {
    themeColor,
    bodyColor,
    normalColor,
    grayFontColor,
    searchBarColor,
} = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

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
        border-radius: 21px;
        line-height: 36px;
        font-size: 14px;
        color: ${normalColor};
        .songs,
        .album {
            display: flex;
            justify-content: center;
            width: 50%;
            height: 100%;
            border-radius: 21px;
            text-decoration: none;
            &:hover {
                background-color: ${searchBarColor};
            }
        }
        .active {
            background-color: ${themeColor};
            color: ${bodyColor};
        }
    }
`;

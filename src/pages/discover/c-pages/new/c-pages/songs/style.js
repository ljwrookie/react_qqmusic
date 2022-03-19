import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {
    themeColor,
    bodyColor,
    normalColor,
    grayFontColor,
    searchBarColor,
} = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const SwitchArea = styled.div`
    color: ${grayFontColor};
    span {
        margin-right: 50px;
        font-size: 12px;
        &:hover {
            color: ${themeColor};
        }
    }
    .active {
        color: ${themeColor};
        border-bottom: solid 2px ${themeColor};
    }
`;
export const PlayList = styled.div`
    .batch_operation {
        display: flex;
        align-items: center;
        margin: 20px 0;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 110px;
            line-height: 30px;
            margin-right: 15px;
            border-radius: 15px;
            color: ${normalColor};
            background-color: ${searchBarColor};
            cursor: pointer;
            .iconfont {
                font-size: 16px;
            }
            &:hover {
                color: ${themeColor};
            }
        }
        .play_all {
            color: ${bodyColor};
            background-color: ${themeColor};
        }
    }
    .list_header {
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        color: ${grayFontColor};
        font-size: 14px;
        .singer {
            margin-left: 370px;
        }
        .album {
            margin-left: 175px;
        }
        .total_time {
            margin-left: 270px;
        }
    }
`;

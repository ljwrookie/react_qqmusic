import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const {
    themeColor,
    bodyColor,
    normalColor,
    grayFontColor,
    searchBarColor,
} = myTheme;

export const SwitchArea = styled.div`
    color: ${grayFontColor};
    span {
        position: relative;
        display: inline-block;
        margin-right: 50px;
        font-size: 14px;
        line-height: 30px;
        &:hover {
            color: ${themeColor};
        }
    }
    .active {
        color: ${themeColor};
    }
    .active::after {
        position: absolute;
        content: '';
        width: 25px;
        height: 3px;
        border-radius: 2px;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${themeColor};
    }
`;
export const PlayList = styled.div`
    min-height:60vh;

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
                /* color: ${themeColor}; */
                background-color: ${themeColor}
            }
        }
        .play_all {
            color: #fff;
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

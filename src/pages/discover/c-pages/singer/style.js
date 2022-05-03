import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const {
    themeColor,
    bodyColor,
    normalColor,
    grayFontColor,
    searchBarColor,
} = myTheme;

export const DiscoverSingerWrapper = styled.div`
    .area,
    .type {
        span {
            display: inline-block;
            width: 80px;
            height: 30px;
            margin: 10px 5px;
            text-align: center;
            border-radius: 15px;
            border: solid 1px ${searchBarColor};
            line-height: 28px;
            color: ${normalColor};
            cursor: pointer;
            &:hover {
                color: ${themeColor};
            }
        }
        .active {
            background-color: ${themeColor};
            color: ${bodyColor};
            border: solid 1px ${themeColor};
        }
    }
    .initial {
        margin: 10px 0;
        em {
            margin: 0 10px;
            font-size: 14px;
            color: ${grayFontColor};
            cursor: pointer;
            &:hover {
                color: ${themeColor};
            }
        }
        .active {
            color: ${themeColor};
        }
    }
`;
export const NoPicName = styled.div`
    span {
        display: inline-block;
        width: 190px;
        height: 20px;
        margin: 10px 10px;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        color: ${normalColor};
        cursor: pointer;
    }
`;

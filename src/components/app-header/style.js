import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
// 存储

const {
    themeColor,
    normalColor,
    bodyColor,
    searchBarColor,
    grayFontColor,
} = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;
export const HeaderWrapper = styled.div`
    /* float: right; */
    display: flex;
    width: 100%;
    height: 75px;
    justify-content: space-between;
    background-color: ${bodyColor};
    z-index: 9;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;

    .prev_next {
        margin-left: 40px;
        span {
            color: ${grayFontColor};
            cursor: pointer;
            &:hover {
                color: ${themeColor};
            }
        }
    }
    .search {
        height: 32px;
        width: 200px;
        margin-left: 10px;
        padding-left: 20px;
        border-radius: 16px;
        background-color: ${searchBarColor};
        .anticon-search {
            color: #a9a9a9;
        }
        .ant-input {
            background-color: ${searchBarColor};
            color: ${normalColor};
            padding-left: 10px;
            margin-top: 2px;
            font-size: 12px;
        }
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: 40px;
    color: ${grayFontColor};
    .login {
        &:hover {
            text-decoration: none;
            color: ${themeColor};
        }
    }
    .toolbar {
        margin-left: 20px;
        font-size: 16px;

        cursor: pointer;
        &:hover {
            color: ${themeColor};
        }
    }
`;

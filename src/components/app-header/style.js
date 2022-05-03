import styled from 'styled-components';
import { myTheme } from '@/common/constants';
const {
    themeColor,
    bodyColor,
    searchBarColor,
    normalColor,
    grayFontColor,
} = myTheme;

export const HeaderWrapper = styled.div`
    /* float: right; */
    display: flex;
    width: 100%;
    height: 75px;
    justify-content: space-between;
    background-color: ${bodyColor};
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
    .login-button {
        cursor: pointer;
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
export const LoginWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`;

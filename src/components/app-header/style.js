import styled from 'styled-components';
import { myTheme } from '@/common/constants';
const {
    themeColor,
    bodyColor,
    searchBarColor,
    sideColor,
    normalColor,
    grayFontColor,
    boxShadow,
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

    img {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        margin-right: 10px;
        cursor: pointer;
    }
    .nickname {
        cursor: pointer;
        font-size: 14px;
        span {
            margin-right: 5px;
            /* white-space: nowrap; //强制文本在单行显示
            overflow: hidden;
            text-overflow: ellipsis; */
        }

        &:hover {
            color: ${themeColor};
        }
    }
    .drop-down {
        
        /* cursor: pointer; */
        display: flex;
        align-items: center;
        flex-direction: column;
        a{
            color: ${normalColor};
            text-decoration: none;
            cursor: pointer;
            &:hover {
                color: ${themeColor};
            }
        }
        .drop-bottom {
            color: ${normalColor};
            border-radius: 10px;
            background-color: ${bodyColor};
            overflow: hidden;
            box-shadow: 0px 0px 10px ${boxShadow};
            width: 250px;
            position: fixed;
            top: 70px;
            /* z-index: 10; */
            .drop-sore {
                background-color: ${sideColor};
                display: flex;
                height: 120px;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                div {
                    margin-bottom: 10px;
                }
                .sore-number {
                    font-size: 24px;
                    font-weight: bold;
                    margin-right: 5px;
                }
                button {
                    cursor: pointer;
                    width: 80%;
                    height: 30px;
                    border-radius: 15px;
                    font-size: 14px;
                    color: #fff;
                    background-color: ${themeColor};
                    &:hover {
                        color: ${normalColor};
                    }
                }
            }

            .drop-list {
                margin: 20px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                height: 20px;
                line-height: 20px;
            
            }
            .drop-line {
                height: 1px;
            
                background-color: ${searchBarColor};
            }
            .drop-logout {
                margin-top: 20px;
                margin-bottom: 20px;
                margin-right:15px;
                margin-left: 15px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                height: 20px;
                line-height: 20px;
                div:last-of-type{
                    cursor: pointer;
                    &:hover {
                        color: ${themeColor};
                    }
                }
                div:nth-of-type(2) {
                    width: 1px;
                    height: 60px;
                    background-color: ${searchBarColor};
                }
            }
        }
    }

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
    z-index: 20;
`;

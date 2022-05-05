import styled from "styled-components";
import { myTheme } from '@/common/constants';

const { themeColor, bodyColor, grayFontColor, normalColor } = myTheme;
export const HomePageWrapper = styled.div`
    /* width: 100%;
    height: 100%; */
    color: ${normalColor};
    .top-main {
        display: flex;
        align-items: center;
        width: 100%;
        height: 200px;
        .top-left {
            img {
                width: 150px;
                height: 150px;
                border-radius: 50%;
            }
        }
        .top-right {
            margin-left: 20px;
            /* margin-top:20px; */
            .top-right-top {
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                .top-right-top-name {
                    margin-right: 10px;
                    font-size: 20px;
                    font-weight: 900;
                }
            }
            .top-right-middle {
                margin-bottom: 15px;
                color: ${grayFontColor};
            }

            .top-right-bottom {
                a{
                    cursor: pointer;
                    margin-right: 10px;
                    text-decoration: none;
                    &:hover{
                        color: ${themeColor}
                    }
                }
            }
        }
    }
    
    .user-nav {
        /* margin-top: 0px; */
        display: flex;
        padding: 5px 0;
        font-size: 14px;
        background-color: ${bodyColor};
        .nav-item {
            margin-right: 50px;
            text-align: center;
            a {
                text-decoration: none;
                position: relative;
                line-height: 30px;
                color: ${normalColor};
                display: inline-block;
                &:hover,
                &.active {
                    color: ${themeColor};
                }
                &.active::after {
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
            }
        }
    }
`;
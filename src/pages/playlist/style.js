import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, grayFontColor, bodyColor, normalColor } = myTheme;
export const PlaylistWrapper = styled.div`
    margin-top: 20px;
    color: ${normalColor};
    font-size: 14px;
    .top-detail {
        display: flex;
        .top-left {
            margin-right: 30px;
            img {
                border-radius: 10px;
                cursor: pointer;
            }
        }
        .top-right {
            .playlist-name {
                font-size: 26px;
                font-weight: 700;
                margin-bottom: 10px;
            }
            .creator {
                font-size: 12px;
                margin-bottom: 10px;
                img {
                    border-radius: 50%;
                    margin-right: 10px;
                    cursor: pointer;
                }
                span {
                    margin-right: 25px;
                }
                span:first-of-type {
                    cursor: pointer;
                }
                span:not(:first-of-type) {
                    color: ${grayFontColor};
                }
                span:first-of-type:hover {
                    color: ${themeColor};
                }
            }
            .description {
                font-size: 12px;
                color: ${grayFontColor};
            }
            .btns {
                margin-top: 20px;
                height: 30px;
                .btn {
                    height: 30px;
                    display: inline-block;
                    vertical-align: center;
                    line-height: 20px;
                    width: 90px;
                    border-radius: 15px;
                    text-align: center;
                    opacity: 0.9;
                    cursor: pointer;
                    margin-right: 10px;
                    &:hover {
                        opacity: 1;
                    }
                }
                .play {
                    background-color: ${themeColor};
                    color: #fff;
                }
                .more {
                    width: 30px;
                    font-size: 15px;
                    border-radius: 50%;
                }
            }
        }
    }
    .playlist-nav {
        margin-top: 20px;
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

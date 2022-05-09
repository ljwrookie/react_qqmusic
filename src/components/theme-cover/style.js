import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, normalColor, grayFontColor } = myTheme;
export const ThemeCoverWrapper = styled.div`
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    /* const size = $(props =>{props.width}) */
    width: ${(props) => props.width}px;
    margin-top: ${(props) => {
        return props.hover === false ? '0px' : '20px';
    }};
    &:hover {
        .cover-bottom > .delete-it {
            visibility: visible;
        }
    }

    /* height:30px; */
    .cover-top {
        cursor: pointer;
        position: relative;
        transition: all 0.3s;

        .image {
            width: ${(props) => props.width}px;
            height: ${(props) => props.height}px;
            border-radius: 15px;
        }
        .mask {
            position: absolute;
            border-radius: 15px;

            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .cover {
            border-radius: 15px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center; /* 相对父元素水平居中 */
            align-items: center; /*  子元素相对父元素垂直居中 */
            color: #fff;
            .play {
                position: absolute;
                font-size: 60px;

                display: none;
            }
            .info {
                display: inline-block;
                padding: 1px 5px;
                position: absolute;
                font-size: 14px;
                bottom: 10px;
                right: 10px;

                background-color: #3f3f3f;
                opacity: 0.8;
                border-radius: 15px;

                .listen {
                    margin-right: 5px;
                    display: inline-block;
                    font-size: 18px;
                }
            }

            &:hover {
                .info {
                    display: none;
                }
                .play {
                    display: block;
                    &:hover {
                        color: ${themeColor};
                    }
                }
            }
        }
        &:hover {
            transform: ${(props) => {
                return props.hover === false ? 'none' : 'translateY(-5%)';
            }};

            .mask {
                background-color: #000;
                opacity: 0.4;
            }
        }
    }

    .cover-bottom {
        cursor: pointer;
        font-size: 14px;
        line-height:20px;
        color: ${normalColor};
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        div:first-of-type:hover {
            color: ${themeColor};
        }
        .delete-it {
            visibility: hidden;
            font-size: 20px;
            &:hover {
                color: ${themeColor};
                visibility: visible;
            }
        }
    }
    .singer_name {
        color: ${grayFontColor};
        cursor: pointer;
        &:hover {
            color: ${themeColor};
        }
    }
`;


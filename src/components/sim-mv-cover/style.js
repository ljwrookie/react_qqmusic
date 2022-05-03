import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, grayFontColor, normalColor } = myTheme;
export const SimMvCoverWrapper = styled.div`
    display: flex;
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif; /* justify-content: space-between; */
    align-items: center;
    margin-top: 20px;
    a {
        text-decoration: none;
    }
    /* height:30px; */
    .cover-left {
        cursor: pointer;
        position: relative;
        transition: all 0.3s;

        .image {
            width: ${(props) => props.width}px;
            height: ${(props) => props.height}px;
            border-radius: 5px;
        }
        .mask {
            position: absolute;
            border-radius: 5px;

            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .cover {
            border-radius: 5px;
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
                font-size: 40px;

                visibility: hidden;
            }
            .info {
                display: inline-block;
                position: absolute;
                font-size: 12px;
                top: 5px;
                right: 10px;

                /* background-color: #3f3f3f; */
                /* opacity: 0.8; */
                /* border-radius: 15px; */

                .watch {
                    margin-right: 5px;
                    display: inline-block;
                    font-size: 15px;
                }
            }
            .time {
                position: absolute;
                bottom: 5px;
                right: 10px;
                display: inline-block;
                font-size: 12px;
            }

            &:hover {
                .info,
                .time {
                    display: none;
                }

                .play {
                    visibility: visible;
                    &:hover {
                        color: ${themeColor};
                    }
                }
            }
        }
        &:hover {
            .mask {
                background-color: #000;
                opacity: 0.4;
            }
        }
    }

    .cover-right {
        width: 300px;
        text-decoration: none;
        cursor: pointer;
        font-size: 14px;
        /* margin-top: 5px; */

        .mv-name {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box; /*重点，不能用block等其他*/
            -webkit-line-clamp: 2; /*重点IE和火狐不支持*/
            -webkit-box-orient: vertical; /*重点*/
            color: ${normalColor};
            margin: 5px 0px 5px 10px;

            &:hover {
                color: ${themeColor};
            }
        }
        .artist-name {
            margin-left: 10px;
            color: ${grayFontColor};
            &:hover {
                color: ${themeColor};
            }
        }
    }
`;

import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {themeColor, grayFontColor, normalColor} = (getMode()==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
export const SimMvCoverWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    a{
        text-decoration:none;
    }
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    /* const size = $(props =>{props.width}) */

    /* display: flex !important;
  /* display: inline-block; */
    /* align-items: center;   */
    margin-top: 20px;
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
                right:10px;
                display: inline-block;
                font-size: 12px;
            }

            &:hover {
                .info, .time {
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
        text-decoration:none;
        cursor: pointer; 
        font-size: 14px;
        margin-top: 10px;
        .mv-name{
            color: ${normalColor};
            margin: 10px;
            &:hover{
            color: ${themeColor};
        }
        }
        .artist-name{
            margin:  10px;
            color: ${grayFontColor};
            &:hover{
            color: ${themeColor};
            }
        }
    
    }
`;

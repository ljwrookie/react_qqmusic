import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const { themeColor, grayFontColor, normalColor } = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)
export const RankListCoverWrapper = styled.div`
    display: flex;
    align-items: center; /*  子元素相对父元素垂直居中 */
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    /* const size = $(props =>{props.width}) */

    /* display: flex !important;
  /* display: inline-block; */
    /* align-items: center;   */
    /* width: ${(props) => props.width}px; */
    margin-top: 30px;
    height:80px;
    .mv-index{
        display: flex;
        height:20px;
        margin-right: 50px;
        /* float:left; */
        span{
            display: flex;
            width:20px;
            color: #fff;
            font-weight:900;
            /* height:20px; */
            /* line-height:20px; */
            justify-content: center; /* 相对父元素水平居中 */
            align-items: center; /*  子元素相对父元素垂直居中 */
            background-color: ${themeColor};
        }
    }
    .mv-cover {
        margin-right: 30px;
        position: relative;
        transition: all 0.3s;
        width: ${(props) => props.width}px;
        height: ${(props) => props.height}px;
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
                font-size: 55px;

                visibility: hidden;
            }

            &:hover {
                .info {
                    visibility: hidden;
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

    .mv-info {
        font-size: 14px;
        color: ${normalColor};
        .mv-name{
            &:hover{
                color: ${themeColor};
            }
        }
        .mv-artists{
            /* width:200px; */
            /* margin-top:5px; */
            /* margin:0; */
            line-height:20px;
            .artist{
            /* display:inline-block; */
            text-decoration: none;
            color:${normalColor};
            /* word-wrap:break-word; */
            margin-right: 6px;
      
            &:not(:last-of-type) {
                &::after {
                    content: '  /';
                    color: ${grayFontColor};
                }
                /* margin-right: 5px; */
            }
            &:hover {
                color: ${themeColor};
            }
          }
        }
        .mv-time{
            color: ${grayFontColor};
        }
    }
`;

import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {themeColor, grayFontColor, normalColor} = (getMode()==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
export const VideoCoverWrapper = styled.div`
    .video-link{
            text-decoration:none;
    }
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    /* const size = $(props =>{props.width}) */

    /* display: flex !important;
  /* display: inline-block; */
    /* align-items: center;   */
    width: ${(props) => props.width}px;
    margin-top: 20px;
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
                    font-size: 15px;
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
            transform: translateY(-20px);

            .mask {
                background-color: #000;
                opacity: 0.4;
            }
        }
    }

    .cover-bottom {
        text-decoration:none;

        cursor: pointer; 
        font-size: 14px;
        color: ${normalColor};
        margin-top: 10px;
        &:hover {
            color: ${themeColor};
        }
    }
     .all_name{
    width:200px;
    /* margin-top:5px; */
    /* margin:0; */
    line-height:20px;
    .artist{
      /* display:inline-block; */
      text-decoration: none;
      color:${grayFontColor};
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
`;

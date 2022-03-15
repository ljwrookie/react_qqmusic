import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE } from '@/common/constants';
// 存储
// localStorage.setItem("MODE", "LIGHT_MODE");
// 检索
let mode = localStorage.getItem("MODE");
// console.log(mode)
if(mode === undefined){
    localStorage.setItem("MODE", "LIGHT_MODE");
    mode = localStorage.getItem("MODE");
}

const {themeColor} = (mode==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)
export const ThemeCoverWrapper = styled.div`
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    /* const size = $(props =>{props.width}) */

    /* display: flex !important;
  /* display: inline-block; */
    /* align-items: center;   */
    width: ${(props) => props.width}px;
    margin-top: 20px;

    .cover-top {
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

                visibility: hidden;
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
            transform: translateY(-20px);

            .mask {
                background-color: #000;
                opacity: 0.4;
            }
        }
    }

    .cover-bottom {
        font-size: 14px;
        color: #000;
        margin-top: 10px;
        &:hover {
            color: ${themeColor};
        }
    }
`;

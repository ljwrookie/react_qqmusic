import styled from 'styled-components';

import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {
    themeColor,
    normalColor,
    bodyColor,
    searchBarColor,
    grayFontColor,
} = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const PlayerWrapper = styled.div`
    width: 100%;
    height: 700px;
    padding: 150px 0 100px;
    .left {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 450px;
        height: 100%;
        background: url(${(props) => props.bgImage}) center;
        border-radius: 30px;
        box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%),
            -9px 0 28px 0 rgb(0 0 0 / 5%),
            -12px 0 48px 16px rgb(0 0 0 / 3%);
        .image img {
            border-radius: 30px;
        }
    }
    .right {
        position: relative;
        margin-left: 450px;
        height: 100%;
        /* overflow: auto; */
        .song_name {
            position: absolute;
            left: 50%;
            top: -120px;
            transform: translateX(-50%);
            color: ${normalColor};
            font-size: 30px;
            font-weight: 900;
        }
        .song_info {
            position: absolute;
            left: 50%;
            top: -40px;
            transform: translateX(-50%);
            display: flex;
            /* margin-left: 200px; */
            width: 250px;
            justify-content: space-between;
            color: ${normalColor};
        }
        /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
        .lyric {
            margin-right: 20px;
            position: relative;
            height: 90%;
            overflow-x: auto;
            margin-top: 20px;
            ::-webkit-scrollbar {
                width: 6px;
                height: 6px;
                background-color: ${grayFontColor};
            }

            /*定义滚动条轨道 内阴影+圆角*/
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
                border-radius: 3px;
            }

            /*定义滑块 内阴影+圆角*/
            ::-webkit-scrollbar-thumb {
                border-radius: 3px;
                -webkit-box-shadow: inset 0 0 6px #d4d4d4;
                background-color: ${normalColor};
            }
            .lyric_content {
                position: absolute;
                top: 20px;
                width: 100%;
                left: 0;
                display: flex;
                flex-direction: column;
                /* justify-content: space-between;
                 */
                align-items: center;
                /* left: 50%;
                transform: translateX(-50%); */
                p {
                    line-height: 34px;
                    color: ${normalColor};
                    /* font-size: 14px; */
                }
            }
        }
    }
`;

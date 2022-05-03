import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const {
    themeColor,
    normalColor,
    bodyColor,
    searchBarColor,
    grayFontColor,
} = myTheme;

export const PlayerBarWrapper = styled.div`
    position: fixed;
    left: 210px;
    bottom: 0px;
    right: 0px;
    height: 80px;
    background-color: ${bodyColor};
    /* z-index: 9999; */
    .ant-slider {
        width: 100%;
        margin: 4px 0;
        .ant-slider-rail {
            background-color: ${searchBarColor};
        }
        .ant-slider-track {
            background-color: ${themeColor};
        }
        .ant-slider-handle {
            width: 8px;
            height: 8px;
            margin-top: -2px;
            background-color: ${themeColor};
            border-color: ${themeColor};
            opacity: 0;
        }
        &:hover .ant-slider-handle,
        &:focus .ant-slider-handle {
            opacity: 1;
        }
    }
    .control {
        position: relative;
        div {
            position: absolute;
        }
        .left {
            left: 0;
            width: 300px;
        }
        .center {
            display: flex;
            justify-content: center;
            left: 300px;
            right: 300px;
        }
        .right {
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0;
            width: 300px;
            height: 68px;
        }
    }
    span {
        cursor: pointer;
        &:hover {
            color: ${themeColor};
        }
    }
`;
export const PlayerInfo = styled.div`
    position: relative;
    top: 5px;
    margin-left: 40px;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    height: 40px;
    .image {
        /* position: absolute; */
        display: inline-block;
        width: 40px;
        height: 40px;
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    .info_block {
        /* position: absolute; */
        /* display: inline-block; */
        /* position: relative; */
        /* height: 40px; */
        /* width: 20px; */
        padding-left: 12px;
        .song_info {
            position: relative;
            top: -42px;
            left: 30px;
            width: 200px;
            height: 20px;
            overflow: hidden;
            /* text-shadow: 0 1px 0 #171717; */
            line-height: 20px;
            a {
                text-decoration: none;
            }
            .song_name {
                color: ${normalColor};
                margin: 0 10px;
            }
            .singer_name {
                color: ${grayFontColor};
            }
        }
        /* .song_name {
            color: #000;
        } */
        .icons {
            position: relative;
            top: -40px;
            left: 30px;
            .iconfont {
                color: ${grayFontColor};
                font-size: 18px;
                margin: 0 8px;
                &:hover {
                    color: ${themeColor};
                }
            }
        }
    }
`;
export const ControlWrapper = styled.div`
    position: relative;
    top: -5px;
    .iconfont {
        font-size: 20px;
        padding: 0 10px;
        color: ${normalColor};
    }
    .play_pause {
        position: relative;
        top: 5px;
        /* position: fixed; */
        /* margin-top: 50px; */
        font-size: 35px;
        color: ${themeColor};
    }
    .top-volume {
        position: absolute;
        top: -160px;
        right: -14px;
        clear: both;
        width: 75px;
        height: 150px;
        overflow: hidden;
        border-radius: 10px;
        padding: 20px;
        background-color: #ffffff;

        /* ant design Slider style change */
        .ant-slider-vertical {
            padding: 0 15px;
            .ant-slider-rail {
                width: 5px;
            }
            .ant-slider-track {
                width: 5px;
            }
            .ant-slider-handle {
                left: 15px;
                width: 16px;
                height: 16px;
            }
        }
    }
`;
export const OperateWrapper = styled.div`
    position: relative;
    bottom: 25px;
    right: 15px;
    font-size: 12px;
    color: #868686;
    .desk_lyc {
        margin: 0 8px;
        font-size: 14px;
        color: ${(props) =>
            props.isShowDeskLyric ? themeColor : grayFontColor};
    }
    .iconfont {
        position: relative;
        top: 3px;
        font-size: 20px;
    }
`;

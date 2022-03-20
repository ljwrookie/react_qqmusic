import styled from 'styled-components';

import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {
    themeColor,
    normalColor,
    bodyColor,
    hoverColor,
    sideColor,
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
        border-radius: 20px;
        box-shadow: inset 0 0 6px #d4d4d4;
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
export const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between  ;
    a{
        text-decoration:none;
    }
    .bottom-left{
        margin-top: 30px;
        width: 30%;
        .simi-title{
            font-size: 16px;
            font-weight: 700;
            color: ${normalColor};
        }
        .simi-title.playlists{
            margin-bottom:10px;
        }
        .simi-playlists{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .playlist{
                margin-left: -7px;
                position:relative;
                align-items:center;
                height: 54px;
                padding:7px;
                margin-top: 7px;
                /* background-size:cover; */

                border-radius:5px;
                img{
                    width: 40px;
                    border-radius:5px;
                }
                span{
                    margin-left: 10px;
                    font-size:13px;
                    color: ${normalColor}
                }
                &:hover{
                    background-color:${hoverColor};
                    span{
                        font-weight:500;
                    }
                }
            }
        }
        .simi-title.songs{
            margin-top:30px; 
            /* margin-bottom: 10px ; */
        }
        .simi-songs{
            margin-left: -7px;
            /* margin-top: 30px; */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .song{
                position:relative;
                align-items:center;
                height: 54px;
                padding:7px;
                margin-top: 7px;
                /* background-size:cover; */

                border-radius:5px;
                img{
                    width: 40px;
                    border-radius:5px;
                }
                span{
                    margin-left: 10px;
                    font-size:13px;
                    color: ${normalColor}
                }
                &:hover{
                    background-color:${hoverColor};
                    span{
                        font-weight:500;
                    }
                }
            }
        }
        

    }
    .bottom-right{
        width: 66%;
    }
`

export const PlayerCommentWrapper = styled.div`
    overflow: hidden;
    .btn {
        height: 30px;
        cursor: pointer;
        color: ${normalColor};
        background-color: ${bodyColor};
        border: solid 1px ${hoverColor};
        border-radius: 15px;
        &:hover {
            color: ${themeColor};
            background-color: ${sideColor};
        }
    }
    .music-comments {
            margin-top: 25px;
            .music-comment-title {
                color: ${normalColor};
                font-size: 16px;
                font-weight: 700;
                .comment-count {
                    font-weight: 300;
                    font-size: 12px;
                    color: ${hoverColor};
                }
            }

            .input-comment {
                margin-top: 10px;
                textarea {
                    width: 100%;
                    height: 80px;
                    background-color: ${bodyColor};
                    border-radius: 5px;
                    color: ${normalColor};
                    border: 1px solid ${hoverColor};
                }
            }
            .comment-icon {
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                .comment-icon-left {
                    .iconfont {
                        cursor: pointer;
                        font-size: 18px;
                        color: ${grayFontColor};
                        margin-right: 10px;
                        &:hover {
                            color: ${themeColor};
                        }
                    }
                }
                .comment-icon-right {
                    .btn {
                        width: 60px;
                        height: 30px;
                    }
                }
            }
            .comment-item {
                .ant-comment-content-author-name {
                    span {
                        color: ${grayFontColor};
                        cursor: pointer;
                    }
                }
                /* justify-content: space-between; */
                p {
                    font-size: 13px;
                    font-weight: normal;
                    color: ${normalColor};
                }
                .icon {
                    cursor: pointer;
                    margin-top: -10px;
                    margin-left: 45px;
                    bottom: -5px;
                    color: ${grayFontColor};
                    vertical-align: middle;
                    span:not(:nth-child(3))::after {
                        content: '|';
                        font-size: 13px;
                        color: ${sideColor};
                        margin: 0 5px;
                    }
                    span:hover {
                        color: ${themeColor};
                    }
                    span:nth-child(1) {
                        font-size: 13px;
                    }
                    span:nth-child(2) {
                        font-size: 14px;
                    }
                    span:nth-child(3) {
                        font-size: 12px;
                    }
                }
            }
            .title {
                    font-size: 14px;
                    font-weight: 700;
                    color: ${normalColor};
            }
            .hot-comments {
                margin-top: 10px;
                /* font-size: 12px; */
                /* font-weight: 100; */

            }
            .comment-center {
                margin: 20px;
                display: flex;
                justify-content: center;
                /* align-items:center; */
                .btn-center {
                    width: 180px;
                    height: 30px;
                }
            }
            .all-comments {
                margin-top: 10px;
                .title {
                    font-size: 14px;
                    font-weight: 700;
                }
            }
        }

    .pagination {
        display: flex;
        justify-content: center;
        color: ${themeColor};
        .ant-pagination-item-active {
            border-color: ${themeColor};
            a{
                color:${themeColor}
            }
        }
        .ant-pagination-item:hover {
            border-color: ${themeColor};
            a{
                color:${themeColor}
            }
        }
        .ant-pagination-item-link:hover{
            border-color: ${themeColor};
        }
        .ant-pagination-options .ant-select.ant-pagination-options-size-changer.ant-select-single.ant-select-show-arrow:hover{
            border-color: ${themeColor};

        }

    }
`

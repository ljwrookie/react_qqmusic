import styled from 'styled-components';

import { myTheme } from '@/common/constants';

const {
    themeColor,
    normalColor,
    bodyColor,
    hoverColor,
    sideColor,
    searchBarColor,
    grayFontColor
} = myTheme;

export const PersonalFmWrapper = styled.div`
    min-height: 90vh;
    
`
export const PlayerWrapper = styled.div`
    width: 100%;
    height: 700px;
    padding: 150px 0 100px;
    .left {
        float: left;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 450px;
        height: 100%;
        
        /* background: url(${(props) => props.bgImage}) center;
        border-radius: 30px; */
        /* box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%),
            -9px 0 28px 0 rgb(0 0 0 / 5%),
            -12px 0 48px 16px rgb(0 0 0 / 3%); */
        .image {
            position: relative;
            img {
                border-radius: 20px;
                box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%),
                -9px 0 28px 0 rgb(0 0 0 / 5%),
                -12px 0 48px 16px rgb(0 0 0 / 3%);
            }
            .control {
                transition: all 0.3s ease-in-out;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
               
                span{
                    font-size: 50px;
                    color: white;
                    cursor: pointer;
                    :hover{
                        color: ${themeColor};
                    }
                }
                &.play {
                    top:85%;
                    left: 85%;
                    
                }
            }
        }
       
        .btn{
            width: 300px;
            height: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            span{
                line-height:40px;
                cursor: pointer;
                text-align: center;
                display: inline-block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid ${hoverColor};
                font-size: 25px;
                color: ${grayFontColor};
                &:hover{
                    color: ${themeColor};
                }
            }
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
                background-color: ${searchBarColor};
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
                background-color: ${bodyColor};
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
            a {
                color: ${themeColor};
            }
        }
        .ant-pagination-item:hover {
            border-color: ${themeColor};
            a {
                color: ${themeColor};
            }
        }
        .ant-pagination-item-link:hover {
            border-color: ${themeColor};
        }
        .ant-pagination-options
            .ant-select.ant-pagination-options-size-changer.ant-select-single.ant-select-show-arrow:hover {
            border-color: ${themeColor};
        }
    }
`;

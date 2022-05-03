import styled from 'styled-components';
import { myTheme } from '@/common/constants';
import { normalizeUnits } from 'moment';

const {
    themeColor,
    sideColor,
    hoverColor,
    bodyColor,
    grayFontColor,
    normalColor,
} = myTheme;
export const MvPlayerWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    color: ${normalColor};
    .main {
        display: flex;
        justify-content: space-between;
    }
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
    .mv-title {
        /* margin-top:10px; */
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 10px;
    }
    .mv-player-left {
        position: relative;
        width: 66%;

        video {
            margin-top: 10px;
            width: 100%;
            height: 408px;
            border-radius: 5px;
        }
        .video {
            .resolution {
                /* visibility: hidden; */
                top: 395px;
                right: 153px;
                position: absolute;
                &.iconfont {
                    display: block;
                    width: 30px;
                    height: 20px;
                    cursor: pointer;
                    color: #fff;
                    font-size: 15px;
                    visibility: hidden;
                }
            }
            &:hover {
                .resolution {
                    &.iconfont {
                        visibility: visible;
                    }
                }
            }
        }

        .mv-info {
            margin-top: 10px;
            .mv-info-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .btn {
                    width: 80px;
                    /* vertical-align: middle ; */
                    .iconfont {
                        font-size: 14px;
                    }
                }
            }
            .artist-img {
                margin-right: 10px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            .artist-name {
                cursor: pointer;
                font-size: 14px;
            }
            .mv-name {
                margin-top: 10px;
                font-size: 16px;
                font-weight: 700;
            }
            .mv-other-info {
                margin-top: 10px;
                color: ${grayFontColor};
                span {
                    margin-right: 20px;
                }
            }
            .btn-all {
                margin-top: 10px;
                .btn {
                    margin-right: 10px;

                    /* height:30px; */
                    width: 120px;
                    .iconfont {
                        vertical-align: middle;
                        font-size: 16px;
                    }
                }
            }
        }
        .mv-comments {
            margin-top: 25px;
            .mv-comment-title {
                font-size: 16px;
                font-weight: 700;
                .comment-count {
                    font-weight: 300;
                    font-size: 12px;
                    color: ${hoverColor};
                    /* .ant-comment-content-author-name{
                        color: ${normalColor} !important;
                    } */
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
            .hot-comments {
                margin-top: 10px;
                /* font-size: 12px; */
                /* font-weight: 100; */
                .title {
                    font-size: 14px;
                    font-weight: 700;
                }
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
    }
    .mv-player-right {
        width: 30%;
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

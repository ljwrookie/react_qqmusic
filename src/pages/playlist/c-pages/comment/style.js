import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const {
    themeColor,
    sideColor,
    hoverColor,
    bodyColor,
    grayFontColor,
    normalColor,
} = myTheme;
export const CommentWrapper = styled.div`
    min-height:60vh;
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
    .playlist-comments {
        margin-top: 25px;

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

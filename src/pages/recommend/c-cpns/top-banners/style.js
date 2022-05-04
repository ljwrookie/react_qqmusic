import { myTheme } from '@/common/constants';

const { themeColor, normalColor } = myTheme;

const { default: styled } = require('styled-components');

export const BannerWrapper = styled.div`
    height: 230px;
    /* display: flex; */
    position: relative;
    .content {
        /* position: relative; */
        display: flex !important;
        /* 设置主轴排序方式 */
        justify-content: space-between;
        /* 设置侧轴排序方式 */
        /* align-items: center; */
        /* height: 186px; */
        margin-top: 20px;

        /* background-color: #f5f5f5; */
        width: 100%;
        /* height: 270px; */
        .banner_img {
            display: flex;
            align-items: center;
            /* margin: 0 25px; */
            width: 537px;
            border-radius: 15px;
        }
    }
    .slick-dots {
        position: absolute;
        bottom: -30px;
        z-index:0 !important;
        li {
            width: 10px !important;
            height: 10px;
            margin: 0 6px;

            button {
                height: 10px;
                border-radius: 50%;
                
                background-color: ${normalColor} !important;
                &:hover {
                    background-color: ${themeColor} !important;
                }
            }
        }
    }
    /* overflow:scroll;
    overflow-x:hidden */
`;
export const RecommendControl = styled.div`
    /* overflow:auto; */

    position: absolute;
    left: 0;
    right: 0;

    top: 40%;

    .btn {
        position: absolute;
        background-color: transparent;
        cursor: pointer;
        span {
            font-size: 40px;
            /* font-weight: 100 !important; */
            visibility: hidden;
        }
        &:hover span {
            color: ${themeColor};
            visibility: visible;
            /* font-weight: 100 !important; */
        }
        &:nth-child(1) {
            /* left: 50px; */
            transform: translateX(-100%);
            span:nth-child(1) {
                display: inline-block;
                -moz-transform: scaleX(-1);
                -webkit-transform: scaleX(-1);
                -o-transform: scaleX(-1);
                transform: scaleX(-1);
            }
        }
        &:nth-child(2) {
            right: 0px;
            transform: translateX(100%);
        }
    }
`;

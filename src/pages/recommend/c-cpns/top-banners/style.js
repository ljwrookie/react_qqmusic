import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';


const { themeColor, normalColor } = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)

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
<<<<<<< Updated upstream
            width: 537px;
            border-radius: 15px;
=======
            width: 350px;
            border-radius: 20px;
>>>>>>> Stashed changes
        }
        
    }
    .slick-dots {
        position: absolute;
        bottom: -30px;
        li {
            width: 10px !important;
            height:10px ;
            margin: 0 6px;
        
            button {
                height: 10px ;
                border-radius: 50%;
                background-color: ${normalColor} !important;
                &:hover{
                    background-color: ${themeColor} !important;
                }
            }
        
        }

    }
    /* overflow:scroll;
    overflow-x:hidden */
`;
export const BannerControl = styled.div`
    /* overflow:auto; */

    position: absolute;
    left: 0;
    right: 0;
    top: 25%;
    transform: translateY(-50%);
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
            left: -55px;
        }
        &:nth-child(2) {
            right: -55px;
        }
    }
`;

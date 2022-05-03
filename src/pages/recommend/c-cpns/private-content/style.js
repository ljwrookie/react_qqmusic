import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor } = myTheme;
export const RecommendWrapper = styled.div`
    margin-top: 50px;
    position: relative;

    .content {
        margin: 20px 0 20px;
        display: flex;
        /* width:1100px; */
        align-items: center;
        .album {
            width: 100%;

            .page {
                display: flex !important;
                justify-content: space-between;
            }
        }
    }
`;
export const RecommendControl = styled.div`
    /* overflow:auto; */

    position: absolute;
    left: 0;
    right: 0;

    top: 45%;

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

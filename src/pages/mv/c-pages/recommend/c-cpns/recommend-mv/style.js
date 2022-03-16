
import styled from "styled-components";
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const { themeColor } = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)

export const RecommendMvWrapper = styled.div`
    margin-top: 50px;
    position: relative;

    .content {
        margin: 20px 0;
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

export const MvControl = styled.div`
    /* overflow:auto; */

    position: absolute;
    left: 0;
    right: 0;
    
    top: 5%;
    
    .btn {
        position: absolute;
        background-color: transparent;
        cursor: pointer;
        span {
            font-size: 14px;
            /* font-weight: 100 !important; */
            
        }
        &:hover span {
            color: ${themeColor};
        
        }
     
        &:nth-child(1) {
            right:0px;
            transform: translateX(10%);
        }
    }
`;


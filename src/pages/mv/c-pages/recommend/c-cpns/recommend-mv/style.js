
import styled from "styled-components";
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const { themeColor, normalColor } = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)

export const RecommendMvWrapper = styled.div`
    margin-top: 50px;
    position: relative;

    .content {
        margin: 20px 0;
    

            .page {
                display: flex !important;
                justify-content: space-between;
                &:nth-of-type(n){
                    margin-bottom:12px;
                }
                &:last-of-type{
                    margin-bottom:0;
                }
            /* } */
        }
    }
`;

export const MvControl = styled.div`
    /* overflow:auto; */

    position: absolute;
    left: 0;
    right: 0;
    
    top: 15px;
    
    .btn {
        position: absolute;
        background-color: transparent;
        cursor: pointer;
        span {
            font-size: 14px;
            color:${normalColor}
            /* font-weight: 100 !important; */
            
        }
        &:hover span {
            color: ${themeColor};
        
        }
     
        &:nth-child(1) {
            right:0px;
            transform: translateX(8%);
        }
    }
`;


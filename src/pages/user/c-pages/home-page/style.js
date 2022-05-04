import styled from "styled-components";
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
const { themeColor, bodyColor, normalColor } =
    getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;
export const HomePageWrapper = styled.div`
    /* width: 100%;
    height: 100%; */
    .top-main{
        width: 100%;
        height: 200px;
        .top-left{
            img{
                width: 150px;
                height: 150px;
                border-radius: 50%;
            }
        }
    }

`
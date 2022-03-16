import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const { themeColor, normalColor } = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)
export const ThemeCoverWrapper = styled.div`
    /* width:60px;
    .login{
        font-size:14px;
        display:inline-block;
        /* background-color: black; */
        /* width:40px; */
        
    /* }
     .qrCode{
        
        margin:0 auto;
    } */ 

`
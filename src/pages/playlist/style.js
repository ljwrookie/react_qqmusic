import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';


const { themeColor } = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)
export const PlaylistWrapper = styled.div`
    .top-detail{
        /* display: flex; */
        .top-left{
            width:200px;
            height: 200px;
            img{
                width:200px;
                height: 200px;
            }
        }
        .tip-right{

        }
    }
`
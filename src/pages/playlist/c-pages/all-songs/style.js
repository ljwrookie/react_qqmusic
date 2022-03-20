import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';


const {  grayFontColor } = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)
export const AllSongsWrapper = styled.div`
    .list_header {
        margin-top:30px;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        color: ${grayFontColor};
        font-size: 14px;
        .singer {
            margin-left: 370px;
        }
        .album {
            margin-left: 175px;
        }
        .total_time {
            margin-left: 270px;
        }
    }
`
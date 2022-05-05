import styled from 'styled-components';
import { myTheme } from '@/common/constants';
import theme from 'styled-theming';

const { grayFontColor, themeColor } = myTheme;
export const AllSongsWrapper = styled.div`
    min-height: 60vh;
    .list_header {
        margin-top: 30px;
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
    .un-open{
        height: 50vh;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span{
            font-size:16px;
        }
        .iconfont{
            font-size:50px;
            color:${themeColor};
        }
    }
`;

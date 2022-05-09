import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { normalColor, themeColor } = myTheme;
export const LocalSongNav = styled.div`
    color: ${normalColor};
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .un-content {
        height: 100%;
        display: flex;
        margin:0 auto;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform: translateY(-10%);
        span:last-child {
            font-size: 30px;
            font-weight:900;
            margin-top: -50px;
        }
        .iconfont {
            font-size: 200px;
            color: ${themeColor};
        }
    }
`;

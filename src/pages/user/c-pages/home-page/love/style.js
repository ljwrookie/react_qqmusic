import styled from "styled-components";
import { myTheme } from '@/common/constants';

const { themeColor} = myTheme;
export const LoveWrapper = styled.div`
    margin-top: 20px;
    min-height: 60vh;
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
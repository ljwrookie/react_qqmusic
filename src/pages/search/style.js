import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, bodyColor, normalColor } = myTheme;
export const TopNav = styled.div`
    color: ${normalColor};
    .nav_title {
        font-size: 32px;
        font-weight: 900;
        margin: 20px 0;
    }
    .nav_list {
        display: flex;
        padding: 5px 0;
        font-size: 14px;
        width: 100%;
        z-index: 1;
        background-color: ${bodyColor};
        .nav_item {
            margin-right: 50px;
            text-align: center;
            a {
                color: ${normalColor};
                display: inline-block;
                &:hover,
                &.active {
                    text-decoration: none;
                    color: ${themeColor};
                    border-bottom: ${themeColor} solid;
                }
            }
        }
    }
`;

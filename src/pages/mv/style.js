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
        background-color: ${bodyColor};
        .nav_item {
            margin-right: 50px;
            text-align: center;
            a {
                position: relative;
                line-height: 30px;
                color: ${normalColor};
                display: inline-block;
                &:hover,
                &.active {
                    text-decoration: none;
                    color: ${themeColor};
                }
                &.active::after {
                    position: absolute;
                    content: '';
                    width: 25px;
                    height: 3px;
                    border-radius: 2px;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: ${themeColor};
                }
            }
        }
    }
`;

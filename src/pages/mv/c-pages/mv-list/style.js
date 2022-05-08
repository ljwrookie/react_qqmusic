import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, hoverColor, sideColor, bodyColor, normalColor } =
    myTheme;

export const MvListWrapper = styled.ul`
    min-height: 80vh;

    .firstList {
        margin-top: 15px;
    }
    .secondList {
        margin-top: 20px;
    }

    .nav-button {
        cursor: pointer;
        margin-right: 10px;
        height: 30px;
        width: 70px;
        background-color: ${bodyColor};
        color: ${normalColor};
        border: solid 1px ${hoverColor};
        border-radius: 15px;
        &:hover {
            color: ${themeColor};

            background-color: ${sideColor};
        }
        &.active {
            color: ${sideColor};
            background-color: ${themeColor};
        }
    }
    .list-title {
        margin-top: 30px;
        color: ${normalColor};
        display: flex;
        justify-content: space-between;
        .title-left {
            font-size: 24px;
            display: flex;
        }
        .title-right {
            display: flex;
            text-decoration: none;
            color: ${normalColor};
            span {
                margin-left: 30px;
                cursor: pointer;
                &:hover {
                    color: ${themeColor};
                }
                &.active{
                    color: ${themeColor};
                }
            }
        }
    }
    .content {
        margin: 20px 0;
        .page {
            display: flex !important;
            justify-content: space-between;
            margin-bottom: 12px;
        }
    }
`;

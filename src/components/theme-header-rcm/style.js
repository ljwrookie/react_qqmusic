import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, normalColor, grayFontColor } = myTheme;
export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        display: flex;
        align-items: center;

        .title {
            color: ${normalColor};
            font-size: 24px;
            font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
            margin-right: 20px;
        }
        .keyword {
            display: flex;
            .item {
                font-size: 12px;
                color: ${grayFontColor};
                .link {
                    text-decoration: none;
                    margin: 0 15px;
                    &:hover {
                        color: ${themeColor};
                    }
                    &:active {
                        color: ${themeColor};
                    }
                }
            }
        }
    }
    .right {
        color: ${grayFontColor};
        display: flex;
        align-items: center;
        font-size: 14px;
        .link {
            text-decoration: none;
            &:hover {
                color: ${themeColor};
            }
        }
    }
`;

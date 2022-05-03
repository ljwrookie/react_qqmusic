import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, grayFontColor } = myTheme;

export const SwitchArea = styled.div`
    color: ${grayFontColor};
    span {
        display: inline-block;
        position: relative;
        margin-right: 50px;
        cursor: pointer;
        font-size: 12px;
        line-height: 30px;
        margin-bottom: 10px;
        &:hover {
            color: ${themeColor};
        }
    }
    .active {
        color: ${themeColor};
    }
    .active::after {
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
`;
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

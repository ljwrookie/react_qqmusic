import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {
    themeColor,
    bodyColor,
    normalColor,
    grayFontColor,
    searchBarColor,
} = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const SwitchArea = styled.div`
    color: ${grayFontColor};
    span {
        margin-right: 50px;
        font-size: 12px;
        &:hover {
            color: ${themeColor};
        }
    }
    .active {
        color: ${themeColor};
        border-bottom: solid 2px ${themeColor};
    }
`;

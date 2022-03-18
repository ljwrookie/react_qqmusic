import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
// 存储

const { themeColor, searchBarColor, grayFontColor, normalColor } =
    getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const SearchSingerWrapper = styled.div`
    /* display: flex; */
    margin: 20px 0;
    /* justify-content: space-between;
    align-items: center; */
`;

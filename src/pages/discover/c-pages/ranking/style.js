import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {
    themeColor,
    bodyColor,
    normalColor,
    grayFontColor,
    searchBarColor,
} = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const RankingWrapper = styled.div`
    .long_item,
    .cover_item {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .theme_cover {
            margin-top: 20px;
        }
    }
    .rank_name {
        margin: 15px 0 -10px;
        font-size: 24px;
        font-weight: 500;
        color: ${normalColor};
    }
`;

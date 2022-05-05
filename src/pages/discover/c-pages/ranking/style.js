import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const {
    themeColor,
    bodyColor,
    normalColor,
    grayFontColor,
    searchBarColor,
} = myTheme;

export const RankingWrapper = styled.div`
    min-height:60vh;

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

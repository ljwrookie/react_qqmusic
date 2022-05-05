import styled from 'styled-components';
// import { myTheme } from '@/common/constants';

// const { themeColor, bodyColor, grayFontColor, normalColor } = myTheme;
export const CollectionPlaylistWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 60vh;
    flex-wrap: wrap;
    .item {
        text-decoration: none;
        &:not(:nth-of-type(6n)) {
            margin-right: 28px;
        }
    }
`;

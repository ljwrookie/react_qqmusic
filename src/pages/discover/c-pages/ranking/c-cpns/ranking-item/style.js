import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {
    themeColor,
    bodyColor,
    normalColor,
    grayFontColor,
    searchBarColor,
} = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const RankingItemWrapper = styled.div`
    display: flex;
    width: 358px;
    height: 150px;
    align-items: center;
    margin: 10px 0;
    border-radius: 15px;
    background-color: ${searchBarColor};
    margin-top: 20px;
    &:hover {
        transform: translateY(-20px);
    }
    .cover {
        border-radius: 15px;
        width: 150px;
        height: 150px;
    }
    .list {
        margin-left: 10px;
        .list_name {
            margin: 5px 0;
            font-weight: 800;
            font-size: 20px;
            color: ${normalColor};
        }
        .list_content {
            li {
                width: 180px;
                margin: 4px 0;
                color: ${grayFontColor};
            }
        }
    }
`;

import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, bodyColor, normalColor, grayFontColor, sideColor } =
    myTheme;

export const RankingItemWrapper = styled.div`
    display: flex;
    width: 358px;
    height: 150px;
    align-items: center;
    margin: 10px 0;
    border-radius: 15px;
    background-color: ${sideColor};
    margin-top: 20px;
    transition: all 0.3s;
    &:hover {
        transform: translateY(-5%);
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

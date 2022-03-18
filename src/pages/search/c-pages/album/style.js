import styled from 'styled-components';

import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const { grayFontColor } =
    getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const AlbumListWrapper = styled.div`
    .list_header {
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        color: ${grayFontColor};
        .header_singer {
            margin-left: 180px;
        }
        .header_publish {
            margin-left: -60px;
        }
        .header_size {
            padding-right: 20px;
        }
    }
`;

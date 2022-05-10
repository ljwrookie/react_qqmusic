import styled from 'styled-components';

import { myTheme } from '@/common/constants';

const { grayFontColor } = myTheme;

export const AlbumListWrapper = styled.div`
    min-height: 80vh;
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

import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { normalColor } = myTheme;
export const LocalSongNav = styled.div`
    color: ${normalColor};
    .nav_title {
        font-size: 32px;
        font-weight: 900;
        margin: 20px 0;
    }
    .ant-result {
        margin-top: 30%;
        margin-bottom: 40%;
        height: 100%;
    }
`;

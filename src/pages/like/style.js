import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
const { normalColor } = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;
export const LikeNav = styled.div`
    color: ${normalColor};
    .nav_title {
        font-size: 32px;
        font-weight: 900;
        margin: 20px 0;
    }
`;
import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const { themeColor } = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const RecmdMain = styled.div`
    color: pink;
    .ant-back-top {
        bottom: 85px;
    }
    .back_top {
        line-height: 40px;
        padding: 0 10px;
        background-color: ${themeColor};
        color: #fff;
        border-radius: 10px;
    }
`;

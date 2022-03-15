import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';


const {grayFontColor} = (getMode()==='LIGHT_MODE'?LIGHT_MODE:DARK_MODE)

export const OperateWrapper = styled.div`
    position: relative;
    bottom: 25px;
    right: 15px;
    font-size: 12px;
    color: ${grayFontColor};
    .iconfont {
        position: relative;
        top: 3px;
        font-size: 20px;
        margin-left: 8px;
    }
`;

import styled from 'styled-components';
import { myTheme } from '@/common/constants';
const { normalColor , themeColor} = myTheme;
export const DownloadNav = styled.div`
    color: ${normalColor};
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* .nav_title {
        font-size: 32px;
        font-weight: 900;
        margin: 20px 0;
    } */
    .ant-result-info .ant-result-icon > .anticon {
        color: ${themeColor};
    }
    .ant-result {
        margin-top: -60px;
    }
`;

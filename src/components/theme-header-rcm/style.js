import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height: 33px;

    padding: 0 10px 4px 34px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
        display: flex;
        align-items: center;
        color: #3F3F3F;

        .title {
            font-size: 20px;
            font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
            margin-right: 2px;
            font-weight:900;
        }
        .icon {
            font-size:18px;
        }
        &:hover{
        text-decoration:none;
        color:#00cd98;
        }
    }
`;

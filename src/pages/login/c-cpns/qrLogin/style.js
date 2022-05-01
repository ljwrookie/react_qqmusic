import styled from 'styled-components';

export const QrLoginComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .qr-img {
        width: 150px;
        height: 150px;
        border: 1px solid #f6f6f6;
        margin: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tip {
        font-size: 14px;
        color: #7d7d7d;
        margin-bottom: 10px;
        line-height: 20px;
        border-radius: 10px;
        padding: 2px 10px;
        background-color: #f6f6f6;
    }
    .qr-foot {
        font-size: 12px;
        color: #7d7d7d;
    }
`;

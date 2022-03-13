import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 75px;
    background-color: #fafafa;
    z-index: 9999;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;

    .prev_next {
        margin-left: 40px;
        span {
            cursor: pointer;
            &:hover {
                color: #00cd98;
            }
        }
    }
    .search {
        height: 32px;
        width: 200px;
        margin-left: 10px;
        padding-left: 20px;
        border-radius: 16px;
        background-color: #e1e1e1;
        .anticon-search {
            color: #a9a9a9;
        }
        .ant-input {
            background-color: #e1e1e1;
            color: #181818;
            padding-left: 10px;
            margin-top: 2px;
            font-size: 12px;
        }
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: 40px;
    .login {
        &:hover {
            text-decoration: none;
            color: #00cd98;
        }
    }
    .toolbar {
        margin-left: 20px;
        font-size: 16px;
        color: #7d7d7d;
        cursor: pointer;
        &:hover {
            color: #00cd98;
        }
    }
`;

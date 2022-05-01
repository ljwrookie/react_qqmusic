import styled from 'styled-components';

export const IdLoginComponentWrapper = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        margin-bottom: 30px;
        span {
            color: #1e6fff;
        }
    }
    input {
        margin-bottom: 15px;
        width: 100%;
        border: 1px solid #e6e6e6;
        border-radius: 2px;
        height: 40px;
        font-size: 14px;
        text-indent: 10px;
        &::placeholder {
            color: #ccc;
        }
        &:focus {
            outline: none;
            border-color: #1e6fff;
        }
    }
    button {
        width: 100%;
        background-color: #1e6fff;
        line-height: 40px;
        color: #fff;
        font-size: 16px;
        border-radius: 2px;
    }
    .form-foot {
        margin-top: 20px;
        span {
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
            &:not(:last-of-type)::after {
                content: '|';
                margin: 0 10px;
            }
        }
    }
`;

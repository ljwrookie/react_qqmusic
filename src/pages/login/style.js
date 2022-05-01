import styled from 'styled-components';
export const LoginComponentWrapper = styled.div`
    .lg-container {
        width: 500px;
        height: 400px;
        background-color: #fff;
        border-radius: 10px;
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        transition: all 0.3s;
        .btn-title {
            border-radius: 20px;
            background-color: #f6f6f6;
            margin-bottom: 20px;
            button {
                transition: all 0.3s;
                font-size: 16px;
                color: #7d7d7d;
                border-radius: 20px;
                border: 1px solid #f6f6f6;
                background-color: #f6f6f6;
                width: auto;
                height: 40px;
                padding: 0 30px;
                cursor: pointer;
                &.focus {
                    background-color: white;
                    color: black;
                }
            }
        }
        .lg-form {
            width: 60%;
            display: none;
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
            &.active {
                display: flex;
            }
        }
        .lg-qr {
            display: none;
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
            &.active {
                display: flex;
            }
        }
        .show {
            cursor: pointer;
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 16px;
            color: #7d7d7d;
        }
        /* &.off {
            display: none;
        } */
    }
`;

import styled from 'styled-components';
export const LoginComponentWrapper = styled.div`
    .lg-container {
        width: 500px;
        height: 400px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
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

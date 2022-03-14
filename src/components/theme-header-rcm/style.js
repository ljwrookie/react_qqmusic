import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height: 33px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        display: flex;
        align-items: center;
        color: #3f3f3f;
        .title {
            font-size: 20px;
            font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
            margin-right: 20px;
        }
        .keyword {
            display: flex;
            .item {
                color: #C1C1C1;
                span{
                    margin:0 15px;
                    &:hover{
                    text-decoration: none;
                    color: #00cd98;
                    }
                }
            }
        }
    }
    .right {
        display: flex;
        align-items: center;
        font-size: 13px;
        .link{
            &:hover {
            text-decoration: none;
            color: #00cd98;
            }
        }
    }

`;
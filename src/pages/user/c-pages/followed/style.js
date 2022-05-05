import styled from 'styled-components'
import { myTheme } from '@/common/constants';

const { themeColor, hoverColor, normalColor, searchBarColor } = myTheme;
export const FollowedWarper = styled.div`
    min-height:90vh;
    color: ${normalColor};
    .title{
        margin-top:20px;
        margin-bottom:40px;
        font-size: 24px;
        font-weight:900;
    }
    a{
        text-decoration:none;
    }
    .main{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        div{
            /* overflow: hidden; */
            width: 200px;
            height: 260px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                cursor: pointer;
                height:140px;
                width: 140px;
                border-radius:50%;
            }
            span{
                cursor: pointer;
                display:inline-block;
                max-width:200px;
                margin-top: 10px;
                margin-bottom: 10px;
                font-size:16px;
                &:hover{
                    color: ${themeColor}
                }
            }
            button {
                color: ${normalColor};
                cursor: pointer;
                font-size:14px;
                line-height:30px;
                height:30px;
                border-radius:15px;
                width:100px;
                background-color: ${searchBarColor};
                &:hover{
                    background-color: ${hoverColor};
                }
                span{
                    line-height:30px;
                }
            }
        }
    }
`
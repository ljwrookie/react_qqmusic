import styled from "styled-components";
import { myTheme } from '@/common/constants';

const { themeColor, bodyColor, grayFontColor, normalColor } = myTheme;
export const HomePageWrapper = styled.div`
    /* width: 100%;
    height: 100%; */
    color: ${normalColor};
    .top-main {
        display: flex;
        align-items: center;
        width: 100%;
        height: 200px;
        .top-left {
            img {
                width: 150px;
                height: 150px;
                border-radius: 50%;
            }
        }
        .top-right {
            margin-left: 20px;
            /* margin-top:20px; */
            .top-right-top {
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                .top-right-top-name {
                    margin-right: 10px;
                    font-size: 20px;
                    font-weight: 900;
                }
            }
            .top-right-middle {
                margin-bottom: 15px;
                color: ${grayFontColor};
            }

            .top-right-bottom {
                a{
                    cursor: pointer;
                    margin-right: 10px;
                    text-decoration: none;
                    &:hover{
                        color: ${themeColor}
                    }
                }
            }
        }
    }
    
    .user-nav {
        /* margin-top: 0px; */
        display: flex;
        padding: 5px 0;
        font-size: 14px;
        background-color: ${bodyColor};
        .nav-item {
            margin-right: 50px;
            text-align: center;
            span {
                cursor: pointer;
                position: relative;
                line-height: 30px;
                color: ${normalColor};
                display: inline-block;
                &:hover,
                &.active {
                    color: ${themeColor};
                }
                &.active::after {
                    position: absolute;
                    content: '';
                    width: 25px;
                    height: 3px;
                    border-radius: 2px;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: ${themeColor};
                }
            }
        }
    }

`;
export const PlaylistWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 60vh;
    margin-top: 10px;
    flex-wrap: wrap;
    /* justify-content: center; */
    .item{
        text-decoration: none; 
        &:not(:nth-of-type(6n)){
            margin-right: 28px;
        }
    }
    
    .un-open{
        margin: 0 auto;
        height: 50vh;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span{
            font-size:16px;
        }
        .iconfont{
            font-size:100px;
            color:${themeColor};
        }
    }
`;
export const LoveWrapper = styled.div`
    margin-top: 20px;
    min-height: 60vh;
    .un-open{
        height: 50vh;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span{
            font-size:16px;
        }
        .iconfont{
            font-size:80px;
            color:${themeColor};
        }
    }
`;
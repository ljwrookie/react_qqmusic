import styled from 'styled-components';
import { myTheme } from '@/common/constants';
const { normalColor, themeColor, grayFontColor, bodyColor, searchBarColor } = myTheme;
export const LikeNav = styled.div`
    color: ${normalColor};
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .un-login {
        height: 100%;
        display: flex;
        margin:0 auto;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform: translateY(-10%);
        span:last-child {
            font-size: 30px;
            font-weight:700;
            margin-top: -50px;
        }
        .iconfont {
            font-size: 200px;
            color: ${themeColor};
        }
    }
`;
export const LovePageWrapper = styled.div`
    /* width: 100%;
    height: 100%; */
    color: ${normalColor};
    .top-main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        .top-left {
           
            font-size: 32px;
            font-weight: 900;
            margin: 20px 0;
    
        }
        .top-right {
            cursor: pointer;
            font-size:14px;
            span{
                margin-left: 5px;
                &:nth-of-type(1){
                    font-size:16px;
                    color: ${grayFontColor}
                }
            }
            &:hover{
                color: ${themeColor};
                span{
                    color: ${themeColor}
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

    .button-option{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .batch_operation {
        display: flex;
        align-items: center;
        
        margin-top: 20px;
        margin-bottom:30px;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 110px;
            line-height: 30px;
            margin-right: 15px;
            border-radius: 15px;
            color: ${normalColor};
            background-color: ${searchBarColor};
            cursor: pointer;
            .iconfont {
                font-size: 16px;
            }
            &:hover {
                /* color: ${themeColor}; */
                background-color: ${themeColor}
            }
            span{
                margin-right:5px;
            }
        }
        .play_all {
            color: #fff;
            background-color: ${themeColor};
        }
    }
    .other_operation{
        display: flex;
        /* align-items: center; */
        div{
            cursor: pointer;
            padding-left:10px;
            padding-right:10px;
            padding-top:5px;
            padding-bottom:5px;
            margin-right:5px;
            &:hover{
                background-color: ${searchBarColor};
            }
            span{
                line-height:15px;
                margin-right:5px;
            }
        }
        
        .btn{
            padding-left:0;
            padding-right:0;
            margin-right:0px;
            
            color: ${grayFontColor};
            &:hover{
                background-color: transparent;
            }
            span{
                padding-top:2px;
                padding-bottom:2px;
                margin-right:0;
                display:inline-block;
                padding-left:5px;
                font-size:15px;
                padding-right:5px;
                &:hover{
                    background-color:${searchBarColor};
                    color: ${themeColor}
                }
            }

        }
        .btn.list{
            span{
                
                background-color:${searchBarColor};
            }
        }
    }
    .list_header {
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        color: ${grayFontColor};
        font-size: 14px;
        .singer {
            margin-left: 370px;
        }
        .album {
            margin-left: 175px;
        }
        .total_time {
            margin-left: 270px;
        }
    }
    
`
export const PlaylistWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 60vh;
    margin-top: 10px;
    flex-wrap: wrap;
    .item {
        text-decoration: none;
        &:not(:nth-of-type(6n)) {
            margin-right: 28px;
        }
    }
    .un-open {
        height: 50vh;
        display: flex;
        margin:0 auto;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span {
            font-size: 16px;
        }
        .iconfont {
            font-size: 100px;
            color: ${themeColor};
        }
    }
`;
export const LoveWrapper = styled.div`
    margin-top: 20px;
    min-height: 60vh;
    .un-open {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span {
            font-size: 16px;
        }
        .iconfont {
            font-size: 50px;
            color: ${themeColor};
        }
    }
`;
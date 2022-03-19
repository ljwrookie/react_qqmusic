import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const { themeColor, grayFontColor, normalColor} = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)
export const MvRankingWrapper = styled.ul`
    /* width:1100px; */
    margin-top: 30px;
    .rank-title{
        .rank-title-left{
            width:200px;
            height:200px;
            float: left;
            
            margin-right: 25px;
            /* background:url(${require('@/assets/image/mvRanking.png')})  */
            .image {
                width: 170px;
                border-radius: 10px;
            }
        }
        .rank-title-mask{

        }
        .rank-title-right{
            height:200px;
            /* display: inline-block; */
            .rank-name{
                font-size: 30px;
                color: ${normalColor};
                font-weight: 900;
            }
            .rank-time{
                margin-top:10px;
                font-size: 12px;
                color: ${grayFontColor};
                &:hover{
                    color: ${themeColor};
                }
            }
        }
    }
    .rank-content{
    
        margin-top: 30px;
        .rank-nav{
            span{
                position:relative;
                display: inline-block;
                margin-right: 54px;
                line-height:30px;
                font-size:14px;
                color: ${normalColor};
                border-radius:2px;
                &:hover{
                    color:${themeColor}
                }
            }
            .active{
                color: ${themeColor};
            }
            .active::after {
                    position:absolute;
                    content:'';
                    width:25px;
                    height:3px;
                    border-radius:2px;
                    top:100%;
                    left: 50%;
                    transform:translateX(-50%);
                    background-color:${themeColor};
                }
        }
        .rank-list{
            width:100%;
        }
    }
`;
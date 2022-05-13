import styled from 'styled-components';
import { myTheme } from '@/common/constants';

const { themeColor, logoUrl, hoverColor, sideFontColor, grayFontColor,normalColor } =
    myTheme;

export const AppSiderNav = styled.div`
    .logo {
        display: block;
        width: 105px;
        height: 30px;
        margin-top: 30px;
        margin-left: 45px;
        padding-top: 30px;
        padding-bottom: 30px;

        background: url(${logoUrl}) no-repeat;

        background-size: 90px 25px;
    }
    
`;

export const NavList = styled.div`
    margin-bottom: 40px;
    
    .list_title {
        margin-left: 50px;
        color: ${grayFontColor};
        font-size: 12px;
    }
    .list_item {
        display: block;
        width: 160px;
        height: 30px;
        margin-top: 8px;
        margin-left: 25px;
        padding-left: 15px;
        line-height: 30px;
        color: ${sideFontColor};
        font-size: 14px;
        border-radius: 5px;
        .iconfont {
            font-size: 18px;
            margin-right: 10px;
        }
        &:hover {
            background-color: ${hoverColor};
            text-decoration: none;
        }
        &:active {
            background-color: ${themeColor};
            color: #ffffff;
        }
    }
    .active {
        background-color: ${themeColor};
        color: #ffffff;
    }
    .playlist-title {
        line-height:14px;
        display: flex;
        justify-content: space-between;
        span{
            cursor: pointer;
            &:hover{
                color: ${normalColor};
            }
            a{
                text-decoration: none;
                &:hover{
                    color: ${normalColor};
                }
            }
        }
        .iconfont{
            
            font-size: 14px;
            font-weight: bold;
            color: ${grayFontColor};
            margin-right: 30px;
        }
        .title-right{
            span:first-child{
                margin-right: 10px;
            }
        }
        
    }
    &.playlist{
        .list_item{
            width: 140px;
        }
    }
`;

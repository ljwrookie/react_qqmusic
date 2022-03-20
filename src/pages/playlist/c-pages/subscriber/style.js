import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';

const {
    themeColor,
    sideColor,
} = getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;
export const SubScriberWrapper = styled.div`
overflow:hidden;
    .person-list{
        font-size:1px;
        /* font-weight:500; */
        margin-top:30px;
        display: flex;
        justify-content: space-between;
        flex-direction:row-gap;
        flex-wrap: wrap;
        .person{
            transition: all 0.3s;
            cursor:pointer;
            display:flex;
            justify-content:space-around;
            align-items:center;
            border-radius:30px;
            background-color:${sideColor};
            
            margin-bottom:20px;
            height:140px;
            img{
                margin-left:20px;
                border-radius:50%;
            }
            span{
                width:210px;
                overflow:hidden;
                display:inline-block;
                margin-left: 10px;
                margin-right:10px;
            }
            &:hover{
                transform: translateY(-10%);
                
            }
        }
    }
    .pagination {
        display: flex;
        justify-content: center;
        color: ${themeColor};
        .ant-pagination-item-active {
            border-color: ${themeColor};
            a {
                color: ${themeColor};
            }
        }
        .ant-pagination-item:hover {
            border-color: ${themeColor};
            a {
                color: ${themeColor};
            }
        }
        .ant-pagination-item-link:hover {
            border-color: ${themeColor};
        }
        .ant-pagination-options
            .ant-select.ant-pagination-options-size-changer.ant-select-single.ant-select-show-arrow:hover {
            border-color: ${themeColor};
        }
    }
`;

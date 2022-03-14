import styled from 'styled-components';

export const RecommendWrapper = styled.div `
    margin-top: 50px;
    position: relative;

    .content {
        margin: 20px 0 0px;
        display: flex;
        /* width:1100px; */
        align-items: center;
        .album {
            width: 100%;

            .page {
                display: flex !important;
                justify-content: space-between;

            }
        }
    }


  .all_name{
    width:200px;
    /* margin-top:5px; */
    /* margin:0; */
    line-height:20px;
    .artist{
      /* display:inline-block; */
      text-decoration: none;
      /* word-wrap:break-word; */
      margin-right: 6px;
      
      &:not(:last-of-type){
        &::after{
          content: '  /';
            color:#666666;
          
        }
        /* margin-right: 5px; */
      }
      &:hover{
        color: #00cd98 ;
      }
    }
  }
  .time{
    
    color:#6F6F6F;
    line-height:20px;
  }
`;
export const RecommendControl = styled.div `
    /* overflow:auto; */

    position: absolute;
    left: 0;
    right: 0;
    
    top: 40%;
    
    .btn {
        position: absolute;
        background-color: transparent;
        cursor: pointer;
        span {
            font-size: 40px;
            /* font-weight: 100 !important; */
            visibility: hidden;
        }
        &:hover span {
            color: #00cd98;
            visibility: visible;
            /* font-weight: 100 !important; */
        }
        &:nth-child(1) {
            /* left: 50px; */
            transform: translateX(-100%);
            span:nth-child(1) {
                display: inline-block;
                -moz-transform: scaleX(-1);
                -webkit-transform: scaleX(-1);
                -o-transform: scaleX(-1);
                transform: scaleX(-1);
            }
        }
        &:nth-child(2) {
            right:0px;
            transform: translateX(100%);
        }
    }
`;
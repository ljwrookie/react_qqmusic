import styled from "styled-components";

export const ThemeCoverWrapper = styled.div `
  /* display: flex !important;
  /* display: inline-block; */
  /* align-items: center;   */
  width: 180px;
  margin: 20px ${props => (props.right || 0)} 20px 0;
  transition: all 0.3s;
  .cover-top {
    position: relative;
    
    .image {
      width: 180px;
      height: 180px;
      border-radius: 20px;
    }
    
    .cover {
      border-radius: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .logo{
        border-radius:50%;
        width:20px;
        height:20px;
        position: absolute;
        left: 10px;
        top:5px;
        font-size: 16px;
        background-color:#fff;
        opacity:0.7;
        display: flex;
        justify-content: center; /*水平方向的居中*/
        align-items: center; /*垂直方向的居中*/
        .icon{
          opacity:0.5;
          
        }
          
      }
      
      
      .play {
        display: flex;
        justify-content: center; /*水平方向的居中*/
        align-items: center; /*垂直方向的居中*/
        width:60px;
        height:60px;
        border-radius:50%;
        position: absolute;
        top: 35%;
        left: 35%;
        font-size:30px;
        background-color: rgb(230,236,232);
        visibility:hidden;
        .icon{
          opacity:0.5;
        }
      }
      .info {
        /* display: flex; */
        justify-content: space-between;
        align-items: center;
        /* padding: 2px; */
        padding: 1px 5px;
        position: absolute;
        font-size:14px;
        bottom: 5px;
        /* left: 0; */
        right: 10px;
        color: #fff;
        /* height: 27px; */
        background-color: #3f3f3f;
        opacity: 0.6;
        border-radius:20px;
      
        .listen {
          margin-right: 5px;
          display: inline-block;
          font-size:18px;
          /* width: 14px;
          height: 11px; */
        }
      }
    
      &:hover{
          .info {
            visibility: hidden;
          }
          .play {
            visibility: visible;
            &:hover{
              background-color:#00cd98;
              /* .icon{
                opacity:0.1;
              } */
            }
          }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 8px;
  }
  &:hover{
    transform:translateY(-20px);
    .cover{
      background-color:#000;
      opacity:0.4;
      
    }
  }

`
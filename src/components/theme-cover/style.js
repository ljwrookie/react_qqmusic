import styled from "styled-components";

export const ThemeCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${props => (props.right || 0)} 20px 0;

  .cover-top {
    position: relative;

    &>img {
      width: 140px;
      height: 140px;
    }
    
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: #ccc;
        height: 27px;

        .listen {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

`
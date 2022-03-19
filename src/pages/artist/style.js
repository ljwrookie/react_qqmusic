import styledComponents from "styled-components";
export const MvPlayerWrapper = styledComponents.div`
    width: 100%;
    display:flex;
    .mv-title{
            font-size:14px;
            font-weight: 900;
            margin-bottom: 10px;
        }
    .mv-player-left{
        
        width: 66%;
        margin-right: 20px;
        video{
            width: 100%;
        }
    }
    .mv-player-right{
        width: 30%;
    }
`
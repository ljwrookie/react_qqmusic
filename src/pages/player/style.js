import styled from 'styled-components';

export const PlayerWrapper = styled.div`
    width: 100%;
    height: 500px;
    margin-top: 100px;
    .left {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 450px;
        height: 100%;
        .image img {
            border-radius: 30px;
        }
    }
    .right {
        position: relative;
        margin-left: 450px;
        height: 100%;
        /* overflow: auto; */
        .song_name {
            position: absolute;
            left: 50%;
            top: -70px;
            transform: translateX(-50%);
            font-size: 30px;
            font-weight: 900;
        }
        .song_info {
            display: flex;
            margin-left: 200px;
            width: 250px;
            justify-content: space-between;
        }
        /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
        .lyric {
            position: relative;
            height: 85%;
            overflow-x: auto;
            margin-top: 20px;
            ::-webkit-scrollbar {
                width: 6px;
                height: 6px;
                background-color: #f5f5f5;
            }

            /*定义滚动条轨道 内阴影+圆角*/
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
                border-radius: 3px;
            }

            /*定义滑块 内阴影+圆角*/
            ::-webkit-scrollbar-thumb {
                border-radius: 3px;
                -webkit-box-shadow: inset 0 0 6px #d4d4d4;
                background-color: #e1e1e1;
            }
            .lyric_content {
                position: absolute;
                top: 20px;
                width: 100%;
                left: 0;
                display: flex;
                flex-direction: column;
                /* justify-content: space-between;
                 */
                align-items: center;
                /* left: 50%;
                transform: translateX(-50%); */
                p {
                    line-height: 32px;
                    font-size: 18px;
                }
            }
        }
    }
`;

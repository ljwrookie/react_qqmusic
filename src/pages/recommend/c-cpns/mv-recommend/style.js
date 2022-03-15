import styled from 'styled-components';

export const RecommendWrapper = styled.div`
    margin-top: 50px;
    position: relative;

    .content {
        margin: 20px 0;
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
`;

import styled from "styled-components";

export const Container = styled.div`
    padding-top: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        padding: 0% 3% 0% 3%;
        
    }
`;


export const Text = styled.div`
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > h1 {
        font-size: 30px;
        color: #C60404;
        font-weight: 600;
    }

    > p {
        font-size: 20px;
        color: #C60404;
    }

    > h2 {
        font-size: 18px;
        color: #FF973F;
        font-weight: 400;
    }

    > h3 {
        font-size: 20px;
        color: #FF973F;
        font-weight: 600;
    }
`;
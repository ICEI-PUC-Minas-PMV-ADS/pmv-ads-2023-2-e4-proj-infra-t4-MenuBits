import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 21%;
    height: 30rem;
    background-color: #FFD07E;
    border-radius: 25px;
    padding-bottom: 1rem;
    padding-top: 1rem;
    > svg {
        justify-self: end;
        font-size: 3.5rem;
        position: absolute;    
        padding-bottom: 1.5rem;
    }

`;

export const Content = styled.div`
    width: 90%;
    height: 100%;
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    > button {
        width: 80%;
    }

    > svg {
        font-size: 4.5rem;
        :hover {
            cursor: pointer;
        }
    }
`;

export const ImageArea = styled.div`
    width: 100%;
    height: 35%;
    background-color: #FFF5DC;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > svg {
        font-size: 8rem;
        align-self: center;
    }
`;

export const Title = styled.h1`
    font-weight: 700;
    color: #2E2E2E;
    font-size: 1.5rem;
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 1.2rem;
    color: #616161;
    padding-bottom: 2rem;
    height: 10%;
    overflow: hidden;
`
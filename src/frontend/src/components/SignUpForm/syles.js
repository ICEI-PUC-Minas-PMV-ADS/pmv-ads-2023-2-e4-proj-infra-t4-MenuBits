import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 21%;
    height: 30rem;
    background-color: #FFECCC;
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
`;

export const ImageArea = styled.div`
    width: 100%;
    height: 35%;
    background-color: #FFFBF2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > svg {
        font-size: 8rem;
        align-self: center;
    }
`;
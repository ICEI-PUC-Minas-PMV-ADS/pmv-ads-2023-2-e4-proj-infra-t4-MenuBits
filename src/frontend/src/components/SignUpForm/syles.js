import styled from "styled-components";


export const Content = styled.div`
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
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
import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding-right: 10px;
    color: white;

    :hover {
        color: #ffc700;
        transition: 0.35s;
    }

    > svg {
        font-size: 3rem;
        padding-left: 10px;
        padding-right: 5px;
    }

`;

export const Text = styled.div`
    font-weight: 500;
    font-size: 1.1rem;
`;
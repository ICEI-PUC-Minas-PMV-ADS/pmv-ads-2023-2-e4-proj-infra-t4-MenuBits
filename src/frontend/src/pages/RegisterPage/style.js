import styled from "styled-components"

export const InputTitle = styled.div`
    font-weight: 500;
    display: flex;
    > h3 {
        padding-left: 0.3rem;
    }
`;

export const InputSelectionArea = styled.div`

`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;

`;

export const AddButtonsArea = styled.div`
    display: flex;
    > button {
        margin-right: 1rem;
    }
`;

export const InputArea = styled.div`
    display: flex;

    > button {
        width: 200px;
        margin-left: 1rem;
        font-size: 0.9rem
    }
`;

export const ItemsArea = styled.div`
    padding-top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
`;
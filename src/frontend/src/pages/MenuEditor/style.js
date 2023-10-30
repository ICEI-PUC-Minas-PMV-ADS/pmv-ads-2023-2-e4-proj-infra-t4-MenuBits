import styled from "styled-components"

export const InputTitle = styled.div`
    font-weight: 500;
    display: flex;
    > h3 {
        padding-left: 0.3rem;
    }
`;

export const InputSelectionArea = styled.div`
    width: 100%;
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
        width: 300px;
        margin-left: 1rem;
        font-size: 0.9rem
    }
`;

export const ItemsArea = styled.div`
    padding-top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
    flex-wrap: wrap;
    > div {
        margin-bottom: 2.2rem;
    }
    
`;

export const ModalMenu = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    justify-content: center;

`

export const ModalContent = styled.form`
    display: flex;
    width: 30%; 
    height: 100px;
    background-color: #930000;
    align-self: center;
    justify-self: center;

    border-radius: 10px;
    align-items: center;

    > img {
        height: 50%;
        border-radius: 10px;
        margin-left: 20px;
        margin-right: 10px;
    }

    > button {
        height: 100%;
        margin-right: 20px;
        margin-left: 10px;
        > svg {
            font-size: 3rem;

        }
    }
`

export const ModalItemContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%; 
    height: 600px;
    background-color: #510000;
    align-self: center;
    justify-self: center;
    font-weight: 500;
    border-radius: 10px;

    padding: 20px;
`

export const ModalMainContent = styled.div`
    width: 100%;
`;

export const ModalTopside = styled.div`
    width: 100%;
    display: flex;
    height: 35%;

    > img {
        width: 40%;
        height: 90%;
        border-radius: 10px;
        margin-right: 15px;
    }

    > div {
        width: 100%;

    }
`;


export const ModalVerticalLine = styled.div`
    margin-bottom: 20px;
    width: 100%;
    
    > input {
        height: 2rem;
    }
    
    > h2 {
        color: white;
        padding-bottom: 10px;
    }
`;


export const ModalHorizontalContent = styled.div`
    display: flex;
`;

export const ModalVerticalLineCheckbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;

    > h2 {
        padding-bottom: 10px;
        color: white;
    }
    
`;

export const ModalDescriptionArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    > input {
        height: 100px;
    }

    > h2 {
        color: white;
        padding-bottom: 10px;

    }
`;

export const ButtonArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    > button {
        width: 40%;
    }
`


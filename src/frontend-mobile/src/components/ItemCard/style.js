import styled from "styled-components/native"

export const Container = styled.View`
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
        font-size: 7.5rem;
        position: absolute;    
        padding-bottom: 4.5rem;
        padding-right: 3rem;

        :hover {
            cursor: pointer;
        }
    }

`;

export const Content = styled.View`
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

export const ImageArea = styled.View`
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

    > img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
`;

export const Title = styled.Text`
    font-weight: 700;
    color: #2E2E2E;
    font-size: 1.5rem;
`

export const Description = styled.Text`
    font-weight: 400;
    font-size: 1rem;
    color: #616161;
    padding-bottom: 2rem;
    height: 25%;
    overflow: hidden;
`

export const Price = styled.Text`
    font-weight: 600;
    color: #2E2E2E;
    font-size: 2.0rem;
`
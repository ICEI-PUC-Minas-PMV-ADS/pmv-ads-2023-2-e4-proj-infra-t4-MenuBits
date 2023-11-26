import styled from "styled-components/native"

export const Container = styled.View`
    display: flex;
    align-self: center;
    width: 100%;
    height: 300px;
    background-color: #FFD07E;
    border-radius: 25px;
    padding-bottom: 1px;
    padding-top: 1px;
    border:  1px solid #930000;
`;

export const Button = styled.Pressable`
    width: 100%;
    align-items: center;
`

export const Content = styled.View`
    width: 90%;
    height: 100%;
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

`;

export const Title = styled.Text`
    font-family: Sora_700Bold;
    color: #2E2E2E;
    font-size: 25px;
    padding-top: 10px;
`

export const Description = styled.Text`
    font-family: Sora_700Bold;
    font-size: 18px;
    text-align: center;
    color: #616161;
    padding-bottom: 5px;
    overflow: scroll;
    padding-bottom: 10px;
`
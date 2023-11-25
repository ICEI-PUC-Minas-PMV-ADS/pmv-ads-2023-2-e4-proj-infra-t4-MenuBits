import styled from "styled-components/native"

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    height: 500px;
    background-color: #FFECCC;
    border-radius: 25px;
    padding-bottom: 15px;
    padding-top: 15px;

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
`;

export const ImageArea = styled.View`
    width: 100%;
    height: 45%;
    background-color: #FFFBF2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: Sora_700Bold;
    color: #2E2E2E;
    font-size: 22px;
`

export const Description = styled.Text`
    font-family: Sora_400Regular;
    font-size: 20px;
    color: #616161;
    padding-bottom: 10px;
    text-align: center;
    height: 25%;
    overflow: hidden;
`

export const Price = styled.Text`
    font-size: Sora_600SemiBold;
    color: #2E2E2E;
    font-size: 20px;
`

export const Text = styled.Text`
    font-size: Sora_600SemiBold;
    color: #2E2E2E;
    font-size: 18px;
`
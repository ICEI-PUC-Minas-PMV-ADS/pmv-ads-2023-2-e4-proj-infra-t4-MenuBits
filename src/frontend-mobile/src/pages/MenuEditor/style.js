import styled from "styled-components/native"

export const InputTitle = styled.View`
    align-items: center;
    padding-top: 15%;
    display: flex;
    flex-direction: row;
    align-self: center;
    padding-bottom: 10px;
`;

export const TextTitle = styled.Text`
    font-family: Sora_600SemiBold;
    font-size: 18px;
    padding-left: 5px;
`

export const TextDefault = styled.Text`
    font-family: Sora_400Regular;
    color: white;
    text-align: center;
`


export const InputSelectionArea = styled.View`
    width: 100%;
`;

export const Header = styled.View`
    display: flex;
    justify-content: space-between;

`;

export const AddButtonsArea = styled.View`
    display: flex;

`;

export const InputArea = styled.View`
    display: flex;
`;

export const ItemsArea = styled.View`
    padding-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
`;

export const ModalMenu = styled.View`
    display: flex;
    margin-top: 15%;
    margin-bottom: 100%;
    width: 100%;
    height: 50vh;
    align-items: center;
    justify-content: center;
    
`

export const ModalContent = styled.View`
    display: flex;
    width: 100%; 
    height: 45%;
    background-color: #510000;
    align-self: center;
    justify-self: center;
    border-radius: 10px;
    align-items: center;
    padding: 20px;
`

export const ModalItemContent = styled.View`
    display: flex;
    width: 100%; 
    height: 100vh;
    background-color: #510000;
    font-family: Sora_400Regular;
    border-radius: 10px;
    padding: 20px;
`

export const TextInput = styled.Text`
    font-family: Sora_600SemiBold;
    font-size: 16px;
    color: white;
    padding-bottom: 5px;
    text-align: center;
`;

export const ModalMainContent = styled.View`
    width: 100%;
`;

export const ModalVerticalLine = styled.View`
    margin-bottom: 20px;
    width: 100%;

`;

export const ButtonArea = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`

export const MinorPressable = styled.Pressable`
    background-color: #C60404;
    padding: 15px;
    width: 40%;
    border-radius: 10px;
    align-self: center;
    margin-top: 25px;
    margin-bottom: 30px;
`

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 11%;
`;

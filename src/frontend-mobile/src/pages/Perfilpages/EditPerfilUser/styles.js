import styled from "styled-components/native";

export const Container = styled.View`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Clear = styled.View`

`;

export const Text = styled.Text`
    font-size: 14px;
    color: black;
`;

export const PerfilCard = styled.View`
    width: 80%;
    height: 280px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 3.5px solid #930000;
    border-radius: 15px;
`;

export const HeaderCard = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 102%;
    padding: 7%;
    font-size: 32px;
    color: #ffffff;
    background-color: #930000;
    border-top-right-radius: 11px;
    border-top-left-radius: 11px;
`;

export const Header = styled.Text`
    font-size: 24px;
    color: #ffffff;
    font-weight: 800;
`;

export const Subheader = styled.Text`
    color: #930000;
    font-size: 12px;
    font-weight: 500;
`;

export const ContentCard = styled.View`
    width: 100%;
    display: block;
    margin: 5%;
`;


export const Info = styled.View`
    padding: 3% 0% 3% 10%;
`;

export const Email = styled.TextInput`
    font-size: 16px;
    font-weight: 500;
`;

export const Name = styled.TextInput`
    font-size: 16px;
    font-weight: 500;
`;

export const Editar = styled.Pressable`
    color: #ffffff;
    background-color:#C75B00;
    font-size: 18px;
    border-radius: 10px;
    padding: 12px 30px 12px 30px;
    margin-bottom: 30px;
`;

export const Textedit = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
`;
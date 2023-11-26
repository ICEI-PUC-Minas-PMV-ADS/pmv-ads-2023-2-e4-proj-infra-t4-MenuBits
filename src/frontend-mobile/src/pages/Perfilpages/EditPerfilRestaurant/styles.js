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

//  export const Text = styled.Pressable`
    
//  `;

export const PerfilCard = styled.View`
    width: 80%;
    height: 680px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border: 3.5px solid #C75B00;
    border-radius: 15px;
`;

export const HeaderCard = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 102%;
    margin-top: -3px;
    padding: 5%;
    background-color: #C75B00;
    border-top-right-radius: 11px;
    border-top-left-radius: 11px;
`;

export const Header = styled.Text`
    font-size: 24px;
    color: #ffffff;
    font-weight: 800;
`;

export const ContentCard = styled.View`
    width: 100%;
    display: block;
    margin: 5%;
`;

export const Info = styled.View`
    padding: 3% 0% 3% 10%;
`;

export const Subheader = styled.Text`
    color: #930000;
    font-size: 12px;
    font-weight: 500;
`;

export const Subtext= styled.TextInput`
    padding-top: 2%;
    font-size: 16px;
    font-weight: 500;
`;

export const Email = styled.Text`
    padding-top: 2%;
`;

export const Name = styled.Text`
    padding-top: 2%;
`;

export const Phone = styled.Text`
    padding-top: 2%;
`;

export const City = styled.Text`
    padding-top: 2%;
`;

export const Uf = styled.Text`
    padding-top: 2%;
`;

export const Address = styled.Text`
    padding-top: 2%;
`;

export const Photo = styled.View`
    padding-top: 2%;
`;

export const Description = styled.Text`
    font-size: 16px;
    padding-top: 2%;
`;

export const Editar = styled.Pressable`
    background-color:#930000;
    border-radius: 10px;
    padding: 10px 30px 12px 30px;
    margin-bottom: 30px;
`;

export const Textedit = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
`;

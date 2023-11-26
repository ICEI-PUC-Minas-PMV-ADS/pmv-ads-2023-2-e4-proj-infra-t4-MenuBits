import styled from "styled-components";

export const Container = styled.ImageBackground`
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  gap: 40px;
`;

export const FormContainer = styled.ImageBackground`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  margin: 0 20px;
  padding: 20px;
`;
export const InnerImage = styled.Image`
  width: 100%;
  height: 100%;
  margin-right: 300px;
  /* Outros estilos conforme necessário */
`;

export const Content = styled.View`
  padding-left: 5%;
  padding-right: 5%;
`;

export const Input = styled.TextInput`
  background-color: #f0f0f0;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #f39d54;
  text-align: center;
  font-size: 16px;
`;
export const Button = styled.Pressable`
  margin: 30px 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 15px;
  border-radius: 10px;
  border: none;
  background-color: #f39d54;
`;

export const TextMessage = styled.Text`
  margin: 15px 0;
  color: #c60404;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
export const Title = styled.Text`
  color: #c60404;
  margin-bottom: 10px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  font-size: 20px;
  font-weight: 800;
  text-align: center;
`;

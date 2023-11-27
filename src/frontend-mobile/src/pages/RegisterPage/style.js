import styled from "styled-components/native";

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
`;

export const TextDefault = styled.Text`
  font-family: Sora_400Regular;
  color: white;
  text-align: center;
`;

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
`;

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
`;

export const NavbarContent = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  background-color: #510000;
  align-self: center;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  padding: 20px;
`;

export const ModalItemContent = styled.View`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #510000;
  font-family: Sora_400Regular;
  border-radius: 10px;
  padding: 20px;
`;

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
`;

export const MinorPressable = styled.Pressable`
  background-color: #c60404;
  padding: 15px;
  width: 40%;
  border-radius: 10px;
  align-self: center;
  margin-top: 25px;
  margin-bottom: 30px;
`;

export const ButtonLogin = styled.Pressable`
  background-color: #c60404;
  padding: 12px;
  border-radius: 6px;
  font-weight: 700;
  color: white;
  margin-top: 12px;
`;

export const ButtonCreateAccount = styled.Pressable`
  padding: 12px;
  border-radius: 6px;
  font-weight: 700;
  color: orange;
  margin-top: 6px;
`;

export const Container = styled.View`
  height: auto;
  width: 100%;
  background-color: #f0f0f0;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 10%;
`;
export const ModalContainer = styled.View`
  width: 100%;
  border: 4px solid rgba(147, 0, 0, 1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const ModalContainerTitle = styled.View`
  background-color: rgba(147, 0, 0, 1);
  color: white;
  margin-bottom: 12px;
  width: 100%;
`;
export const ModalTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-family: Sora_600SemiBold;
  padding: 10px;
  text-align: center;
`;
export const LoginText = styled.Text`
  color: orange;
  font-family: Sora_600SemiBold;
  padding: 4px;
  text-align: center;
`;

export const LoginTextBG = styled.Pressable`
  color: white;
  font-family: Sora_600SemiBold;
  padding: 6px;
  text-align: center;
  background-color: orange;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const Input = styled.TextInput`
  background-color: #f0f0f0;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #f39d54;
  text-align: center;
  font-size: 16px;
  width: 60%;
`;

export const ButtonModal = styled.Pressable`
  color: white;
  font-family: Sora_600SemiBold;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: red;
  padding: 15px;
  width: 50%;
  text-align: center;
  border-radius: 10px;
`;

export const ModalRestaurant = styled.View`
  width: 100%;
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const ModalRestaurantTitle = styled.Text`
  color: rgba(147, 0, 0, 1);
  font-weight: 600;
`;

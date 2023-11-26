import styled from "styled-components";

export const Container = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #ffffff; /* Cor do texto */
  font-size: 50px;
  font-weight: bold;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OrdersContainer = styled.View`
  padding: 10px;
`;
export const OrderContent = styled.View`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;
export const Header = styled.View`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  padding: 20px;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  padding: 5px;
  justify-content: center;
  flex: 1;
  text-align: center;
  font-weight: bold;
`;

export const EmptyCartText = styled.Text`
  font-size: 20px;
  margin: 20px;
  text-align: center;
`;

export const CartItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #888888;
`;

export const ItemImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ItemName = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

export const ItemPrice = styled.Text`
  font-size: 18px;
`;

export const TotalContainer = styled.View`
  padding: 10px;
  background-color: #c60404; /* Cor de fundo */
  flex-direction: row;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TotalText = styled.Text`
  color: #ffffff; /* Cor do texto */
  font-size: 20px;
  font-weight: bold;
`;

export const BackToMenuButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #c60404; /* Cor de fundo */
  padding: 10px;
  margin: 20px 40px;
`;

export const BackToMenuText = styled.Text`
  color: #ffffff; /* Cor do texto */
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

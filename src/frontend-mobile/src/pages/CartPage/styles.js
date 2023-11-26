export const Container = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #ffffff; /* Cor do texto */
  font-size: 50px;
  font-weight: bold;
`;

export const OrdersContainer = styled.View`
  padding: 10px;
`;

export const Header = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #888888;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const EmptyCartText = styled.Text`
  font-size: 20px;
  margin-top: 10px;
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
`;

export const ItemPrice = styled.Text`
  font-size: 18px;
`;

export const TotalContainer = styled.View`
  padding: 10px;
  background-color: #ff0000; /* Cor de fundo */
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalText = styled.Text`
  color: #ffffff; /* Cor do texto */
  font-size: 20px;
  font-weight: bold;
`;

export const BackToMenuButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #ff0000; /* Cor de fundo */
  padding: 10px;
  margin-top: 20px;
`;

export const BackToMenuText = styled.Text`
  color: #ffffff; /* Cor do texto */
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

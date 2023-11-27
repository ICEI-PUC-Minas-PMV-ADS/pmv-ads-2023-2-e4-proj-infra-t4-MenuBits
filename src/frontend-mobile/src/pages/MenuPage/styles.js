import styled from "styled-components";

export const Container = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Title = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  padding: 20px;
`;

export const Text = styled.Text`
  font-size: 24px;
  padding: 5px;
  justify-content: center;
  flex: 1;
  text-align: center;
`;

export const OrderText = styled.Text`
  font-size: 18px;
  margin-top: 5px;
  margin-left: 10px;
  font-weight: 700;
  color: #c60404;
`;

export const OrderContainer = styled.Pressable`
  margin: 60px 250px 0 15px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 2px solid #f39d54;
  border-radius: 7px;
  background-color: #ffff;
`;
export const ContainerCard = styled.Text`
  font-weight: 700;
  display: flex;
  flex: 1;
  align-items: center; /* Ajuste conforme necessário */
  justify-content: center; /* Ajuste conforme necessário */
`;

export const RestaurantButton = styled.View`
  display: flex;
  color: white;
  margin-right: 10px;
  align-items: end;
  justify-content: end;
  flex: 1;
  margin-top: 200px;
  align-items: center;
`;
export const Button = styled.Pressable`
  margin-left: 10px;
  font-weight: 600;
  background-color: #c60404;
  color: white;
  padding: 10px;
  border-radius: 7px;
`;
export const ImageContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const RestaurantText = styled.Text`
  font-weight: 700;
`;
export const ButtonRestaurant = styled.Pressable`
  background-color: #f39d54;
  color: white;
  padding: 10px;
  border-radius: 7px;
  margin: 10px 10%;
`;

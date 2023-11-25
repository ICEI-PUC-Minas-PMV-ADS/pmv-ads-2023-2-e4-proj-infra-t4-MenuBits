import styled from "styled-components";

export const Container = styled.View`
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Banner = styled.View`
  background-image: url("src/assets/pizzaNostra.png");
  background-position: center;

  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TextBanner = styled.Text`
  color: white;
  font-size: 40px;
  justify-content: center;
  align-items: center;
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

export const ContainerCard = styled.Text`
  font-weight: 700;
  display: flex;
  flex-direction: row;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 40px;
  margin: 20px;
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

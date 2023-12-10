import styled from "styled-components";

export const Container = styled.div`
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Banner = styled.div`
  width: 100%; /* Defina largura e altura adequadas */
  height: 400px;
  background-image: url("https://images.unsplash.com/photo-1464093515883-ec948246accb?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  grid-template-rows: 1fr 1fr 1fr;
`;
export const TextBanner = styled.h1`
  color: black;
  font-size: 40px;
  text-shadow: 3px 2px 5px rgba(255, 255, 255, 0.9); /* Adiciona uma sombra para criar o efeito de relevo */
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  padding: 20px;
`;

export const Text = styled.div`
  font-size: 24px;
  padding: 5px;
  justify-content: center;
  flex: 1;
  text-align: center;
`;

export const RestaurantButton = styled.div`
  display: flex;
  color: white;
  margin-right: 10px;
  align-items: end;
  justify-content: end;
  flex: 1;
  margin-top: 200px;
  align-items: center;
`;
export const Button = styled.button`
  margin-left: 10px;
  font-weight: 600;
  background-color: #c60404;
  color: white;
  padding: 10px;
  border-radius: 7px;
`;
export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const ContainerCard = styled.text`
  font-weight: 700;
  display: flex;
  flex-direction: row;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 40px;
  margin: 20px;
`;
export const RestaurantText = styled.text`
  font-weight: 700;
`;
export const ButtonRestaurant = styled.button`
  background-color: #f39d54;
  color: white;
  padding: 10px;
  border-radius: 7px;
  margin: 10px 10%;
`;

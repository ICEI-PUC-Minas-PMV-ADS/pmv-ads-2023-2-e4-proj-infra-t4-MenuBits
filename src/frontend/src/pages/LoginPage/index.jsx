import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormClient from '../../components/LoginFormClient';
import LoginFormRestaurant from '../../components/LoginFormRestaurant';

import {
  ButtonClient,
  ButtonRestaurant,
  ContainerClient,
  ContainerRestaurant,
  RestaurantText,
  SignText,
  Login,
  LoginClient,
  LoginRestaurant,
  Text,
} from "./styles";
import LoginFormRestaurant from '../../components/LoginFormRestaurant';

export default function LoginPage({ profile }) {
  const navigate = useNavigate();

  const handleClickClient = useCallback(() => {
    navigate("/register-client");
  }, []);
  const handleClickRestaurant = useCallback(() => {
    navigate("/register-restaurant");
  }, []);
  return (
    <>
      {profile === "client" ? (
        <ContainerClient>
          <LoginRestaurant>
            <Text>
              Gostaria de <SignText>ENTRAR</SignText>
            </Text>
            <Text>
              como
              <RestaurantText> RESTAURANTE</RestaurantText>?
            </Text>
            <ButtonRestaurant onClick={handleClickRestaurant}>
              Clique Aqui
            </ButtonRestaurant>
          </LoginRestaurant>
          <Login>
            <LoginFormClient apiUrl={"/api/user/auth"} />
          </Login>
          <LoginRestaurant />
        </ContainerClient>
      ) : (
        <ContainerRestaurant>
          <LoginClient>
            <Text>
              Gostaria de <SignText>ENTRAR</SignText>
            </Text>
            <Text>
              como
              <RestaurantText> CLIENTE</RestaurantText>?
            </Text>
            <ButtonClient onClick={handleClickClient}>Clique Aqui</ButtonClient>
          </LoginClient>
          <SignUp>
            <LoginFormRestaurant apiUrl={"/api/restaurant/auth"} />
          </SignUp>
          <LoginClient />
        </ContainerRestaurant>
      )}
    </>
  );
}

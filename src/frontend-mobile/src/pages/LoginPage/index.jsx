// import { Container } from "./style";
import { Navigation } from "react-native";
import React, { useState, useNavigation } from "react";
import { Text, View, TextInput, Button } from "react-native";
import {
  InputTitle,
  Header,
  TextTitle,
  InputSelectionArea,
  InputArea,
  AddButtonsArea,
  ItemsArea,
  ModalMenu,
  ModalContent,
  ModalItemContent,
  ModalMainContent,
  ModalVerticalLine,
  ButtonArea,
  TextDefault,
  NavbarContent,
  MinorPressable,
  Container,
  ModalContainer,
  ModalContainerTitle,
  ModalTitle,
  LoginText,
  Input,
  ModalButton,
  ButtonModal,
  LoginTextBG,
  ModalRestaurant,
  ModalRestaurantTitle,
  ButtonLogin,
  ButtonCreateAccount,
} from "./style";
import axios from "axios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigation = useNavigation();
  const handleLogin = () => {
    // navigation.navigate("HomePage");
    // navigation.navigate("HomePage");
  };

  return (
    <View>
      <Container>
        <ModalContainer>
          <ModalContainerTitle>
            <ModalTitle>Login</ModalTitle>
          </ModalContainerTitle>
          <LoginText>NOME DE USUARIO</LoginText>
          <Input
            placeholder="Nome de usuario"
            type="text"
            id="username"
            value={username}
            onChangeText={(event) => setUsername(event)}
          />
          <LoginText>SENHA</LoginText>
          <Input
            placeholder="Senha"
            type="text"
            id="password"
            value={password}
            onChangeText={(event) => setPassword(event)}
          />
          <ButtonLogin title="Entrar" onPress={() => handleLogin()}>
            <Text
              style={{
                color: "white",
              }}
            >
              ENTRAR
            </Text>
          </ButtonLogin>

          <ButtonCreateAccount>
            <Text
              style={{
                color: "orange",
              }}
            >
              CRIAR CONTA
            </Text>
          </ButtonCreateAccount>
        </ModalContainer>
        <ModalRestaurant>
          <ModalRestaurantTitle>
            Gostaria de ENTRAR como RESTAURANTE?
          </ModalRestaurantTitle>
          <LoginTextBG>Clique Aqui</LoginTextBG>
        </ModalRestaurant>
      </Container>
    </View>
  );
}
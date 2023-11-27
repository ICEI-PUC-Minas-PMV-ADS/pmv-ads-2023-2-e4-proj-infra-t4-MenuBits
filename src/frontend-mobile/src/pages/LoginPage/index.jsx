import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  Container,
  ModalContainer,
  ModalContainerTitle,
  ModalTitle,
  LoginText,
  Input,
  ButtonLogin,
  ButtonCreateAccount,
  ModalRestaurant,
  ModalRestaurantTitle,
  LoginTextBG,
} from "./style";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    axios
      .get(`http://localhost:8080/api/users/email/${email}`)
      .then((response) => {
        const user = response.data;

        if (user && user.password === password) {
          navigation.navigate("HomePage");
        } else {
          setError("FALHA NO LOGIN. Verifique suas credenciais.");
        }
      })
      .catch((error) => {
        console.error("Erro ao realizar login:", error);
        setError("Erro ao realizar login. Tente novamente.");
      });
  };

  const handleRegister = () => {
    navigation.navigate("RegisterPage");
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
            placeholder="Email"
            type="text"
            id="email"
            value={email}
            onChangeText={(event) => setEmail(event)}
          />
          <LoginText>SENHA</LoginText>
          <Input
            placeholder="Senha"
            type="text"
            id="password"
            value={password}
            onChangeText={(event) => setPassword(event)}
          />
          <ButtonLogin title="Entrar" onPress={handleLogin}>
            <Text style={{ color: "white" }}>ENTRAR</Text>
          </ButtonLogin>

          <ButtonCreateAccount onPress={handleRegister}>
            <Text style={{ color: "orange" }}>CRIAR CONTA</Text>
          </ButtonCreateAccount>

          {error !== "" && <Text style={{ color: "red" }}>{error}</Text>}
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

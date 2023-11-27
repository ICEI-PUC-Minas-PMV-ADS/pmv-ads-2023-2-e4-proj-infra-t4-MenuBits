import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { saveUserData, getUserData } from "../../hooks/save-user";

export default function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    navigation.navigate("RegisterPage");
  };

  const handleLogin = useCallback(async () => {
    const body = {
      email,
      password,
    };
    try {
      if (email === "" || password === "") {
        setMessage("Preencha os dados de login");
      } else {
        const response = await axios.post(
          `https://menu-bits-backend.onrender.com/api/user/auth`,
          body
        );
        const userData = response.data;
        if (
          (userData.error == "Password invalid") |
          (userData.error == "User not found")
        ) {
          setMessage("Credenciais incorretas");
        } else {
          saveUserData(userData.authToken, {
            nome: "Nome de usuario",
            id: userData.user.id,
          });
          navigation.navigate("HomePage");
        }
      }
    } catch (error) {
      setMessage("Falha no login");
    }
  }, [email, password]);



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
          {<Text>{message}</Text>}
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

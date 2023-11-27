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
import { saveUserData } from "../../hooks/save-user";

export default function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = useCallback(async () => {
    const body = {
      email,
      password,
    };

    try {
      console.log("TESTE 1");
      if (email === "" || password === "") {
        setMessage("Preencha os dados de login");
      } else {
        console.log("TESTE 1.2");
        const response = await axios.post(
          `https://menu-bits-backend.onrender.com/api/user/auth`,
          body
        );
        console.log("TESTE 1.3");
        console.log("TESTE 1.4");
        const userData = response.data;

        console.log(userData);
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
          console.log(userData);
          console.log(saveUserData);
          console.log("REDIRECT");
          navigation.navigate("HomePage");
        }
      }
      // }
    } catch (error) {
      console.error(error);
      setMessage("Falha no login");
    }
  }, [email, password]);

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTcwMTAyMjYyOCwiZXhwIjoxNzAxMTA5MDI4fQ.u4bPPIZHBcFcxjMaTJM83mYPQZBqwWrnHNSfPhIZG_0",
    },
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

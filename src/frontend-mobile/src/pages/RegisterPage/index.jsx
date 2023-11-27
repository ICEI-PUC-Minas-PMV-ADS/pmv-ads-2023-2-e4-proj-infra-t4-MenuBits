import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
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

export default function RegisterPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const validateFields = () => {
    if (email.length === 0 || username.length === 0 || password !== confirmPass) {
      alert("DADOS INCORRETOS");
      return false;
    }
    return true;
  };

  const registerUser = () => {
    if (validateFields()) {
      axios
        .post("https://menu-bits-backend.onrender.com/api/users", {
          name: username,
          email: email,
          password: password,
        })
        .then((response) => {
          // Lógica adicional após o registro, se necessário
          navigation.navigate("LoginPage");
        })
        .catch((error) => {
          console.error("Erro ao cadastrar usuário:", error);
          // Lógica de tratamento de erro, se necessário
        });
    }
  };

  return (
    <View>
      <Container>
        <ModalContainer>
          <ModalContainerTitle>
            <ModalTitle>Registrar</ModalTitle>
          </ModalContainerTitle>
          <LoginText>E-MAIL</LoginText>
          <Input
            placeholder="Email"
            type="text"
            id="email"
            value={email}
            onChangeText={(event) => setEmail(event)}
          />
          <LoginText>NOME</LoginText>
          <Input
            placeholder="Nome"
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
          <LoginText>REPETIR SENHA</LoginText>
          <Input
            placeholder="Repetir senha"
            type="text"
            id="password"
            value={confirmPass}
            onChangeText={(event) => setConfirmPass(event)}
          />
          <ButtonLogin title="Cadastrar" onPress={registerUser}>
            <Text style={{ color: "white" }}>CADASTRAR</Text>
          </ButtonLogin>

          <ButtonCreateAccount onPress={() => navigation.navigate("LoginPage")}>
            <Text style={{ color: "orange" }}>Já possui conta? ENTRAR</Text>
          </ButtonCreateAccount>
        </ModalContainer>
        <ModalRestaurant>
          <ModalRestaurantTitle>
            Gostaria de ENTRAR como RESTAURANTE?
          </ModalRestaurantTitle>
          <ButtonLogin title="Cadastrar" onPress={() => navigation.navigate("RestaurantRegister")}>
            <Text style={{ color: "white" }}>ENTRAR COMO RESTAURANTE</Text>
          </ButtonLogin>

          {/* onPress={() => navigation.navigate("RestaurantRegister")} */}
        </ModalRestaurant>
      </Container>
    </View>
  );
}

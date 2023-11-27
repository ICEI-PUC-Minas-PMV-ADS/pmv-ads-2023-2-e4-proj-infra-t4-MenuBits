import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
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

export default function RestaurantRegister() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const validateFields = () => {
    if (email.length === 0 || name.length === 0) {
      alert("DADOS INCORRETOS");
      return false;
    }
    return true;
  };

  const registerRestaurant = () => {
    if (validateFields()) {
      axios
        .post("https://menu-bits-backend.onrender.com/api/restaurante", {
          name: name,
          email: email,
          password: password,
          phone: phone,
          imageUrl: imageUrl,
          city: city,
          UF: "",
          location: location,
          description: description,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          // Lógica adicional após o registro, se necessário
          navigation.navigate("LoginPage");
        })
        .catch((error) => {
          console.error("Erro ao cadastrar restaurante:", error);
          // Lógica de tratamento de erro, se necessário
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
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
                value={name}
                onChangeText={(event) => setName(event)}
              />
              <LoginText>SENHA</LoginText>
              <Input
                placeholder="Senha"
                type="text"
                id="password"
                value={password}
                onChangeText={(event) => setPassword(event)}
              />
              <LoginText>Telefone</LoginText>
              <Input
                placeholder="Telefone"
                type="text"
                id="phone"
                value={phone}
                onChangeText={(event) => setPhone(event)}
              />
              <LoginText>CIDADE</LoginText>
              <Input
                placeholder="Cidade"
                type="text"
                id="city"
                value={city}
                onChangeText={(event) => setCity(event)}
              />
              <LoginText>LOCALIZAÇÃO</LoginText>
              <Input
                placeholder="Localização"
                type="text"
                id="location"
                value={location}
                onChangeText={(event) => setLocation(event)}
              />
              <LoginText>DESCRIÇÃO</LoginText>
              <Input
                placeholder="Descrição"
                type="text"
                id="description"
                value={description}
                onChangeText={(event) => setDescription(event)}
              />
              <ButtonLogin title="Cadastrar" onPress={registerRestaurant}>
                <Text style={{ color: "white" }}>CADASTRAR</Text>
              </ButtonLogin>

              <ButtonCreateAccount
                onPress={() => navigation.navigate("LoginRestaurant")}
              >
                <Text style={{ color: "orange" }}>Já possui conta? ENTRAR</Text>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

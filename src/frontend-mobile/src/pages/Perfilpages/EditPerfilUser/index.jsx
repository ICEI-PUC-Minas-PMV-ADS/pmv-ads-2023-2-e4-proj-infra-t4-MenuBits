import React, { useCallback, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import {
  PerfilCard,
  Container,
  HeaderCard,
  Header,
  ContentCard,
  Info,
  Subheader,
  Email,
  Name,
  Editar,
  Clear,
  Textedit,
} from "./styles";

const EditPerfilUserMobile = () => {
  
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMjIzMDgzNiwiZXhwIjoxNzAyMzE3MjM2fQ.UdZ0iVP9Hnw03Y2mMiE3TtECgfE3BnE0FJJ1el93UH0",
    },
  };

  const navigation = useNavigation();

  const handleToPerfilUserMobile = useCallback(() => {
    navigation.replace("Perfil")
  }, []);

  const [perfil, setPerfil] = useState({});

  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`https://menu-bits-backend.onrender.com/api/users/15`, config)
      .then((response) => {
        setPerfil(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


  return (
    <Container>
      <Clear></Clear>
      <PerfilCard>
        <HeaderCard>
          <Header>Edição de Perfil</Header>
        </HeaderCard>
        <ContentCard>
          <Info>
            <Subheader>E-MAIL</Subheader>
            <Email
              placeholder="digite o seu e-mail"
              type="email"
              id="email"
              defaultValue={perfil.email}
              onChangeText={(event) => setEmail(event)}
            />
          </Info>
          <Info>
            <Subheader>NOME</Subheader>
            <Name
              placeholder="digite o seu nome"
              type="string"
              id="name"
              defaultValue={perfil.name}
              onChangeText={(event) => setName(event)}
            />
          </Info>
        </ContentCard>
          <Editar onPress={() => {
                axios
                .put(`https://menu-bits-backend.onrender.com/api/users/15`,{
                    name: name === "" ? perfil.name : name,
                    email: email === "" ? perfil.email : email,
                    password: perfil.password
                }, config)
                .then((response) => {
                  handleToPerfilUserMobile()
                })
                .catch((e) => {
                  console.log(e); 
                });
          }}>
            <Textedit>Salvar</Textedit>
          </Editar>
      </PerfilCard>
      <Clear></Clear>
    </Container>
  );
};

export default EditPerfilUserMobile;

import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  PerfilCard,
  Container,
  HeaderCard,
  ContentCard,
  Info,
  Subheader,
  Email,
  Name
} from "../EditPerfilUser/style";

export default function EditPerfilUser() {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMjIzMDgzNiwiZXhwIjoxNzAyMzE3MjM2fQ.UdZ0iVP9Hnw03Y2mMiE3TtECgfE3BnE0FJJ1el93UH0",
    },
  };

  //   const navigation = useNavigation();

  //   const handleToPerfilUserMobile = useCallback(() => {
  //     navigation.replace("Perfil")
  //   }, []);

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
      <PerfilCard>
        <HeaderCard>Edição de Perfil</HeaderCard>
        <ContentCard>
          <Info>
            <Subheader>e-mail</Subheader>
            <Email
              placeholder="digite o seu e-mail"
              type="email"
              id="email"
              defaultValue={perfil.email}
              onChangeText={(event) => setEmail(event)}
            />
          </Info>
          <Info>
            <Subheader>nome</Subheader>
            <Name
              placeholder="digite o seu nome"
              type="string"
              id="name"
              defaultValue={perfil.name}
              onChangeText={(event) => setName(event)}
            />
          </Info>
        </ContentCard>
        <a href="/perfil-user">Salvar</a>
      </PerfilCard>
    </Container>
  );
}

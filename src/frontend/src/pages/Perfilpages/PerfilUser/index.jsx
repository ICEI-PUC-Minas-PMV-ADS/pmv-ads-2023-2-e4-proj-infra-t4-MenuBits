import React, {useEffect, useState } from "react";
import axios from 'axios';

import {
    PerfilCard,
    Container,
    HeaderCard,
    ContentCard,
    Info,
    Email,
    Name,
    Subheader
} from '../PerfilUser/style'


export default function PerfilUser() {

     const config = {
         headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMjIzMDgzNiwiZXhwIjoxNzAyMzE3MjM2fQ.UdZ0iVP9Hnw03Y2mMiE3TtECgfE3BnE0FJJ1el93UH0"
     },
     };

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        axios
            .get(`https://menu-bits-backend.onrender.com/api/users/15`, config)
            .then((response) => {
                setPerfil(response.data.data);
            }).catch((e) => {
                console.log(e)
            });
    }, [])


    return (

    <Container>
        <PerfilCard>
            <HeaderCard>
                Perfil
            </HeaderCard>
            <ContentCard>
                <Info>
                    <Subheader>e-mail</Subheader>
                    <Email>{perfil.email}</Email>
                </Info>
                <Info>
                    <Subheader>nome</Subheader>
                    <Name>{perfil.name}</Name>
                </Info>
            </ContentCard>
            <a href="/edit-perfil-user">
                Editar
            </a>
        </PerfilCard>
    </Container>

    )
  }
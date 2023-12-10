import React, { useCallback, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { getUserData } from '../../../hooks/save-user'

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
    Textedit
} from './styles'



const PerfilUserMobile = () => {

    const config = {
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTcwMjIzMDgzNiwiZXhwIjoxNzAyMzE3MjM2fQ.UdZ0iVP9Hnw03Y2mMiE3TtECgfE3BnE0FJJ1el93UH0"
    },
    };

    

	const navigation = useNavigation();

	const handleToEditPerfilUserMobile = useCallback(() => {
		navigation.navigate("EditPerfilUserMobile");
	}, []);

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        axios
            .get(`https://menu-bits-backend.onrender.com/api/users/15`, config)
            .then((response) => {
                console.log(getUserData())
                setPerfil(response.data.data);
            }).catch((e) => {
                console.log(e)
            });
    }, [])

    

	return (

        <Container>
		<Clear></Clear>
        <PerfilCard>
            <HeaderCard>
                <Header>Perfil</Header>
            </HeaderCard>
            <ContentCard>
                <Info>
                    <Subheader>E-MAIL</Subheader>
                    <Email>{perfil.email}</Email>
                </Info>
                <Info>
                    <Subheader>NOME</Subheader>
                    <Name>{perfil.name}</Name>
                </Info>
            </ContentCard>
            <Pressable onPress={handleToEditPerfilUserMobile}>
				<Editar>
					<Textedit>Editar</Textedit>
				</Editar>
            </Pressable>
        </PerfilCard>
		<Clear></Clear>
    </Container>

	);
};

export default PerfilUserMobile;


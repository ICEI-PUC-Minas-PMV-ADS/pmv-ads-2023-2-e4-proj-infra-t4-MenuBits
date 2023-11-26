import React, { useCallback, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

import {
    PerfilCard,
    Container,
    HeaderCard,
    Header,
    ContentCard,
    Info,
    Subheader,
	Editar,
	Clear,
    Subtext,
    Photo,
    Description,
    Textedit
} from './styles'



const PerfilRestaurantMobile = () => {

	const navigation = useNavigation();

	const handleToEditPerfilRestaurantMobile = useCallback(() => {
		navigation.navigate("EditPerfilRestaurantMobile");
	}, []);

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        axios
            .get(`https://menu-bits-backend.onrender.com/api/restaurante/22`)
            .then((response) => {
                console.log(response.data.restaurant)
                setPerfil(response.data.restaurant);
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
                    <Subtext>{perfil.email}</Subtext>
                </Info>
                <Info>
                    <Subheader>NOME</Subheader>
                    <Subtext>{perfil.name}</Subtext>
                </Info>
                <Info>
                    <Subheader>TELEFONE</Subheader>
                    <Subtext>{perfil.phone}</Subtext>
                </Info>
                <Info>
                    <Subheader>CIDADE</Subheader>
                    <Subtext>{perfil.city}</Subtext>
                </Info>
                <Info>
                    <Subheader>UF</Subheader>
                    <Subtext>{perfil.UF}</Subtext>
                </Info>
                <Info>
                    <Subheader>ENDEREÇO</Subheader>
                    <Subtext>{perfil.location}</Subtext>
                </Info>
                <Info>
                    <Subheader>UPLOAD DA FOTO DO RESTAURANTE</Subheader>
                    <Photo>{perfil.imageUrl}</Photo>
                </Info>
                <Info>
                    <Subheader>DESCRIÇÃO</Subheader>
                    <Description>{perfil.description}</Description>
                </Info>
            </ContentCard>
            <Pressable onPress={handleToEditPerfilRestaurantMobile}>
				<Editar>
					<Textedit>Editar Perfil</Textedit>
				</Editar>
            </Pressable>
        </PerfilCard>
		<Clear></Clear>
    </Container>
	);
};

export default PerfilRestaurantMobile;
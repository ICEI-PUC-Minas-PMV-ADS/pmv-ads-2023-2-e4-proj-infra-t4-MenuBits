import React, { useCallback, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


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



const EditPerfilRestaurantMobile = () => {

    const config = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTcwMTAyMjYyOCwiZXhwIjoxNzAxMTA5MDI4fQ.u4bPPIZHBcFcxjMaTJM83mYPQZBqwWrnHNSfPhIZG_0",
        },
      };

    const { Navigator, Screen } = createNativeStackNavigator();

	const navigation = useNavigation();

    const handleToPerfilRestaurantMobile = useCallback(() => {
        navigation.replace("PerfilRestaurantMobile")
      }, []);


    const [email, setEmail] = useState("");

    const [name, setName] = useState("");

    const [phone, setPhone] = useState("");

    const [city, setCity] = useState("");

    const [UF, setUF] = useState("");

    const [location, setLocation] = useState("");

    const [description, setDescription] = useState("");

    const [perfil, setPerfil] = useState({});

     useEffect(() => {
         axios
             .get("https://menu-bits-backend.onrender.com/api/restaurante/22")
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
                <Header>Edição de Perfil</Header>
            </HeaderCard>
            <ContentCard>
                <Info>
                    <Subheader>E-MAIL</Subheader>
                    <Subtext
                        placeholder="digite o seu e-mail"
                        type="email"
                        id="email"
                        defaultValue={perfil.email}
                        onChangeText={(event) => setEmail(event)}
                    />
                </Info>
                <Info>
                    <Subheader>NOME</Subheader>
                    <Subtext              
                        placeholder="digite o nome do Restaurante"
                        type="string"
                        id="name"
                        defaultValue={perfil.name}
                        onChangeText={(event) => setName(event)}
                    />
                </Info>
                <Info>
                    <Subheader>TELEFONE</Subheader>
                    <Subtext
                        placeholder="digite o telefone do Restaurante"
                        type="string"
                        id="phone"
                        defaultValue={perfil.phone}
                        onChangeText={(event) => setPhone(event)}
                    />
                </Info>
                <Info>
                    <Subheader>CIDADE</Subheader>
                    <Subtext
                        placeholder="digite a cidade do Restaurante"
                        type="string"
                        id="city"
                        defaultValue={perfil.city}
                        onChangeText={(event) => setCity(event)}
                    />
                </Info>
                <Info>
                    <Subheader>UF</Subheader>
                    <Subtext
                        placeholder="digite o UF do Restaurante"
                        type="string"
                        id="UF"
                        defaultValue={perfil.UF}
                        onChangeText={(event) => setUF(event)}
                    />
                </Info>
                <Info>
                    <Subheader>ENDEREÇO</Subheader>
                    <Subtext
                        placeholder="digite o endereço do Restaurante"
                        type="string"
                        id="location"
                        defaultValue={perfil.location}
                        onChangeText={(event) => setLocation(event)}
                    />
                </Info>
                <Info>
                    <Subheader>UPLOAD DA FOTO DO RESTAURANTE</Subheader>
                    <Photo></Photo>
                </Info>
                <Info>
                    <Subheader>DESCRIÇÃO</Subheader>
                    <Subtext
                        placeholder="Introdução breve do Restaurante"
                        type="string"
                        id="description"
                        defaultValue={perfil.description}
                        onChangeText={(event) => setDescription(event)}
                    />
                </Info>
            </ContentCard>
            <Editar onPress={() => {
                axios
                .put(`https://menu-bits-backend.onrender.com/api/restaurante/22`,{
                    name: name === "" ? perfil.name : name,
                    email: email === "" ? perfil.email : email,
                    phone: phone === "" ? perfil.phone : phone,
                    city: city === "" ? perfil.city : city,
                    UF: UF === "" ? perfil.UF : UF,
                    location: location === "" ? perfil.location : location,
                    description: description === "" ? perfil.description : description,
                    password: perfil.password
                }, config)
                .then((response) => {
                  handleToPerfilRestaurantMobile()
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


export default EditPerfilRestaurantMobile;
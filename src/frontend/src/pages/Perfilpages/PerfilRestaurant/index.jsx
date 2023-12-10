 import React, { useEffect, useState } from "react";
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
     Textedit, 
     Square
 } from '../PerfilRestaurant/style'


 export default function PerfilRestaurant() {


    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        axios
            .get(`https://menu-bits-backend.onrender.com/api/restaurante/28`)
            .then((response) => {
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
           <Square>
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
           </Square>
           <Square>
             <Info>
               <Subheader>UPLOAD DA FOTO DO RESTAURANTE</Subheader>
               <Photo>imageUrl</Photo>
             </Info>
             <Info>
               <Subheader>DESCRIÇÃO</Subheader>
               <Description>{perfil.description}</Description>
             </Info>
           </Square>
         </ContentCard>
         <Editar>
           <a href="/edit-perfil-restaurant">
             <Textedit>Editar</Textedit>
           </a>
         </Editar>
       </PerfilCard>
       <Clear></Clear>
     </Container>

   );
 }
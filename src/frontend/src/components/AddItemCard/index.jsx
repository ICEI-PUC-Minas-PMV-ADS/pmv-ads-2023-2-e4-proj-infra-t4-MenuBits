import React from "react"

import { Button } from "../Buttons";

import SelectionInput from "../SelectionInput";

import { 
    Container,
    Content,
    ImageArea,
    Title,
    Description
} from "./style"

import {
    GiHamburger
} from 'react-icons/gi'

import {
    SiAddthis
} from "react-icons/si"

const AddItemCard = ({description}) => (
    <Container>

        <Content>
            <ImageArea>

                <GiHamburger color='#930000'/>

            </ImageArea>

            <Title>Alimento X</Title>

            <SelectionInput />
                
            <SiAddthis color="#03AC32"/>

            <Description>Adicione um item já cadastrado ao menu selecionado</Description>


        </Content>



    </Container>
)

export default AddItemCard;
import React from "react"

import {
    AiFillCloseCircle
} from "react-icons/ai"
import { Button } from "../Buttons";

import { 
    Container,
    Content,
    ImageArea,
    Title,
    Description,
    Price
} from "./style"

const ItemCard = ({description, editionMode = false, closeButtonDisplay}) => (
    <Container>

    {
        editionMode? <>
            {closeButtonDisplay ? <AiFillCloseCircle color="#C60404"/> : <></>}
        </> : <></>
    } 

        <Content>
            <ImageArea>

            {/* renderizar a imagem do banco */}

            </ImageArea>

            <Title>Alimento X</Title>

            <Description>{description}</Description>
                
            <Price>R$ 50,00</Price>

            {
                editionMode? <>
                    <Button $variant="secondary">Editar item</Button>
                </> : <>
                    <Button >Adicionar pedido</Button>
                </>
            } 

        </Content>



    </Container>
)

export default ItemCard;
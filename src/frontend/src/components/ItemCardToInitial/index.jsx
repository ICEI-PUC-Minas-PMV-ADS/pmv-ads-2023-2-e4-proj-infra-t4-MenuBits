import React from "react";

import {
    AiFillCloseCircle
} from "react-icons/ai";
import { Button } from "../Buttons";

import {
    Container,
    Content,
    Description,
    ImageArea,
    Price,
    Title,
} from "./style";

const ItemCard = ({description, editionMode = false}) => (
    <Container>

    {
        editionMode? <>
            <AiFillCloseCircle color="#C60404"/>
        </> : <></>
    }

        <Content>
            <ImageArea>

            {/* renderizar a imagem do banco */}

            </ImageArea>

            <Title>{Title}</Title>

            <Description>{description}</Description>

            <Price>{price}</Price>

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
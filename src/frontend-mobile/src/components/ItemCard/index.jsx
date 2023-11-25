import React from "react"
import { Text } from 'react-native'

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

const ItemCard = ({name, description, price, imageUrl, editionMode = false, closeButtonDisplay}) => (
    <Container>
        {/* {
            editionMode ? <>
                {closeButtonDisplay ? <AiFillCloseCircle color="#C60404"/> : <></>}
            </> : <></>
        }  */}

        <Content>
            <ImageArea>

                {
                    imageUrl ? <img src={imageUrl} alt="imagem do alimento" /> :
                    <img src={"https://th.bing.com/th/id/R.bcdd3f573efd44e6ab54866c4e89ba58?rik=LxjwIFXLGsKshw&pid=ImgRaw&r=0"} alt="imagem do alimento" />
                }

                

            </ImageArea>

            <Title>{name}</Title>

            <Description>{description}</Description>
                
            <Price>R$ {price}</Price>

            {
                editionMode? <>
                    <Button $variant="secondary"><Text>Editar item</Text></Button>
                </> : <>
                    <Button ><Text>Adicionar pedido</Text></Button>
                </>
            } 

        </Content>



    </Container>
)

export default ItemCard;
import React from "react"

import {
    Image
} from "react-native"
import { Button } from "../Buttons";

import { 
    Container,
    Content,
    ImageArea,
    Title,
    Description,
    Price,
    Text
} from "./style"

const ItemCard = ({name, description, price, imageUrl, editionMode = false, closeButtonDisplay}) => (
    <Container>

        <Content>
            <ImageArea>

                {
                    imageUrl ? 
                    <Image 
                        source={{uri: imageUrl}} 
                        style={{width: 260, height: 200, alignSelf: "center"}} 
                    />
                    :
                    <Image 
                        source={{uri: "https://th.bing.com/th/id/R.bcdd3f573efd44e6ab54866c4e89ba58?rik=LxjwIFXLGsKshw&pid=ImgRaw&r=0"}} 
                        style={{width: 260, height: 200, alignSelf: "center"}} 
                    />
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
import  { useCallback } from "react";
import {
    Container,
    Content,
    Description,
    ImageArea,
    Price,
    Title,Button
} from "./style";

const CardItem = ({image, price, title, description, handleClickAddOrder }) => {
 
return(
    <Container>
        <Content>
            <ImageArea>

            <img src={image} alt="image" style={{ width: '100%', height: '100%',   borderRadius: '20px',
 }} // Defina os valores de largura e altura desejados
/>

            </ImageArea>

            <Title>{title}</Title>

            <Description>{description}</Description>

            <Price>R$ {price}</Price>
            <Button onClick={handleClickAddOrder}> Adicionar pedido</Button>

        </Content>



    </Container>
)}

export default CardItem;
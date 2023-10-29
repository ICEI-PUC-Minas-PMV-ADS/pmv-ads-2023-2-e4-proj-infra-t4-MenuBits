import  { useCallback } from "react";
import {
    Container,
    Content,
    Description,
    ImageArea,
    Price,
    Title,Button
} from "./style";

const CardItem = ({image, price, title, description, }) => {
    const items= {image, price, title, description}
 const handleClick = useCallback(()=>{
    localStorage.setItem('pedidos', JSON.stringify(items) )
    alert('Adicionado Com sucesso!')
 }, [])
 
return(
    <Container>
        <Content>
            <ImageArea>

            <img src={image} alt="image" />

            </ImageArea>

            <Title>{title}</Title>

            <Description>{description}</Description>

            <Price>{price}</Price>
            <Button onClick={handleClick}> Adicionar pedido</Button>

        </Content>



    </Container>
)}

export default CardItem;
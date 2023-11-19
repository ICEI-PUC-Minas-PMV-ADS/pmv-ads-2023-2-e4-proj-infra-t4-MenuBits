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

            <img src={image} alt="image" />

            </ImageArea>

            <Title>{title}</Title>

            <Description>{description}</Description>

            <Price>{price}</Price>
            <Button onClick={handleClickAddOrder}> Adicionar pedido</Button>

        </Content>



    </Container>
)}

export default CardItem;
import {
  Container,
  Content,
  Description,
  ImageArea,
  Price,
  Title,
  Button,
} from "./style";
import pizzaImage from "../../assets/pizza.svg";
import { Image , Text} from "react-native";

const CardItem = ({
  image = "../../assets/pizza.svg",
  price,
  title,
  description,
  handleClickAddOrder,
}) => {
  return (
    <Container>
      <Content>
        <ImageArea>
          <Image
            source={{uri: image}}
            style={{ width: 200, height: 200 }} // Estilos opcionais para a imagem
            resizeMode="cover" // Modo de redimensionamento da imagem (opcional)
          />
        </ImageArea>

        <Title>{title}</Title>

        <Description>{description}</Description>

        <Price>{price}</Price>
        <Button onPress={handleClickAddOrder}> 
          <Text>
            Adicionar pedido
          </Text>
        </Button>
      </Content>
    </Container>
  );
};

export default CardItem;

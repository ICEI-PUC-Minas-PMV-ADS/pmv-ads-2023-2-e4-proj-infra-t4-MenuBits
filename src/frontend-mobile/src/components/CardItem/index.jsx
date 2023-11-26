import {
  Container,
  Content,
  Description,
  ImageArea,
  Price,
  Title,
  Button,
} from "./style";
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
            style={{ width: 150, height: 150, borderRadius: 20, }} 
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

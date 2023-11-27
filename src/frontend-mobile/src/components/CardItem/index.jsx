import {
  Container,
  Content,
  Description,
  ImageArea,
  Price,
  Title,
  Button,
  TextButton,
} from "./style";
import { Image } from "react-native";

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

        <Price>R$ {price.toFixed(2)}</Price>
        <Button onPress={handleClickAddOrder}> 
          <TextButton>
            Adicionar pedido
          </TextButton>
        </Button>
      </Content>
    </Container>
  );
};

export default CardItem;

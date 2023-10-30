import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../../assets/cart.png";
import {
  Banner,
  Container,
  Text,
  Title,
  TextBanner,
  RestaurantButton,
  Button,
  ContainerCard,
  ImageContent,
} from "./styles.js";
import CardItem from "../../components/CardItem";

export default function MenuPage() {
  const [menuData, setMenuData] = useState();
  const [restaurantData, setRestaurantData] = useState();

  // const { menuId } = useParams()
  // Subistituir 1 da linha 15 por: e  adicionar ${menuId}
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/items/menus/1`)
      .then((res) => {
        setMenuData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert("Erro ao Carregar dados");

        console.log(JSON.stringify(err));
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/restaurante/12`)
      .then((res) => {
        setRestaurantData(res.data);
      })
      .catch((err) => {
        alert("Erro ao Carregar dados");

        console.log(JSON.stringify(err));
      });
  }, []);

  const handleClickCart = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleClickRestaurant = useCallback(() => {
    navigate("/");
  }, [navigate]);
  console.log(menuData, " tai");
  return (
    <Container>
      <Banner>
        <RestaurantButton />
        <TextBanner>
          {restaurantData && restaurantData.restaurant.name}
        </TextBanner>
        <RestaurantButton>
          Ver mais sobre
          <Button onClick={handleClickRestaurant}>
            {restaurantData && restaurantData.restaurant.name}
          </Button>
        </RestaurantButton>
      </Banner>
      <Title>
        <ImageContent>
          <img src={Cart} alt="Carrinho" onClick={handleClickCart} />
          Pedidos
        </ImageContent>
        <Text>Cardapio</Text>
      </Title>
      <ContainerCard>
        {menuData &&
          menuData.map((item) => {
            return (
              <CardItem
                key={item.id}
                image={item.imageUrl}
                title={item.name}
                description={item.description}
                price={item.price}
              />
            );
          })}
     
      </ContainerCard>
    </Container>
  );
}

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Banner, Container, Text, Title, TextBanner } from "./styles.js";

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
        console.log(res.data);
      })
      .catch((err) => {
        alert("Erro ao Carregar dados");

        console.log(JSON.stringify(err));
      });
  }, []);


  const handleClickCart = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <Container>
      <Banner>
        <TextBanner>{restaurantData && restaurantData.restaurant.name}</TextBanner>
      </Banner>
      <Title>
        <Text>Cardapio</Text>Cardapio
      </Title>
    </Container>
  );
}

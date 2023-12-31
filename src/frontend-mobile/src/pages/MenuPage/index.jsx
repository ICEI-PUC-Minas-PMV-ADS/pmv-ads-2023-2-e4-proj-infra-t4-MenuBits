import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Cart from "../../assets/cart.png";
import backgroundMenu from "../../assets/logo2.png";

import {
  Container,
  Text,
  Title,
  Background,
  OrderContainer,
  OrderText,
} from "./styles.js";
import CardItem from "../../components/CardItem";
import { Image } from "react-native";

import { useMenuBitsState } from "../../context/MenuBitsContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MenuPage() {
  const [menuData, setMenuData] = useState();
  const { menuId, restaurantData, selectedOrder, setSelectedOrder } = useMenuBitsState();

  const navigation = useNavigation();

  const addOrder = useCallback(
    async (item) => {
      try {
        const selectedOrderUpdated = [...selectedOrder, item];
        setSelectedOrder(selectedOrderUpdated);
        console.warn("selectedOrderUpdated "+ JSON.stringify(selectedOrderUpdated));

        await AsyncStorage.setItem(
          "pedidos",
          JSON.stringify(selectedOrderUpdated)
        );

        alert("Adicionado Com sucesso!");
      } catch (error) {
        console.error("Erro ao adicionar o pedido:", error);
        console.warn("Pedido não adicionado, tente novamente");
      }
    },
    [selectedOrder]
  );

  useEffect(() => {
    axios
      .get(`https://menu-bits-backend.onrender.com/api/items/menus/${menuId}`)
      .then((res) => {
        console.warn(JSON.stringify(res.data.data));
        setMenuData(res.data.data);
      })
      .catch((err) => {
        alert("Erro ao Carregar dados");

        console.warn(JSON.stringify(err));
      });
  }, []);

  const handleClickCart = useCallback(() => {
    navigation.navigate("CartPage");
  }, []);

  return (
    <Background source={backgroundMenu} resizeMode="cover">
      <Container>
        <OrderContainer onPress={handleClickCart}>
          <Image source={Cart} style={{ height: 30, width: 30 }} />
          <OrderText>Pedidos</OrderText>
        </OrderContainer>
        <Title>
          <Text>Cardapio</Text>
        </Title>
        {menuData &&
          menuData.map((item, index) => {
            return (
              <CardItem
                key={index}
                image={item.imageUrl}
                title={item.name}
                description={item.description}
                price={item.price}
                handleClickAddOrder={() => addOrder(item)}
              />
            );
          })}
      </Container>
    </Background>
  );
}

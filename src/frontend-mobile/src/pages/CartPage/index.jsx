import { useEffect, useState } from "react";
import {
    Container,
    BackgroundImage,
    Title,
    OrdersContainer,
    Header,
    HeaderText,
    EmptyCartText,
    CartItem,
    ItemImage,
    ItemName,
    ItemPrice,
    TotalContainer,
    TotalText,
    BackToMenuButton,
    BackToMenuText,
  } from './styles';
import backgroundImage from "../../assets/pizzaNostra.png";
import remove from "../../assets/remove.png";
import axios from "axios";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMenuBitsState } from "../../context/MenuBitsContext";

export default function MeusPedidos() {
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurante, setRestaurantData] = useState();
  const { restaurantData } = useMenuBitsState();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const local = await AsyncStorage.getItem("pedidos");
        const parsedLocal = JSON.parse(local) || [];
        setOrder(parsedLocal);

        // Calcula o total da compra somando os preços de cada item no carrinho
        const total = parsedLocal.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
      }
    };

    fetchOrder();
  }, []);
  const id = restaurantData.id;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/restaurante/${id}`)
      .then((res) => {
        setRestaurantData(res.data);
      })
      .catch((err) => {
        alert("Erro ao Carregar dados");
        console.log(JSON.stringify(err));
      });
  }, []);

  const handleRemove = (id) => {
    const copyOrder = [...order];
    const pizzaIndex = copyOrder.findIndex((item) => item.id === id);
    copyOrder.splice(pizzaIndex, 1);
    setOrder(copyOrder);

    // Recalcula o total da compra após a remoção do item
    const total = copyOrder.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <Container source={backgroundImage} resizeMode="cover">
      <Container>
        <BackgroundImage source={{ uri: backgroundImage }}>
          <Title>Nostra Pizza</Title>
        </BackgroundImage>
        <OrdersContainer>
          <Header>
            <HeaderText>Meus Pedidos</HeaderText>
          </Header>
          {order.length === 0 ? (
            <EmptyCartText>CARRINHO VAZIO</EmptyCartText>
          ) : (
            <View style={{ backgroundColor: "#ffcc00" }}>
              {/* Cor de fundo */}
              {order.map((item) => (
                <CartItem key={item.id}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => handleRemove(item.id)}>
                      <Image
                        source={remove}
                        style={{ width: 30, height: 30 }}
                      />
                    </TouchableOpacity>
                    <ItemImage source={{ uri: item.img }} />
                    <ItemName>{item.name}</ItemName>
                  </View>
                  <ItemPrice>R$ {item.price}</ItemPrice>
                </CartItem>
              ))}
            </View>
          )}
          {order.length > 0 && (
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalText>R$ {totalPrice}</TotalText>
            </TotalContainer>
          )}
          <BackToMenuButton onPress={navigateToMenuPage}>
            <BackToMenuText>VOLTAR AO CARDÁPIO</BackToMenuText>
          </BackToMenuButton>
        </OrdersContainer>
      </Container>
    </Container>
  );
}

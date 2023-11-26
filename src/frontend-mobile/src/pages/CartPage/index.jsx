import { useEffect, useState, useCallback } from "react";
import {
    Container,
    OrderContent,
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
    BackgroundImage,
    BackToMenuText,
    Item,
  } from './styles';
import backgroundImage from "../../assets/logo2.png";
import remove from "../../assets/remove.png";
import axios from "axios";
import { Image, Pressable } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMenuBitsState } from "../../context/MenuBitsContext";
import { useNavigation } from "@react-navigation/native";

export default function CartPage() {
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();

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

  const handleRemove = (index) => {
    // console.warn("id:", id);
    console.warn("order "+JSON.stringify(order.map(x=>x.id)));

    const copyOrder = [...order];
    console.warn("copyOrder "+JSON.stringify(copyOrder.map(x=>x.id)));
    // const pizzaIndex = copyOrder.findIndex((item) => item.id === id);
    // console.warn("pizzaIndex: "+pizzaIndex)
    copyOrder.splice(index, 1);
    console.warn("copyOrder apos "+JSON.stringify(copyOrder.map(x=>x.id)));

    setOrder(copyOrder);

    // Recalcula o total da compra após a remoção do item
    const total = copyOrder.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };
  const navigateToMenuPage = useCallback(() => {
    navigation.navigate("MenuPage");
  }, []);

  return (
    <BackgroundImage source={backgroundImage} resizeMode="cover">
      <Container>
        <OrdersContainer>
          <Header>
            <HeaderText>Meus Pedidos</HeaderText>
          </Header>
          {order.length <= 0 ? (
            <EmptyCartText>CARRINHO VAZIO</EmptyCartText>
           ) : (
            <OrderContent>
              {order.map((item, index) => (
                <CartItem key={index}>
                  <Item>
                    <Pressable onPress={() => handleRemove(index)}>
                      <Image
                        source={remove}
                        style={{ width: 20, height: 20 }}
                      />
                      <HeaderText>Remover</HeaderText>
                    </Pressable>
                    <ItemImage source={{ uri: item.img }}                         style={{ width: 50, height: 20 }}
 />
                    <ItemName>{item.name}</ItemName>
                  </Item>
                  <ItemPrice>R${item.price}</ItemPrice>
                </CartItem>
              ))}
            </OrderContent>
          )} 
          {order && order.length > 0 && (
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalText>R$ {totalPrice}</TotalText>
            </TotalContainer>
          )}
          <BackToMenuButton onPress={navigateToMenuPage}>
            <BackToMenuText>Voltar ao Cardápio</BackToMenuText>
          </BackToMenuButton>
        </OrdersContainer>
      </Container>
    </BackgroundImage>
  );
}

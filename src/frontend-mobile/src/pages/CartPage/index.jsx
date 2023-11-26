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

  const handleRemove = async(index) => {
    const copyOrder = [...order];
    copyOrder.splice(index, 1);
    setOrder(copyOrder);
    await AsyncStorage.setItem(
        "pedidos",
        JSON.stringify(copyOrder)
      );
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
            <EmptyCartText>Nenhum pedido foi feito :( </EmptyCartText>
           ) : (
            <OrderContent>
              {order.map((item, index) => (
                <CartItem key={index}>
                  <Item>
                    <Image source={{ uri: item.imageUrl }}  style={{ width: 100, height: 100, borderRadius: 10, }} />
                    <ItemName>{item.name}</ItemName>
                  </Item>
                  <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                  <Pressable onPress={() => handleRemove(index)}>
                      <Image
                        source={remove}
                        style={{ width: 20, height: 20 }}
                      />
                    </Pressable>
                </CartItem>
              ))}
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalText>R$ {totalPrice.toFixed(2)}</TotalText>
            </TotalContainer>
            </OrderContent>
          )} 
          
          <BackToMenuButton onPress={navigateToMenuPage}>
            <BackToMenuText>Voltar ao Cardápio</BackToMenuText>
          </BackToMenuButton>
        </OrdersContainer>
      </Container>
    </BackgroundImage>
  );
}

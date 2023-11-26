import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
} from "./styles.js";
import CardItem from "../../components/CardItem";
import { useMenuBitsState } from "../../context/MenuBitsContext";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MenuPage() {
  const [menuData, setMenuData] = useState();
  const { menuId, restaurantData } = useMenuBitsState();
  const [selectedOrder, setSelectedOrder] = useState([]);

  const navigation = useNavigation();

 const handleClick = useCallback(async (item) => {
  try {
    console.warn("PASSOU AQUI", selectedOrder);
    const selectedOrderUpdated = [...selectedOrder, item];
    console.warn("PASSOU AQUI 2", selectedOrderUpdated);
    setSelectedOrder(selectedOrderUpdated);
    
    await AsyncStorage.setItem('pedidos', JSON.stringify(selectedOrderUpdated));
    
    alert('Adicionado Com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar o pedido:', error);
    console.warn('Pedido não adicionado, tente novamente')
  }
}, [selectedOrder]);


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

  const handleClickRestaurant = useCallback(() => {
    navigation.navigate("RestaurantPage");
    }, []);

  return (
    <Container>
      <Title>
        <Text>Cardapio</Text>
      </Title>
        {menuData &&
          menuData.map((item) => {
            return (
              <CardItem
                key={item.id}
                image={item.imageUrl}
                title={item.name}
                description={item.description}
                price={item.price}
                handleClickAddOrder={() => handleClick(item)}
              />
            );
          })}
     
    </Container>
  );
}

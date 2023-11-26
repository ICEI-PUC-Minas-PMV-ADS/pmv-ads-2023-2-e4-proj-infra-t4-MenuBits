import { Container, Text } from "./styles.js";
import CardItem from "../../components/CardMenu";
import { useMenuBitsState } from "../../context/MenuBitsContext";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const RestaurantPage = () => {
  const { restaurantData, setMenuId } = useMenuBitsState();
  const [menuData, setMenuData] = useState([]);

  const restaurantId = restaurantData.id;
  const navigation = useNavigation();

  useEffect(() => {
    if (restaurantData) {
      axios
        .get(
          `https://menu-bits-backend.onrender.com/api/menus/restaurant/${restaurantId}`
        )
        .then((res) => {
          setMenuData(res.data.menu);

        })
        .catch((err) => {
          console.warn("Erro ao Carregar menus");
          console.log(JSON.stringify(err));
        });
    }
  }, [restaurantId]);

   const handleMenuClick = useCallback((menuId) => {
    navigation.navigate("MenuPage");
    setMenuId(menuId);

   },[]);

  return (
    <Container>
      <Text>Menus</Text>
     { menuData.map((item) => (
      <CardItem key={item.id} title={item.title} handleMenuClick={()=> handleMenuClick(item.id)} />
      ))}
    </Container>
  );
};
export default RestaurantPage;

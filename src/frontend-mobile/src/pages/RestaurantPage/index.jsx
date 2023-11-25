import { Container } from "./styles.js";
import { Text } from "react-native";
import CardItem from "../../components/CardMenu";
import { useMenuBitsState } from "../../context/MenuBitsContext";
import { useEffect, useState } from "react";
import axios from "axios";

const RestaurantPage = () => {
  const { restaurantData } = useMenuBitsState();
  const [menuData, setMenuData] = useState([]);

  const restaurantId = restaurantData.id;

  useEffect(() => {
    if (restaurantData) {
      axios
        .get(
          `https://menu-bits-backend.onrender.com/api/menus/restaurant/${restaurantId}`
        )
        .then((res) => {
          console.warn(JSON.stringify(res.data.menu));
          setMenuData(res.data.menu);
        })
        .catch((err) => {
          console.warn("Erro ao Carregar menus");
          console.log(JSON.stringify(err));
        });
    }
  }, [restaurantId]);

  return (
    <Container>
     { menuData.map((item) => (
      <CardItem title={item.title} handleMenuClick={()=>[]} />
      ))}
    </Container>
  );
};
export default RestaurantPage;

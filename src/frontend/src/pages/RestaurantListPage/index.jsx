import { Container, TitleText, Content, Line } from "./styles.js";
import CardItem from "../../components/CardMenu";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useMenuBitsState } from "../../context/MenuBitsContext";
import { useNavigate } from "react-router-dom";

const RestaurantListPage = () => {
  const [menuData, setMenuData] = useState([]);
  // const [menuId, setMenuId] = useState([]);

  const navigate = useNavigate();
  // const { restaurantId } = useParams()
  const { restaurantId } = useMenuBitsState();

  useEffect(() => {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/api/menus/restaurant/${restaurantId}`
        )
        .then((res) => {
          setMenuData(res.data.menu);
        })
        .catch((err) => {
          console.warn("Erro ao Carregar menus");
          console.log(JSON.stringify(err));
        });
    
  }, [restaurantId]);

   const handleMenuClick = useCallback((menuId) => {
    navigate(`/menu-page/${menuId}`);
    // setMenuId(menuId)
   },[navigate]);

  return (
    <Container>
      <Content>
      <TitleText>Menus</TitleText>
      <Line/>
     { menuData.map((item) => (
      <CardItem key={item.id} title={item.title} handleMenuClick={()=> handleMenuClick(item.id)} />
      ))}
      </Content>
    </Container>
  );
};
export default RestaurantListPage;

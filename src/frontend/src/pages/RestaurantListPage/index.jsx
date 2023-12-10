import { Container, TitleText, Content, Line } from "./styles.js";
import CardItem from "../../components/CardMenu";
import { useCallback } from "react";
import { useMenuBitsState } from "../../context/MenuBitsContext";
import { useNavigate } from "react-router-dom";

const RestaurantListPage = () => {
  const { menuData, setMenuId } = useMenuBitsState();

  const navigate = useNavigate();

   const handleMenuClick = useCallback((menuId) => {
    setMenuId(menuId);
    navigate(`/menu-page/${menuId}`);
   },[navigate, setMenuId]);

  return (
    <Container>
      <Content>
      <TitleText>Menus</TitleText>
      <Line/>
     { menuData.map((item, index) => (
      <CardItem key={index} title={item.title} handleMenuClick={()=> handleMenuClick(item.id)} />
      ))}
      </Content>
    </Container>
  );
};
export default RestaurantListPage;

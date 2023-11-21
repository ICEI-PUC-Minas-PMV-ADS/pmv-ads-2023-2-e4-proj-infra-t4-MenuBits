import { Container } from "./styles.js";
import { Text } from "react-native";
import { useMenuBitsState } from "../../context/MenuBitsContext";


const RestaurantPage = () => {
  const { restaurantData } = useMenuBitsState();

  return (
    <Container>
     <Text> Entrei EM OUTRA Page { restaurantData && restaurantData.name} </Text>
    </Container>
  );
}
export default RestaurantPage;

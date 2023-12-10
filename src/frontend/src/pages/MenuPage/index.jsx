import axios from "axios";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  ImageContent,
} from "./styles.js";
import CardItem from "../../components/CardItem";
import { useMenuBitsState } from "../../context/MenuBitsContext";

export default function MenuPage() {
  // const [menuData, setMenuData] = useState();

  const { 
    selectedOrder, 
    setSelectedOrder,
    restaurantData, 
    setRestaurantData,
    restaurantId,
    menuId,
    menuData,
    setMenuData
    } = useMenuBitsState();

  
  const handleClick = useCallback((item)=> {
    console.log("PASSOU AQUI", selectedOrder)
    const selectedOrderUpdated = [...selectedOrder, item]
    console.log("PASSOU AQUI 2", selectedOrder)
    setSelectedOrder(selectedOrderUpdated )
    localStorage.setItem('pedidos', JSON.stringify(selectedOrderUpdated) )
    alert('Adicionado Com sucesso!')
 }, [selectedOrder, setSelectedOrder])

 useEffect(()=>{
  setSelectedOrder(JSON.parse(localStorage.getItem('pedidos')) || []) 
 },[setSelectedOrder])

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/items/menus/${menuId}`)
      .then((res) => {
        setMenuData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert("Erro ao Carregar dados");

        console.log(JSON.stringify(err));
      });
  }, [menuId, setMenuData]);

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/api/restaurant/${restaurantId}	`)
  //     .then((res) => {
  //       setRestaurantData(res.data);
  //     })
  //     .catch((err) => {
  //       alert("Erro ao Carregar dados");

  //       console.log(JSON.stringify(err));
  //     });
  // }, [restaurantId, setRestaurantData]);

  const handleClickCart = useCallback(() => {
    navigate("/order");
  }, [navigate]);

  const handleClickRestaurant = useCallback(() => {
    navigate("/");
  }, [navigate]);
  console.log(menuData, " tai");
  return (
    <Container>
      <Banner>
        <RestaurantButton />
        <TextBanner>
          {restaurantData && restaurantData.name}
        </TextBanner>
        <RestaurantButton>
          Ver mais sobre
          <Button onClick={handleClickRestaurant}>
            {restaurantData && restaurantData.name}
          </Button>
        </RestaurantButton>
      </Banner>
      <Title>
        <ImageContent>
          <img src={Cart} alt="Carrinho" onClick={handleClickCart} />
          Pedidos
        </ImageContent>
        <Text>Cardapio</Text>
      </Title>
      <ContainerCard>
        {menuData &&
          menuData.map((item, index) => {
            return (
              <CardItem
                key={index}
                image={item.imageUrl}
                title={item.name}
                description={item.description}
                price={item.price}
                handleClickAddOrder={() => handleClick(item)}
              />
            );
          })}
     
      </ContainerCard>
    </Container>
  );
}

import { Text, Image } from "react-native";
import { useMenuBitsState } from "../../context/MenuBitsContext";
import { useState, useCallback } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Container, Input, Button, Title, Content, TextMessage, FormContainer } from "./styles";
import axios from "axios";
import backgroundImage from "../../assets/restaurant.jpg";
import lupa from "../../assets/lupabranca.png";


const Home = () => {
  const { setRestaurantData } = useMenuBitsState();
  const [id, setId] = useState();
  const navigation = useNavigation();

  const handleSearchRestaurant = useCallback(() => {
		axios
		.get(`https://menu-bits-backend.onrender.com/api/restaurante/${id}`)
		.then((res) => {
			setRestaurantData(res.data.restaurant);
			navigation.navigate("RestaurantPage");
		})
		.catch((err) => {
			alert("Erro ao Carregar dados");
			console.log(JSON.stringify(err));
		});
	}, [id]);

  return (
    <Container source={backgroundImage} resizeMode='cover'>
		<FormContainer>
		<Content>

		<Title>TÁ COM FOME DE QUE?</Title>
	  <TextMessage> DIGITE O ID DO RESTAURANTE</TextMessage>
	  </Content>

	  <Content>

      <Input  onChangeText={setId} />
      <Button onPress={handleSearchRestaurant}>
	  <Image
            source={lupa}
            style={{ width: 20, height: 20 }} // Estilos opcionais para a imagem
            resizeMode="cover" // Modo de redimensionamento da imagem (opcional)
          />
	  </Button>
	  </Content>
	  </FormContainer>
    </Container>
  );
};

export default Home;

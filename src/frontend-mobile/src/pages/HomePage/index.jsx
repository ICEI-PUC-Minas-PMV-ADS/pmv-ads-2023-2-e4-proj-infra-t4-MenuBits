import { Text } from "react-native";
import { useMenuBitsState } from "../../context/MenuBitsContext";
import { useState, useCallback } from 'react';
import { Container, Input, Button, TextButton } from "./styles";
import axios from "axios";

const Home = () => {
  const { handleRestaurantData } = useMenuBitsState();
  const [id, setId] = useState("");

	const handleSearchRestaurant = useCallback(() => {
		axios
		.get(`https://menu-bits-backend.onrender.com/api/restaurante/${id}`)
		.then((res) => {
			console.warn(JSON.stringify(res.data));
			handleRestaurantData(res.data)
			console.warn('dados carregados')
		})
		.catch((err) => {
			alert("Erro ao Carregar dados");
			console.log(JSON.stringify(err));
		});
	}, []);

  return (
    <Container>
      <Text> Pesquise o restaurante:</Text>
      <Input type='number' onChangeText={setId} />
      <Button onPress={handleSearchRestaurant}>
		<TextButton>Pesquisar</TextButton>
	  </Button>

    </Container>
  );
};

export default Home;

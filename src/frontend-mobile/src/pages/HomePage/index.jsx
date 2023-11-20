import { Text } from "react-native";
import { useMenuBitsState } from "../../context/MenuBitsContext";
import { useState, useCallback } from 'react';
import { Container, Input, Button, TextButton } from "./styles";

const Home = () => {
  const { handleRestaurantNameChange } = useMenuBitsState();
  const [name, setName] = useState("");

	const handleRestaurantData = useCallback(() => {
		axios
		.get(`${import.meta.env.VITE_API_URL}/api/restaurante/id/${name}`)
		.then((res) => {
			handleRestaurantNameChange(res.data.data);
			console.log(res.data.data);
		})
		.catch((err) => {
			alert("Erro ao Carregar dados");
			console.log(JSON.stringify(err));
		});
	}, []);


  return (
    <Container>
      <Text> Pesquise o restaurante:</Text>
      <Input onChangeText={setName} />
      <Button onPress={handleRestaurantData}>
		<TextButton>Pesquisar</TextButton>
	  </Button>

    </Container>
  );
};

export default Home;

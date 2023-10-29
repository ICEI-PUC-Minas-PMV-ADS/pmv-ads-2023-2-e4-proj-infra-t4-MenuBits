import SignUpFormRestaurant from "../../components/SignUpFormRestaurant/index.jsx";
import {
  Button,
  Container,
  OtherSignUp,
  RestaurantText,
  SignText,
  SignUp,
  Text,
} from "./styles";

export default function RegisterPage() {
	return (
		<Container>
			<OtherSignUp>
				<Text>
					Gostaria de <SignText>CADASTRAR</SignText>
				</Text>
				<Text>
					seu
					<RestaurantText> RESTAURANTE</RestaurantText>?
				</Text>
				<Button>Clique Aqui</Button>
			</OtherSignUp>
			<SignUp>
				<SignUpFormRestaurant />
			</SignUp>
			<OtherSignUp/>
		</Container>
	);
}

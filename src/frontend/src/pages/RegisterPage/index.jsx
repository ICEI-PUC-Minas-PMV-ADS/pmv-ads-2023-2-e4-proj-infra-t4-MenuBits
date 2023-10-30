import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpFormClient from "../../components/SignUpFormClient/index.jsx";
import SignUpFormRestaurant from "../../components/SignUpFormRestaurant/index.jsx";
import {
  ButtonClient,
  ButtonRestaurant,
  ContainerClient,
  ContainerRestaurant,
  RestaurantText,
  SignText,
  SignUp,
  SignUpClient,
  SignUpRestaurant,
  Text
} from "./styles";

export default function RegisterPage({ profile }) {

  const navigate = useNavigate()

  const handleClickClient = useCallback(()=> {
    navigate('/register-client')
  },[])
  const handleClickRestaurant = useCallback(()=> {
    navigate('/register-restaurant')
  },[])
	return (
		<>
			{profile === "client" ? (
					<ContainerClient>
						<SignUpRestaurant>
							<Text>
								Gostaria de <SignText>CADASTRAR</SignText>
							</Text>
							<Text>
								seu
								<RestaurantText> RESTAURANTE</RestaurantText>?
							</Text>
							<ButtonRestaurant onClick={handleClickRestaurant}>Clique Aqui</ButtonRestaurant>
						</SignUpRestaurant>
						<SignUp>
							<SignUpFormClient />
						</SignUp>
						<SignUpRestaurant />
					</ContainerClient>
			) : (
				<ContainerRestaurant>
					<SignUpClient>
						<Text>
							Gostaria de se <SignText>CADASTRAR</SignText>
						</Text>
						<Text>
							como
							<RestaurantText> CLIENTE</RestaurantText>?
						</Text>
						<ButtonClient onClick={handleClickClient}>Clique Aqui</ButtonClient>
					</SignUpClient>
					<SignUp>
						<SignUpFormRestaurant />
					</SignUp>
					<SignUpClient />
				</ContainerRestaurant>
			)}
		</>
	);
}

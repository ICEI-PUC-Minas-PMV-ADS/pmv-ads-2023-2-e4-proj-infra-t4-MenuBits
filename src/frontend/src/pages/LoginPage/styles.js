import styled from "styled-components";

export const ContainerRestaurant = styled.div`
	background-image: url("src/assets/backgroundRestaurant.png");
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
	gap: 10px;
`;
export const ContainerClient = styled.div`
	background-image: url("src/assets/backgroundClient.png");
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
`;

export const Login = styled.div`
	justify-content: center;
	margin-top: 60px;
`;
export const LoginRestaurant = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 100px;
	align-items: center;
	justify-content: center;
	flex: 1;
	margin-top: 400px;
`;
export const LoginClient = styled.div` 
	display: flex;
	flex-direction: column;
	margin-right: 100px;
	align-items: center;
	justify-content: start;
	flex: 1;
	margin-top: 50px;
`;

export const Text = styled.text`
	color: #c60404;
	font-size: 18px;
	padding: 5px;
`;

export const SignText = styled.text`
	color: #f39d54;
	font-weight: 700;
`;
export const RestaurantText = styled.text`
	font-weight: 700;
`;
export const ButtonRestaurant = styled.button`
	background-color: #f39d54;
	color: white;
	padding: 10px;
	border-radius: 7px;
	margin: 10px 10%;
`;
export const ButtonClient = styled.button`
	background-color: #c60404;
	color: white;
	padding: 10px;
	border-radius: 7px;
	margin: 10px 10%;
`;

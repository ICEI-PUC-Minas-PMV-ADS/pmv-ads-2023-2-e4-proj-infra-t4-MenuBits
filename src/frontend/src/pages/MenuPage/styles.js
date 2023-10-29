import styled from "styled-components";

export const Container = styled.div`
	background-size: cover;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Banner = styled.div`
	background-image: url("src/assets/pizzaNostra.png");
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 40vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
export const TextBanner = styled.h1`
color: white;
font-size: 40px;
justify-content: center;
align-items: center;
`;

export const Title = styled.div`
	margin-top: 20px;
`;

export const Text = styled.h1`
	font-size: 24px;
	padding: 5px;
	justify-content: center;
`;

export const SignUpRestaurant = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 100px;
	align-items: center;
	justify-content: center;
	flex: 1;
	margin-top: 400px;
`;
export const SignUpClient = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 100px;
	align-items: center;
	justify-content: start;
	flex: 1;
	margin-top: 50px;
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

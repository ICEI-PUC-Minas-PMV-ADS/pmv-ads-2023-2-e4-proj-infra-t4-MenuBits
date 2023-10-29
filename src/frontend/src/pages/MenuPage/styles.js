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
	background-position: center;

	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 40vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	grid-template-rows: 1fr 1fr 1fr;
`;
export const TextBanner = styled.h1`
color: white;
font-size: 40px;
justify-content: center;
align-items: center;
`;

export const Title = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	width: 100%;
	grid-template-rows: 1fr 2fr 1fr;
	gap: 10px;
`;

export const Text = styled.div`
	font-size: 24px;
	padding: 5px;
	justify-content: center;
`;

export const RestaurantButton = styled.div`
	display: flex;
	color: white;
	margin-right: 10px;
	align-items: end;
	justify-content: end;
	flex: 1;
	margin-top: 200px;
	align-items: center;

`;
export const Button = styled.button`
	margin-left: 10px;
	font-weight: 600;	
	background-color: #c60404;
	color: white;
	padding: 10px;
	border-radius: 7px;
`;
export const ImageContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
`;

export const ContainerCard = styled.text`
	font-weight: 700;
	display: flex;
	flex-direction: row;
	grid-template-rows: 1fr 1fr 1fr;
	gap:40px;
	margin: 20px;
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


import styled from "styled-components";

export const ContainerRestaurant = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 10px;
	padding-left: 2.5%;
	padding-right: 2.5%;
	margin-top: 60px;
`;
export const ContainerClient = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 10px;
	padding-left: 2.5%;
	padding-right: 2.5%;
	margin-top: 60px;
`;
export const SignUp = styled.div`
	display: flex;
	justify-content: center;
`;
export const SignUpRestaurant = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 100px;
	align-items: center;
	justify-content: end;
	flex: 1;
`;
export const SignUpClient = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 100px;
	align-items: center;
	justify-content: end;
	flex: 1;
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

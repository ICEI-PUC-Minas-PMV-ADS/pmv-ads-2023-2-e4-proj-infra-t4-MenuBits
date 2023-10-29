import styled from "styled-components";

export const Content = styled.div`
	width: 30vw;
	align-items: center;
	align-self: center;
	display: flex;
	flex-direction: column;
	text-align: center;
	border: 2px solid #f39d54;
	background-color: white;
	border-radius: 10px;
	height: 80vh;
`;
export const Form = styled.div`
	margin-top: 30px;
	margin-bottom: 20px;
	gap: 10px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Field = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5px;
`;
export const Input = styled.input`
	padding: 10px;
	border: 1px solid #f39d54;
	border-radius: 10px;
	margin: 10px 60px;
`;

export const RestaurantRegister = styled.div`
	display: flex;
	background-color: #f39d54;
	align-items: center;
	font-size: 25px;
	color: white;
	border-radius: 7px 7px 0 0;
	width: 100%;
	height: 15%;
	justify-content: center;
`;
export const Title = styled.h1`
	color: white;
	font-weight: 700;
	font-size: 28px;
`;

export const Button = styled.button`
	background-color: #f39d54;
	color: #fff;
	font-size: 18px;
	font-weight: 700;
	border-radius: 7px;
	cursor: pointer;
	padding: 20px;
	margin: 10px 30%;
	&:hover {
		transition: 500;
		background-color: #c60404;
	}
`;

export const Text = styled.a`
	color: #f39d54;
	font-weight: 500;
`;
export const Label = styled.label`
	color: #f39d54;
	font-weight: 400;
`;

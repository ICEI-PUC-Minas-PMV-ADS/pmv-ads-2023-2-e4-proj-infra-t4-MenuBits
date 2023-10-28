import styled from "styled-components";

export const Container = styled.div`
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

export const OtherSignUp = styled.div`
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
export const Button = styled.button`
	background-color: #f39d54;
	color: white;
	padding: 10px;
	border-radius: 7px;
	margin: 10px 10%;
`;

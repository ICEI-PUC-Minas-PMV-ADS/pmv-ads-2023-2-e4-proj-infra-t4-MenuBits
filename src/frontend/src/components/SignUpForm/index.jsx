import axios from "axios";
import { useCallback, useState } from "react";
import {
  Button,
  ClientRegister,
  Content,
  Field,
  Form,
  Input,
  Label,
  Text,
  Title
} from "./syles";

const SignUpForm = ({ profile }) => {
	// const navigate = useNavigation();

	// const handleToSign = useCallback(() => {
	// 	if (profile === "restaurant") {
	// 		navigate("/register-restaurant");
	// 	} else if (client === "client") {
	// 		navigate("/register-client");
	// 	}
	// }, []);

  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");4



	const handleSignUp = useCallback(() => {
    if(firstPassword === secondPassword){
      setValidPassword(secondPassword)
    }
    else{
      alert('Valores da senha nao coincidem!')
    }
		const body = {
			name,
			email,
			validPassword,
		};
		axios
			.post("http://10.0.2.2:3000/users", body)
			.then((res) => {
				// handleToSign();
				console.log(res);
			})
			.catch((err) => {
				console.log(JSON.stringify(err));
			});
	}, [name, email, validPassword]);

  const handleClick = () => {
    handleSignUp();
  };

	return (
		<Content>
			<ClientRegister>
				<Title>Cadastro</Title>
			</ClientRegister>
			<Form>
				<Field>
					<Label>Nome</Label>
					<Input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
				</Field>
				<Field>
					<Label>E-mail</Label>
					<Input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
				</Field>
				<Field>
					<Label>Senha</Label>
					<Input type="password" id="password" value={firstPassword}  onChange={(event) => setFirstPassword(event.target.value)}/>
				</Field>
				<Field>
					<Label>Senha</Label>
					<Input type="password" id="password" value={secondPassword} onChange={(event) => setSecondPassword(event.target.value)}/>
				</Field>
				<Button>Cadastrar</Button>
				<Text href="/">Já possui conta? entrar</Text>
			</Form>
		</Content>
	);
};

export default SignUpForm;

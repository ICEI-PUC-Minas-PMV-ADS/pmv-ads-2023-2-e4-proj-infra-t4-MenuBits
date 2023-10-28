import axios from "axios";
import { useCallback, useState } from "react";
import { ClientRegister, Content, Input } from './syles';

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
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSign = useCallback(() => {
		const body = {
			name,
			lastName,
			email,
			password,
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
	}, [name, lastName, email, password]);

	return (
    <Content>
      <ClientRegister>
        <Title>Cadastro</Title>
      </ClientRegister>
      <label>Nome</label>
      <Input type="text" id="name" value={name} />
      <label htmlFor="email">E-mail</label>
      <Input type="email" id="email" value={email} />
      <label htmlFor="password">Senha</label>
      <Input type="password" id="password" value={password} />
    </Content>

	);
};

export default SignUpForm;
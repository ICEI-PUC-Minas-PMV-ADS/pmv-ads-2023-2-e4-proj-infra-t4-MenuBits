import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";


const SignUpForm = ({ profile }) => {
	const navigate = useNavigation();

	const handleToSign = useCallback(() => {
		if (profile === "restaurant") {
			navigate("/register-restaurant");
		} else if (client === "client") {
			navigate("/register-client");
		}
	}, []);

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
				handleToSign();
			})
			.catch((err) => {
				console.log(JSON.stringify(err));
			});
	}, [name, lastName, email, password]);

	return (
		<Content>

		</Content>
	);
};

export default SignUpForm;
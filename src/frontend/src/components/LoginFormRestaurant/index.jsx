import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Content,
  Field,
  Form,
  Input,
  Label,
  RestaurantLogin,
  Text,
  Title,
} from "./syles";

const LoginFormRestaurant = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(async () => {
    const body = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/restaurant/auth`, // Ajustado para a rota correta do backend
        body
      );

      // Armazenando o token do restaurante no localStorage
      localStorage.setItem('restaurantToken', response.data.token);

      alert("Login realizado com sucesso");
      navigate("/restaurant-homepage"); // Ajustado para redirecionar para a página inicial do restaurante
    } catch (error) {
      console.error(error);
      alert("Falha no login");
    }
  }, [email, password, navigate]);

  return (
    <Content>
      <RestaurantLogin>
        <Title>Login</Title>
      </RestaurantLogin>
      <Form>
        <Field>
          <Label>E-mail</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field>
          <Label>Senha</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Field>
        <Button onClick={handleLogin}>Login</Button>
        <Text href="/login-client">Já possui conta? Entrar</Text> {/* Ajustado para redirecionar para a página de login do cliente */}
      </Form>
    </Content>
  );
};

export default LoginFormRestaurant;
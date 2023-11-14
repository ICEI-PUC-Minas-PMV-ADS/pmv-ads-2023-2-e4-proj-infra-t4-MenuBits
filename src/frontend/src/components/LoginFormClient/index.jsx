import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ClientLogin,
  Content,
  Field,
  Form,
  Input,
  Label,
  Text,
  Title,
  MessageError
} from "./styles";

const LoginFormClient = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = useCallback(async () => {
    const body = {
      email,
      password,
    };
    
    try {

      if(email === "" || password === "") {
        setMessage('Preencha os dados de login');
      } else {

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/auth`, body);

        if(response.data.error = "User not found") {
          setMessage('Email ou senha incorretos');
        } else {
          localStorage.setItem('userToken', response.data.token);
          navigate('/');

        }
      }

    } catch (error) {
      console.error(error);
      setMessage('Falha no login');
    }
  }, [email, password, navigate]);

  return (
    <Content>
      <ClientLogin>
        <Title>LOGIN</Title>
      </ClientLogin>
      <Form>
        <MessageError>{message}</MessageError>
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
        <Button onClick={handleLogin}>ENTRAR</Button>
        <Text href="/register-client">CRIAR CONTA</Text>
      </Form>
    </Content>
  );
};

export default LoginFormClient;
import Menubits from "../../assets/menubitsshadow.svg"
import Pucminas from "../../assets/pucminasshadow.svg"

import {
  Container,
  Text
} from "../About/style"

export default function About() {
  return (
    <Container>
      <img src={Menubits} />
      <Text>
        <h1>Conheça o MenuBits</h1><br></br><br></br>
        <p>Descubra a maneira mais fácil e conveniente de explorar e escolher deliciosas refeições. Esqueça a complicação de 
          alterar ou renovar constantemente seu cardápio, ENTRE já para o MenuBits!</p><br></br><br></br><br></br>
        <h2>Como funciona</h2><br></br><br></br>
        <p>- Com um celular em mãos, basta escanear qualquer cardápio via QR Code e desfrutar da facilidade e rapidez na escolha dos itens

<br></br><br></br> Temos a opção também, de cadastrar e com isso, favoritar os cardápios dos restaurantes que você mais gostou!</p>
<br></br><br></br><br></br><h2>Para os Restaurantes</h2><br></br><br></br>
        <p>- Pelo site ou aplicativo, realize o cadastro de seu Restaurante para poder usufruir de todas as qualidades que o MenuBits tem a oferecer!

<br></br><br></br>- Crie cardápios para diferentes ocasiões e prepare um prato especial do dia, que será destaque total e preço diferenciado </p>
<br></br><br></br><br></br><br></br><br></br><br></br><h3>PUC MINAS - 2023</h3>
      </Text>
      <img src={Pucminas} />
    </Container>

  )
}
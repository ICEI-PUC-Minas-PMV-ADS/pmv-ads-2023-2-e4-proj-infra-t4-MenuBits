import {
    Container,
    Content,
    Title,
} from "./style";

const CardItem = ({ title, handleMenuClick }) => {
 
return(
    <Container>
        <Content onClick={handleMenuClick}>
            <Title>{title}</Title>
        </Content>
    </Container>
)}

export default CardItem;
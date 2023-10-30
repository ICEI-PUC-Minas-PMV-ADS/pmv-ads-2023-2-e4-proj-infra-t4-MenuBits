import {
    PerfilCard,
    Container,
    HeaderCard,
    ContentCard,
    Info,
    Label,
    Email,
    Nome
} from '../PerfilUser/style'

export default function PerfilUser() {
    return (

    <Container>
        <PerfilCard>
            <HeaderCard>
                Perfil
            </HeaderCard>
            <ContentCard>
                <Info>
                    <Label>e-mail</Label>
                    <Email>robertin@hotmail.com</Email>
                </Info>
                <Info>
                    <Label>nome</Label>
                    <Nome>Roberto</Nome>
                </Info>
            </ContentCard>
            <a href="/edit-perfil-user">
                Editar
            </a>
        </PerfilCard>
    </Container>

    )
  }
import Input from '../../../components/Input'
import {
    PerfilCard,
    Container,
    HeaderCard,
    ContentCard,
    Info,
    Label,
} from '../EditPerfilUser/style'
import {BsCheckLg} from 'react-icons/bs'

export default function EditPerfilUser() {
    return (

    <Container>
        <PerfilCard>
            <HeaderCard>
                Perfil
            </HeaderCard>
            <ContentCard>
                <Info>
                    <Label>e-mail</Label>
                    <Input></Input>
                </Info>
                <Info>
                    <Label>nome</Label>
                    <Input></Input>
                </Info>
            </ContentCard>
            <a href='/perfil-user'>
                <BsCheckLg />
            </a>
        </PerfilCard>
    </Container>

    )
  }
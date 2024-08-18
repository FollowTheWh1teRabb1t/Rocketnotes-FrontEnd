import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';



export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src='https://github.com/FollowTheWh1teRabb1t.png'
                     alt="Foto de Usuário" />
            <div>
                <span>Bem-vindo,</span>
                <strong>Felipe José de Lima</strong>
            </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
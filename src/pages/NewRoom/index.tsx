import { Aside } from "components/Aside";

import { Logo } from "assets/images/svgs";

import {
	Container,
	ContentContainer,
	Content,
	LogoIcon,
	CreateRoom,
	Form,
	Input,
	Submit,
	RoomEnter,
	Link,
} from "./styles";

export const NewRoom: React.FC = () => (
	<Container>
		<Aside />
		<ContentContainer>
			<Content>
				<LogoIcon src={Logo} alt="Letmeask" />
				<CreateRoom>Criar uma nova sala</CreateRoom>
				<Form>
					<Input type="text" placeholder="Nome da sala" />
					<Submit type="submit">Criar sala</Submit>
				</Form>
				<RoomEnter>
					Quer Entrar em uma sala existente? <Link to="/">clique aqui</Link>
				</RoomEnter>
			</Content>
		</ContentContainer>
	</Container>
);

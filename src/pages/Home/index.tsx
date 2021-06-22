import { useHistory } from "react-router-dom";

import { Aside } from "components/Aside";

import { useAuth } from "contexts/auth";

import { Logo, Google } from "assets/images/svgs";

import {
	Container,
	ContentContainer,
	Content,
	LogoIcon,
	CreateRoom,
	GoogleIcon,
	RoomEnter,
	Form,
	Input,
	Submit,
} from "./styles";

export const Home: React.FC = () => {
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();

	const handleCreateRoom = async () => {
		if (!user) await signInWithGoogle();

		history.push("/rooms/new");
	};

	return (
		<Container>
			<Aside />
			<ContentContainer>
				<Content>
					<LogoIcon src={Logo} alt="Letmeask" />
					<CreateRoom onClick={handleCreateRoom}>
						<GoogleIcon src={Google} alt="Logo do Google" />
						Crie sua sala com o Google
					</CreateRoom>
					<RoomEnter>ou entre em uma sala</RoomEnter>
					<Form>
						<Input type="text" placeholder="Digite o código da sala" />
						<Submit type="submit">Entrar na sala</Submit>
					</Form>
				</Content>
			</ContentContainer>
		</Container>
	);
};

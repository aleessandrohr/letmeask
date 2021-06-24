import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Aside } from "components/Aside";

import { useAuth } from "hooks/useAuth";

import { Logo } from "assets/images/svgs";

import { database } from "services/firebase";

import {
	Container,
	ContentContainer,
	Content,
	LogoIcon,
	CreateRoom,
	Form,
	RoomName,
	Submit,
	RoomEnter,
	Link,
} from "./styles";

interface Data {
	newRoom: string;
}

export const NewRoom: React.FC = () => {
	const history = useHistory();
	const { user } = useAuth();
	const { register, handleSubmit } = useForm<Data>({
		defaultValues: {
			newRoom: "",
		},
	});

	const handleCreateRoom = handleSubmit(async ({ newRoom }) => {
		const roomRef = database.ref("rooms");
		const firebaseRoom = await roomRef.push({
			title: newRoom,
			authorId: user?.id,
		});

		history.push(`/admin/rooms/${firebaseRoom.key}`);
	});

	return (
		<Container>
			<Aside />
			<ContentContainer>
				<Content>
					<LogoIcon src={Logo} alt="Letmeask" />
					<CreateRoom>Criar uma nova sala</CreateRoom>
					<Form onSubmit={handleCreateRoom}>
						<RoomName
							type="text"
							placeholder="Nome da sala"
							{...register("newRoom", {
								required: true,
								setValueAs: value => value.trim(),
							})}
						/>
						<Submit type="submit">Criar sala</Submit>
					</Form>
					<RoomEnter>
						Quer Entrar em uma sala existente? <Link to="/">clique aqui</Link>
					</RoomEnter>
				</Content>
			</ContentContainer>
		</Container>
	);
};

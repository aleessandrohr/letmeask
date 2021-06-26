import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { Aside } from "components/Aside";

import { useAuth } from "hooks/useAuth";

import { Logo, Google } from "assets/images/svgs";

import { database } from "services/firebase";

import {
	Container,
	ContentContainer,
	Content,
	LogoIcon,
	CreateRoom,
	GoogleIcon,
	RoomEnter,
	Form,
	Code,
	Submit,
} from "./styles";

interface Data {
	roomCode: string;
}

export const Home: React.FC = () => {
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();
	const {
		register,
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<Data>({
		defaultValues: {
			roomCode: "",
		},
	});

	const handleCreateRoom = async () => {
		if (!user) await signInWithGoogle();

		history.push("/rooms/new");
	};

	const handleJoinRoom = handleSubmit(async ({ roomCode }) => {
		const room = `rooms/${roomCode}`;
		const roomRef = await database.ref(room).get();

		if (!roomRef.exists()) {
			toast.error("Sala não existe!");
			reset();

			return;
		}

		if (roomRef.val().endedAt) {
			toast.info("Sala fechada!");
			reset();

			return;
		}

		history.push(room);
	});

	return (
		<Container>
			<Aside />
			<ContentContainer>
				<Content>
					<LogoIcon src={Logo} alt="Letmeask" />
					<CreateRoom onClick={handleCreateRoom} disabled={user === undefined}>
						<GoogleIcon src={Google} alt="Logo do Google" />
						Crie sua sala com o Google
					</CreateRoom>
					<RoomEnter>ou entre em uma sala</RoomEnter>
					<Form onSubmit={handleJoinRoom}>
						<Code
							type="text"
							placeholder="Digite o código da sala"
							disabled={isSubmitting}
							{...register("roomCode", {
								required: true,
								setValueAs: value => value.trim(),
							})}
						/>
						<Submit type="submit" disabled={isSubmitting}>
							Entrar na sala
						</Submit>
					</Form>
				</Content>
			</ContentContainer>
		</Container>
	);
};

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "components/Button";
import { RoomCode } from "components/RoomCode";
import { Toast } from "components/Toast";

import { useAuth } from "hooks/useAuth";

import { Logo } from "assets/images/svgs";

import { database } from "services/firebase";

import {
	Container,
	Description,
	Content,
	Img,
	Main,
	TitleContainer,
	Title,
	Questions,
	Form,
	Textarea,
	FormFooter,
	UserInfo,
	UserImg,
	UserName,
	Question,
	Login,
} from "./styles";

interface Params {
	id: string;
}

interface Data {
	newQuestion: string;
}

type FirebaseQuestions = Record<
	string,
	{
		author: {
			name: string;
			avatar: string;
		};
		content: string;
		isAnswered: boolean;
		isHighlighted: boolean;
	}
>;

interface IQuestion {
	id: string;
	author: {
		name: string;
		avatar: string;
	};
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
}

export const Room: React.FC = () => {
	const { user } = useAuth();
	const { id: roomId } = useParams<Params>();
	const { register, reset, handleSubmit } = useForm<Data>({
		defaultValues: {
			newQuestion: "",
		},
	});
	const [title, setTitle] = useState("");
	const [questions, setQuestions] = useState<Array<IQuestion>>([]);

	const handleSendQuestion = handleSubmit(async ({ newQuestion }) => {
		reset();

		if (!user) {
			toast.error("Você deve estar logado!");

			return;
		}

		const question = {
			content: newQuestion,
			author: {
				name: user.name,
				avatar: user.avatar,
			},
			isHighlighted: false,
			isAnswered: false,
		};

		try {
			await database.ref(`rooms/${roomId}/questions`).push(question);
			toast.success("Pergunta enviada!");
		} catch {
			toast.error("Erro ao enviar a pergunta!");
		}
	});

	useEffect(() => {
		const roomRef = database.ref(`rooms/${roomId}`);

		roomRef.on("value", room => {
			const databaseRoom = room.val();
			const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
			const parsedQuestions = Object.entries(firebaseQuestions).map(
				([key, value]) => {
					return {
						id: key,
						content: value.content,
						author: value.author,
						isHighlighted: value.isHighlighted,
						isAnswered: value.isAnswered,
					};
				},
			);

			setTitle(databaseRoom.title);
			setQuestions(parsedQuestions);
		});
	}, [roomId]);

	return (
		<Container>
			<Description>
				<Content>
					<Img src={Logo} alt="Letmeask" />
					<RoomCode code={roomId} />
				</Content>
			</Description>
			<Main>
				<TitleContainer>
					<Title>Sala {title}</Title>
					{questions.length > 0 && (
						<Questions>
							{questions.length} pergunta{questions.length > 0 && "s"}
						</Questions>
					)}
				</TitleContainer>
				<Form onSubmit={handleSendQuestion}>
					<Textarea
						placeholder="O que você quer perguntar?"
						{...register("newQuestion", {
							required: true,
							setValueAs: value => value.trim(),
						})}
					/>
					<FormFooter>
						{user && (
							<UserInfo>
								<UserImg src={user.avatar} alt={user.name} />
								<UserName>{user.name}</UserName>
							</UserInfo>
						)}
						{!user && (
							<Question>
								Para enviar uma pergunta, <Login>faça seu login</Login>
							</Question>
						)}
						<Button type="submit" disabled={!user}>
							Enviar pergunta
						</Button>
					</FormFooter>
				</Form>
			</Main>
			<Toast />
		</Container>
	);
};

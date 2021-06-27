import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "components/Button";
import { PageLoading } from "components/PageLoading";
import { Question } from "components/Question";
import { RoomCode } from "components/RoomCode";

import { useAuth } from "hooks/useAuth";
import { useRoom } from "hooks/useRoom";

import { database } from "services/firebase";

import {
	Container,
	Description,
	Content,
	LogoIcon,
	Main,
	TitleContainer,
	Title,
	QuestionCounter,
	Form,
	Textarea,
	Footer,
	UserInfo,
	UserImg,
	UserName,
	LoginContainer,
	Login,
	Questions,
	QuestionButtonContainer,
	LikeButton,
	LikeCounter,
	LikeIcon,
} from "./styles";

interface Params {
	id: string;
}

interface Data {
	newQuestion: string;
}

export const Room: React.FC = () => {
	const { user, signInWithGoogle } = useAuth();
	const { id: roomId } = useParams<Params>();
	const history = useHistory();
	const { roomExists, authorId, endedAt, title, questions } = useRoom(roomId);
	const {
		register,
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<Data>({
		defaultValues: {
			newQuestion: "",
		},
	});

	useEffect(() => {
		if (authorId && user?.id === authorId) {
			history.push(`/admin/rooms/${roomId}`);
		}
	}, [authorId, history, roomId, user?.id]);

	const handleSendQuestion = handleSubmit(async ({ newQuestion }) => {
		if (!user) {
			toast.info("Você deve está logado!");

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

		await database.ref(`rooms/${roomId}/questions`).push(question);

		reset();
		toast.success("Pergunta enviada!");
	});

	const handleLikeQuestion = async (questionId: string, likeId?: string) => {
		if (user) {
			if (likeId) {
				await database
					.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
					.remove();
			} else {
				await database
					.ref(`rooms/${roomId}/questions/${questionId}/likes`)
					.push({ authorId: user.id });
			}
		} else {
			toast.info("Você deve está logado!");
		}
	};

	if (
		user === undefined ||
		roomExists === undefined ||
		endedAt === undefined ||
		!authorId
	) {
		return <PageLoading />;
	}

	return (
		<Container>
			<Description>
				<Content>
					<Link to="/" aria-label="Letmeask">
						<LogoIcon />
					</Link>
					<RoomCode code={roomId} />
				</Content>
			</Description>
			<Main>
				<TitleContainer>
					<Title>Sala {title}</Title>
					<QuestionCounter>
						{questions.length} pergunta{questions.length !== 1 && "s"}
					</QuestionCounter>
				</TitleContainer>
				<Form onSubmit={handleSendQuestion}>
					<Textarea
						placeholder="O que você quer perguntar?"
						disabled={isSubmitting}
						{...register("newQuestion", {
							required: true,
							setValueAs: value => value.trim(),
						})}
					/>
					<Footer>
						{user && (
							<UserInfo>
								<UserImg src={user.avatar} alt={user.name} />
								<UserName>{user.name}</UserName>
							</UserInfo>
						)}
						{!user && (
							<LoginContainer>
								Para enviar uma pergunta,{" "}
								<Login onClick={signInWithGoogle}>faça seu login</Login>
							</LoginContainer>
						)}
						<Button type="submit" disabled={!user || isSubmitting}>
							Enviar pergunta
						</Button>
					</Footer>
				</Form>
				<Questions>
					{questions?.map(
						({
							content,
							author,
							id,
							likeCount,
							likeId,
							isAnswered,
							isHighlighted,
						}) => (
							<Question
								key={id}
								content={content}
								author={author}
								isAnswered={isAnswered}
								isHighlighted={isHighlighted}
							>
								<QuestionButtonContainer>
									<LikeButton
										type="button"
										aria-label="Marcar pergunta como gostei"
										onClick={() => handleLikeQuestion(id, likeId)}
										liked={likeId}
										disabled={isAnswered}
									>
										{likeCount > 0 && <LikeCounter>{likeCount}</LikeCounter>}
										<LikeIcon />
									</LikeButton>
								</QuestionButtonContainer>
							</Question>
						),
					)}
				</Questions>
			</Main>
		</Container>
	);
};

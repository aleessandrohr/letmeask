import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";

import { Button } from "components/Button";
import { Question } from "components/Question";
import { RoomCode } from "components/RoomCode";

import { useAuth } from "hooks/useAuth";
import { useRoom } from "hooks/useRoom";

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
	Loading,
	Like,
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
	const { register, reset, handleSubmit } = useForm<Data>({
		defaultValues: {
			newQuestion: "",
		},
	});
	const { title, questions } = useRoom(roomId);

	const handleSendQuestion = handleSubmit(async ({ newQuestion }) => {
		if (!user) {
			toast.error("Você deve está logado!");

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
			reset();
			toast.success("Pergunta enviada!");
		} catch (error) {
			toast.error(error.message);
		}
	});

	const handleLikeQuestion = async (questionId: string, likeId?: string) => {
		if (likeId) {
			await database
				.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
				.remove();
		} else {
			await database
				.ref(`rooms/${roomId}/questions/${questionId}/likes`)
				.push({ authorId: user?.id });
		}
	};

	return (
		<Container>
			<Description>
				<Content>
					<Link to="/">
						<Img src={Logo} alt="Letmeask" />
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
						<Button type="submit" disabled={!user}>
							Enviar pergunta
						</Button>
					</Footer>
				</Form>
				<Questions>
					{!title && (
						<Loading>
							<ScaleLoader />
						</Loading>
					)}
					{questions?.map(({ content, author, id, likeCount, likeId }) => (
						<Question key={id} content={content} author={author}>
							<Like
								type="button"
								aria-label="Marcar como gostei"
								onClick={() => handleLikeQuestion(id, likeId)}
								liked={likeId}
							>
								{likeCount > 0 && <LikeCounter>{likeCount}</LikeCounter>}
								<LikeIcon />
							</Like>
						</Question>
					))}
				</Questions>
			</Main>
		</Container>
	);
};

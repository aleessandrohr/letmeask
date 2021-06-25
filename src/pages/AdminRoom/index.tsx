import { useHistory, useParams, Link } from "react-router-dom";

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
	Row,
	CloseRoom,
	Main,
	TitleContainer,
	Title,
	QuestionCounter,
	Questions,
	LikeButton,
	LikeIcon,
	LikeCounter,
	QuestionButton,
	CheckIcon,
	AnswerIcon,
	DeleteIcon,
} from "./styles";

interface Params {
	id: string;
}

export const AdminRoom: React.FC = () => {
	const { user } = useAuth();
	const history = useHistory();
	const { id: roomId } = useParams<Params>();
	const { title, questions } = useRoom(roomId);

	const handleEndRoom = async () => {
		const confirmEndRoom = confirm("Tem certeza que deseja fechar a sala?");

		if (confirmEndRoom) {
			await database.ref(`rooms/${roomId}`).update({
				endedAt: new Date(),
			});

			history.push("/");
		}
	};

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

	const handleCheckQuestionAsAnswered = async (
		questionId: string,
		isAnswered: boolean,
	) => {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isAnswered: !isAnswered,
		});
	};

	const handleHighlightQuestion = async (
		questionId: string,
		isHighlighted: boolean,
	) => {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isHighlighted: !isHighlighted,
		});
	};

	const handleDeleteQuestion = async (questionId: string) => {
		const confirmDeleteQuestion = confirm(
			"Tem certeza que deseja excluir esta pergunta?",
		);

		if (confirmDeleteQuestion) {
			await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
		}
	};

	return (
		<Container>
			<Description>
				<Content>
					<Link to="/">
						<Img src={Logo} alt="Letmeask" />
					</Link>
					<Row>
						<RoomCode code={roomId} />
						<CloseRoom isOutlined onClick={handleEndRoom}>
							Encerrar a sala
						</CloseRoom>
					</Row>
				</Content>
			</Description>
			<Main>
				<TitleContainer>
					<Title>Sala {title}</Title>
					<QuestionCounter>
						{questions.length} pergunta{questions.length !== 1 && "s"}
					</QuestionCounter>
				</TitleContainer>
				<Questions>
					{questions?.map(
						({
							content,
							author,
							id,
							isAnswered,
							isHighlighted,
							likeCount,
							likeId,
						}) => (
							<Question
								key={id}
								content={content}
								author={author}
								isAnswered={isAnswered}
								isHighlighted={isHighlighted}
							>
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
								<QuestionButton
									type="button"
									aria-label="Marcar pergunta como respondida"
									onClick={() => handleCheckQuestionAsAnswered(id, isAnswered)}
								>
									<CheckIcon />
								</QuestionButton>
								<QuestionButton
									type="button"
									aria-label="Dar destaque à pergunta"
									onClick={() => handleHighlightQuestion(id, isHighlighted)}
								>
									<AnswerIcon />
								</QuestionButton>
								<QuestionButton
									type="button"
									ari-label="Remover pergunta"
									onClick={() => handleDeleteQuestion(id)}
								>
									<DeleteIcon />
								</QuestionButton>
							</Question>
						),
					)}
				</Questions>
			</Main>
		</Container>
	);
};

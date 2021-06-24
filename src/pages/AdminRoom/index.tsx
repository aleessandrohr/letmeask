import { useHistory, useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

import { Question } from "components/Question";
import { RoomCode } from "components/RoomCode";

import { useRoom } from "hooks/useRoom";

import { Logo, Delete } from "assets/images/svgs";

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
	Loading,
	DeleteQuestion,
	DeleteIcon,
} from "./styles";

interface Params {
	id: string;
}

export const AdminRoom: React.FC = () => {
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
					<Img src={Logo} alt="Letmeask" />
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
					{!title && (
						<Loading>
							<ScaleLoader />
						</Loading>
					)}
					{questions?.map(({ content, author, id }) => (
						<Question key={id} content={content} author={author}>
							<DeleteQuestion
								type="button"
								onClick={() => handleDeleteQuestion(id)}
							>
								<DeleteIcon src={Delete} alt="Remover pergunta" />
							</DeleteQuestion>
						</Question>
					))}
				</Questions>
			</Main>
		</Container>
	);
};

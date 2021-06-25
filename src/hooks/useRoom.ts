import { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { database } from "services/firebase";

import { useAuth } from "./useAuth";

type Questions = Record<
	string,
	{
		author: {
			name: string;
			avatar: string;
		};
		content: string;
		isAnswered: boolean;
		isHighlighted: boolean;
		likes: Record<
			string,
			{
				authorId: string;
			}
		>;
	}
>;

interface Room {
	authorId: string;
	title: string;
	endedAt?: string;
	questions?: Questions;
}

interface IQuestion {
	id: string;
	author: {
		name: string;
		avatar: string;
	};
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
	likeCount: number;
	likeId?: string;
}

export const useRoom = (roomId: string) => {
	const history = useHistory();
	const { user } = useAuth();
	const [roomExists, setRoomExists] = useState<boolean | undefined>();
	const [authorId, setAuthorId] = useState<string>("");
	const [title, setTitle] = useState("");
	const [endedAt, sedEndedAt] = useState<boolean | string | undefined>();
	const [questions, setQuestions] = useState<Array<IQuestion>>([]);

	const roomRef = useMemo(() => {
		return database.ref(`rooms/${roomId}`);
	}, [roomId]);

	useEffect(() => {
		const checkIfRoomExists = async () => {
			if ((await roomRef.get()).exists()) {
				setRoomExists(true);
			} else {
				setRoomExists(false);
			}
		};

		checkIfRoomExists();
	}, [roomRef]);

	useEffect(() => {
		if (roomExists) {
			roomRef.on("value", room => {
				const databaseRoom: Room = room.val();
				const firebaseQuestions = databaseRoom.questions ?? {};
				const parsedQuestions = Object.entries(firebaseQuestions).map(
					([key, value]) => {
						return {
							id: key,
							content: value.content,
							author: value.author,
							isHighlighted: value.isHighlighted,
							isAnswered: value.isAnswered,
							likeCount: Object.values(value.likes ?? {}).length,
							likeId: Object.entries(value.likes ?? {}).find(
								// eslint-disable-next-line max-nested-callbacks
								([, like]) => like.authorId === user?.id,
							)?.[0],
						};
					},
				);

				setAuthorId(databaseRoom.authorId);
				setTitle(databaseRoom.title);
				sedEndedAt(databaseRoom.endedAt || false);
				setQuestions(parsedQuestions);
			});
		} else if (roomExists === false) {
			toast.error("Sala não existe!");
			history.push("/");
		}

		return () => {
			if (roomExists) roomRef.off("value");
		};
	}, [roomId, roomExists, roomRef, user?.id, history]);

	useEffect(() => {
		if (endedAt) {
			toast.info("Sala fechada!");
			history.push("/");
		}
	}, [endedAt, history]);

	return { roomExists, authorId, title, endedAt, questions };
};

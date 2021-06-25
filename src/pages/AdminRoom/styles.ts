import styled from "styled-components";

import { Button } from "components/Button";

import { COLORS } from "assets/colors";
import {
	LikeComponent,
	CheckComponent,
	AnswerComponent,
	DeleteComponent,
} from "assets/images/svgs";

const ButtonBase = styled.button`
	background: transparent;
	transition: filter 0.2s ease-out, opacity 0.2s ease-out;
	cursor: pointer;

	&:not(:disabled):hover {
		filter: brightness(0.7);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

export const Container = styled.div``;

export const Description = styled.header`
	padding: 2.4rem;
	border-bottom: 1px solid ${COLORS.gray50};
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 112.8rem;
	margin: 0 auto;
`;

export const Img = styled.img`
	max-height: 4.5rem;
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	> button {
		height: 4rem;
	}
`;

export const CloseRoom = styled(Button)``;

export const Main = styled.main`
	max-width: 80rem;
	margin: 0 auto;
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 3.2rem 0 2.4rem;
`;

export const Title = styled.h1`
	font-family: "Poppins", sans-serif;
	font-size: 2.4rem;
	color: ${COLORS.gray600};
`;

export const QuestionCounter = styled.span`
	background: ${COLORS.pink500};
	color: ${COLORS.white1000};
	font-size: 1.4rem;
	font-weight: 500;
	border-radius: 50px;
	padding: 0.8rem 1.6rem;
	margin-left: 1.6rem;
`;

export const Questions = styled.ul`
	margin: 3.2rem 0;
`;

export const LikeButton = styled(ButtonBase)<{ liked?: string }>`
	display: flex;
	align-items: flex-end;
	color: ${({ liked }) => (liked ? COLORS.primary : COLORS.gray300)};
	gap: 0.8rem;
	margin: 0 2rem;

	> svg > path {
		stroke: ${({ liked }) => (liked ? COLORS.primary : COLORS.gray300)};
	}
`;
export const LikeCounter = styled.span``;

export const LikeIcon = styled(LikeComponent)``;

export const QuestionButton = styled(ButtonBase)``;

export const CheckIcon = styled(CheckComponent)``;

export const AnswerIcon = styled(AnswerComponent)``;

export const DeleteIcon = styled(DeleteComponent)``;

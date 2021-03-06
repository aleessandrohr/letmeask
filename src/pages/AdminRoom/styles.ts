import styled from "styled-components";

import { Button } from "components/Button";

import {
	LogoComponent,
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
	position: sticky;
	top: 0;
	background: ${({ theme }) => theme.colors.background};
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray50};
	box-shadow: 0 1px 3px ${({ theme }) => theme.colors.black1000}50;
	padding: 2.4rem;
	z-index: 30;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 112.8rem;
	margin: 0 auto;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const LogoIcon = styled(LogoComponent)`
	max-height: 4.5rem;

	> path:nth-child(n + 1):nth-child(-n + 5) {
		fill: ${({ theme }) => theme.colors.gray600};
	}
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	padding-left: 2.4rem;

	> button {
		height: 4rem;
	}

	@media (max-width: 593px) {
		flex-direction: column;
		padding: 2.4rem 0 0;
	}
`;

export const CloseRoom = styled(Button)``;

export const Main = styled.main`
	max-width: 80rem;
	margin: 0 auto;
	padding: 0 2rem;
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 3.2rem 0 2.4rem;
`;

export const Title = styled.h1`
	font-family: "Poppins", sans-serif;
	font-size: 2.4rem;
	color: ${({ theme }) => theme.colors.gray600};
`;

export const QuestionCounter = styled.span`
	background: ${({ theme }) => theme.colors.pink500};
	color: ${({ theme }) => theme.colors.white1000};
	font-size: 1.4rem;
	font-weight: 500;
	border-radius: 50px;
	padding: 0.8rem 1.6rem;
	margin-left: 1.6rem;
`;

export const Questions = styled.ul`
	margin: 3.2rem 0;
`;

export const QuestionButtonContainer = styled.div``;

export const LikeButton = styled(ButtonBase)<{ liked?: string }>`
	display: flex;
	align-items: flex-end;
	color: ${({ theme, liked }) =>
		liked ? theme.colors.primary : theme.colors.gray300};
	gap: 0.8rem;

	@media (max-width: 400px) {
		flex-direction: column-reverse;
		align-items: center;
	}
`;
export const LikeCounter = styled.span``;

export const LikeIcon = styled(LikeComponent)<{ liked?: string }>`
	align-self: center;

	> path {
		stroke: ${({ theme, liked }) =>
			liked ? theme.colors.primary : theme.colors.gray300};
	}
`;

export const QuestionButton = styled(ButtonBase)``;

export const CheckIcon = styled(CheckComponent)``;

export const AnswerIcon = styled(AnswerComponent)``;

export const DeleteIcon = styled(DeleteComponent)``;

import styled from "styled-components";

import { Button } from "components/Button";

import { COLORS } from "assets/colors";

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

export const Questions = styled.div`
	margin-top: 3.2rem;
`;

export const Loading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	> span > span {
		background: ${COLORS.primary};
	}
`;

export const DeleteQuestion = styled.button`
	background: transparent;
	cursor: pointer;
`;

export const DeleteIcon = styled.img``;

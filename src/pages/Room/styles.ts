import styled from "styled-components";

import { LikeComponent, LogoComponent } from "assets/images/svgs";

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

	> button {
		margin-left: 2.4rem;
	}

	@media (max-width: 430px) {
		flex-direction: column;

		> button {
			margin: 2.4rem 0 0;
		}
	}
`;

export const LogoIcon = styled(LogoComponent)`
	max-height: 4.5rem;

	> path:nth-child(n + 1):nth-child(-n + 5) {
		fill: ${({ theme }) => theme.colors.gray600};
	}
`;

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

export const Form = styled.form``;

export const Textarea = styled.textarea`
	width: 100%;
	min-height: 7rem;
	background: ${({ theme }) => theme.colors.secondary950};
	color: ${({ theme }) => theme.colors.gray600};
	border-radius: 8px;
	box-shadow: 0 2px 12px ${({ theme }) => theme.colors.black1000}d6;
	padding: 1.6rem;
	resize: vertical;

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	::-webkit-scrollbar {
		width: 0.8rem;
		height: 0.8rem;
	}
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.6rem;
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
`;

export const UserImg = styled.img`
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 50%;
`;

export const UserName = styled.span`
	color: ${({ theme }) => theme.colors.gray600};
	font-size: 1.4rem;
	font-weight: 500;
	margin: 0 0.8rem;
`;

export const LoginContainer = styled.span`
	color: ${({ theme }) => theme.colors.gray300};
	font-size: 1.4rem;
	font-weight: 500;
	margin-right: 0.8rem;
`;

export const Login = styled.button`
	background: transparent;
	color: ${({ theme }) => theme.colors.primary};
	font-size: 1.4rem;
	font-weight: 500;
	text-decoration: underline;
	cursor: pointer;
`;

export const Questions = styled.ul`
	margin: 3.2rem 0;
`;

export const QuestionButtonContainer = styled.div``;

export const LikeButton = styled.button<{ liked?: string }>`
	display: flex;
	align-items: flex-end;
	background: transparent;
	color: ${({ theme, liked }) =>
		liked ? theme.colors.primary : theme.colors.gray300};
	gap: 0.8rem;
	transition: filter 0.2s ease-out, opacity 0.2s ease-out;
	cursor: pointer;

	&:not(:disabled):hover {
		filter: brightness(0.7);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	> svg > path {
		stroke: ${({ theme, liked }) =>
			liked ? theme.colors.primary : theme.colors.gray300};
	}

	@media (max-width: 400px) {
		flex-direction: column-reverse;
		align-items: center;
	}
`;

export const LikeCounter = styled.span``;

export const LikeIcon = styled(LikeComponent)`
	align-self: center;
`;

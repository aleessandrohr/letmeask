import styled from "styled-components";

export const Container = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 7;
	height: 100%;
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white1000};
	padding: 12rem 8rem;

	@media (max-width: 682px) {
		display: none;
	}
`;

export const IllustrationIcon = styled.img`
	height: 100%;
	max-width: 32rem;
`;

export const Strong = styled.strong`
	font: 700 3.6rem "Poppins", sans-serif;
	line-height: 4.2rem;
	margin-top: 1.6rem;
`;

export const Text = styled.p`
	font-size: 2.4rem;
	line-height: 3.2rem;
	margin-top: 1.6rem;
	color: ${({ theme }) => theme.colors.white900};
`;

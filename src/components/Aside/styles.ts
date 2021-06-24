import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 7;
	background: ${COLORS.primary};
	color: ${COLORS.white1000};
	padding: 12rem 8rem;
`;

export const IllustrationIcon = styled.img`
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
	color: ${COLORS.white900};
`;

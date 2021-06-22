import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 5rem;
	background: ${COLORS.purple300};
	color: ${COLORS.white1000};
	font-weight: 500;
	border-radius: 8px;
	padding: 0 3.2rem;
	transition: filter 0.2s ease-out;
	cursor: pointer;

	&:not(:disabled):hover,
	&:not(:disabled):focus {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

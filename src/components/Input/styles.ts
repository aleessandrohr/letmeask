import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.input`
	width: 100%;
	height: 5rem;
	border-radius: 8px;
	padding: 0 1.6rem;
	background: ${COLORS.white1000};
	border: 1px solid ${COLORS.gray200};
	transition: opacity 0.2s ease-out;

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

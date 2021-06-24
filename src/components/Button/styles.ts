import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.button<{ isOutlined?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 5rem;
	background: ${({ isOutlined }) =>
		isOutlined ? COLORS.white1000 : COLORS.primary};
	color: ${({ isOutlined }) =>
		isOutlined ? COLORS.primary : COLORS.white1000};
	font-weight: 500;
	border-radius: 8px;
	border: ${({ isOutlined }) =>
		isOutlined ? `1px solid ${COLORS.primary}` : "unset"};
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

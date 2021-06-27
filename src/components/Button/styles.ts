import styled from "styled-components";

export const Container = styled.button<{ isOutlined?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 5rem;
	background: ${({ theme, isOutlined }) =>
		isOutlined ? theme.colors.secondary1000 : theme.colors.primary};
	color: ${({ theme, isOutlined }) =>
		isOutlined ? theme.colors.primary : theme.colors.white1000};
	font-weight: 500;
	border-radius: 8px;
	border: ${({ theme, isOutlined }) =>
		isOutlined && `1px solid ${theme.colors.primary}`};
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

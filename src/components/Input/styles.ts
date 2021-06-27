import styled from "styled-components";

export const Container = styled.input`
	width: 100%;
	height: 5rem;
	border-radius: 8px;
	padding: 0 1.6rem;
	background: transparent;
	color: ${({ theme }) => theme.colors.gray600};
	border: 1px solid ${({ theme }) => theme.colors.gray200};
	transition: opacity 0.2s ease-out;

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

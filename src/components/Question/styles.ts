import styled from "styled-components";

export const Container = styled.li<{
	isAnswered?: boolean;
	isHighlighted?: boolean;
}>`
	background: ${({ theme, isHighlighted, isAnswered }) => {
		if (isHighlighted) {
			return theme.colors.secondary800;
		} else if (isAnswered) {
			return theme.colors.gray100;
		}

		return theme.colors.secondary950;
	}};
	border-radius: 8px;
	border: ${({ theme, isHighlighted }) =>
		isHighlighted
			? `1px solid ${theme.colors.primary}`
			: "1px solid transparent"};
	box-shadow: 0 2px 12px ${({ theme }) => theme.colors.black1000}d6;
	padding: 2.4rem;
	transition: background-color 0.2s ease-out, border 0.2s ease-out;

	& + & {
		margin-top: 0.8rem;
	}
`;

export const Content = styled.p`
	color: ${({ theme }) => theme.colors.gray600};
`;

export const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2.4rem;

	@media (max-width: 400px) {
		flex-direction: column-reverse;
		align-items: flex-start;
	}
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

export const UserName = styled.span<{
	isAnswered?: boolean;
	isHighlighted?: boolean;
}>`
	color: ${({ theme, isHighlighted, isAnswered }) =>
		isHighlighted || isAnswered ? theme.colors.gray600 : theme.colors.gray300};
	font-size: 1.4rem;
	margin-left: 0.8rem;
`;

export const ChildrenContainer = styled.div`
	display: flex;
	gap: 1.6rem;

	> div {
		display: flex;
		gap: 1.6rem;
	}

	@media (max-width: 400px) {
		width: 100%;
		align-items: flex-start;
		justify-content: space-between;

		> div {
			margin-bottom: 2rem;
		}
	}
`;

import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.li<{
	isAnswered?: boolean;
	isHighlighted?: boolean;
}>`
	background: ${({ isHighlighted, isAnswered }) => {
		if (isHighlighted) {
			return COLORS.white800;
		} else if (isAnswered) {
			return COLORS.gray100;
		}

		return COLORS.white950;
	}};
	border-radius: 8px;
	border: ${({ isHighlighted }) =>
		isHighlighted ? `1px solid ${COLORS.primary}` : "1px solid transparent"};
	box-shadow: 0 2px 12px ${COLORS.black1000}d6;
	padding: 2.4rem;
	transition: background-color 0.2s ease-out, border 0.2s ease-out;

	& + & {
		margin-top: 0.8rem;
	}
`;

export const Content = styled.p`
	color: ${COLORS.gray600};
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
	color: ${({ isHighlighted, isAnswered }) =>
		isHighlighted || isAnswered ? COLORS.gray600 : COLORS.gray300};
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

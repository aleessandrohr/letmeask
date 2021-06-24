import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.div`
	background: ${COLORS.white950};
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.84);
	padding: 2.4rem;

	& + & {
		margin-top: 0.8rem;
	}

	&:last-child {
		margin-bottom: 0.8rem;
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
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
`;

export const Img = styled.img`
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 50%;
`;

export const Name = styled.span`
	color: ${COLORS.gray300};
	font-size: 1.4rem;
	margin-left: 0.8rem;
`;

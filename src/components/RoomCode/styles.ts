import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.button`
	display: flex;
	height: 4rem;
	background: ${COLORS.white1000};
	border-radius: 8px;
	border: 1px solid ${COLORS.primary};
	overflow: hidden;
	cursor: pointer;
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background: ${COLORS.primary};
	padding: 0 1.2rem;
`;

export const Img = styled.img``;

export const Code = styled.span`
	display: block;
	align-self: center;
	flex: 1;
	width: 24rem;
	font-size: 1.4rem;
	font-weight: 500;
	padding: 0 1.6rem 0 1.2rem;
`;

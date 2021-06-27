import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	height: 4rem;
	background: ${({ theme }) => theme.colors.secondary1000};
	color: ${({ theme }) => theme.colors.gray600};
	border-radius: 8px;
	border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
	overflow: hidden;
	cursor: pointer;
	word-break: break-all;
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background: ${({ theme }) => theme.colors.primary};
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

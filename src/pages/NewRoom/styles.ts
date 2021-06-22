import { Link as ReactLink } from "react-router-dom";

import styled from "styled-components";

import { Button } from "components/Button";

import { COLORS } from "assets/colors";

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	min-height: 100vh;
	height: 100vh;
	max-height: 100vh;
`;

export const ContentContainer = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 8;
	padding: 0 3.2rem;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 32rem;
	align-items: stretch;
	text-align: center;
`;

export const LogoIcon = styled.img`
	align-self: center;
`;

export const CreateRoom = styled.h1`
	font-family: "Poppins", sans-serif;
	font-size: 2.4rem;
	margin: 6.4rem 0 2.4rem;
`;

export const Form = styled.form``;

export const Input = styled.input`
	width: 100%;
	height: 5rem;
	border-radius: 8px;
	padding: 0 1.6rem;
	background: ${COLORS.white1000};
	border: 1px solid ${COLORS.gray200};
`;

export const Submit = styled(Button)`
	width: 100%;
	margin-top: 1.6rem;
`;

export const RoomEnter = styled.p`
	font-size: 1.4rem;
	color: ${COLORS.gray300};
	margin-top: 1.6rem;
`;

export const Link = styled(ReactLink)`
	color: ${COLORS.pink500};
`;

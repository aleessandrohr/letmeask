import { Link as ReactLink } from "react-router-dom";

import styled from "styled-components";

import { Button } from "components/Button";
import { Input } from "components/Input";

import { COLORS } from "assets/colors";

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	min-height: 100vh;
	height: 100vh;
	max-height: 100vh;
	overflow-y: hidden;
`;

export const ContentContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 8;
	height: 100%;
	padding: 0 3.2rem;
	overflow-y: auto;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	width: 100%;
	max-width: 32rem;
	height: 100%;
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

export const RoomName = styled(Input)``;

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

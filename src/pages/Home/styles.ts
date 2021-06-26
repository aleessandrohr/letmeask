import styled, { css } from "styled-components";

import { Button } from "components/Button";
import { Input } from "components/Input";

import { COLORS } from "assets/colors";

const LineCSS = css`
	content: "";
	flex: 1;
	height: 1px;
	background: ${COLORS.gray200};
`;

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	min-height: 100vh;
	height: 100vh;
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

export const CreateRoom = styled(Button)`
	min-height: 5rem;
	background: ${COLORS.red500};
	margin-top: 6.4rem;
`;

export const GoogleIcon = styled.img`
	margin-right: 0.8rem;
`;

export const RoomEnter = styled.div`
	display: flex;
	align-items: center;
	color: ${COLORS.gray200};
	font-size: 1.4rem;
	margin: 3.2rem 0;

	&::before {
		${LineCSS}
		margin-right: 1.6rem;
	}

	&::after {
		${LineCSS}
		margin-left: 1.6rem;
	}
`;

export const Form = styled.form``;

export const Code = styled(Input)``;

export const Submit = styled(Button)`
	width: 100%;
	margin-top: 1.6rem;
`;

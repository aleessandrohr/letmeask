import styled, { css } from "styled-components";

import { Button } from "components/Button";
import { Input } from "components/Input";

import { LogoComponent, GoogleComponent } from "assets/images/svgs";

const LineCSS = css`
	content: "";
	flex: 1;
	height: 1px;
	background: ${({ theme }) => theme.colors.gray200};
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

export const LogoIcon = styled(LogoComponent)`
	align-self: center;

	> path:nth-child(n + 1):nth-child(-n + 5) {
		fill: ${({ theme }) => theme.colors.gray600};
	}
`;

export const CreateRoom = styled(Button)`
	min-height: 5rem;
	background: ${({ theme }) => theme.colors.red500};
	margin-top: 6.4rem;
`;

export const GoogleIcon = styled(GoogleComponent)`
	margin-right: 0.8rem;
`;

export const RoomEnter = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.gray200};
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

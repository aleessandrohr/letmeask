import { AiOutlineClose } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";

import styled from "styled-components";

import { User } from "types/user";

export const Container = styled.div`
	position: fixed;
	top: 1.5rem;
	right: 1.5rem;
	z-index: 100;
`;

export const Button = styled.button`
	background: transparent;
	color: ${({ theme }) => theme.colors.primary1000};
	cursor: pointer;
`;

export const MenuIcon = styled(FaBars)`
	font-size: 2.5rem;
`;

export const SideBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 75vw;
	max-width: 30rem;
	height: 100%;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.primary1000};
	padding: 2rem;
	overflow-y: auto;
`;

export const Row = styled.div<{ user?: User }>`
	display: flex;
	justify-content: ${({ user }) => (user ? "space-between" : "flex-end")};
	width: 100%;

	&:first-child {
		align-items: flex-start;
		margin-bottom: 2rem;
	}

	&:last-child {
		align-items: center;
	}
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const UserImg = styled.img`
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 50%;
`;

export const UserName = styled.span`
	color: ${({ theme }) => theme.colors.gray600};
	font-size: 1.4rem;
	font-weight: 500;
	margin: 0.8rem 0.8rem 0.8rem 0;
	word-break: break-word;
`;

export const CloseIcon = styled(AiOutlineClose)`
	font-size: 2.5rem;
`;

export const SignOutIcon = styled(VscSignOut)`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 2.5rem;
`;

export const MoonButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.gray50};
	border-radius: 50%;
	padding: 1rem;
	transition: color 0.2s ease-out;
`;

export const MoonIcon = styled(BiMoon)`
	font-size: 1.6rem;
`;

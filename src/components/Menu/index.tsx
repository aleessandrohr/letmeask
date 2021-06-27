import { useState } from "react";

import { SwipeableDrawer } from "@material-ui/core";

import { useAuth } from "hooks/useAuth";

import {
	Container,
	Button,
	MenuIcon,
	SideBar,
	Row,
	UserInfo,
	UserImg,
	UserName,
	CloseIcon,
	SignOutIcon,
	MoonButton,
	MoonIcon,
} from "./styles";

interface Props {
	theme: string;
	toggleTheme: () => void;
}

export const Menu: React.FC<Props> = ({ theme, toggleTheme }) => {
	const { user, signOut } = useAuth();
	const [visibility, setVisibility] = useState(false);

	return (
		<Container>
			<Button aria-label="Abrir menu" onClick={() => setVisibility(true)}>
				<MenuIcon />
			</Button>
			<SwipeableDrawer
				open={visibility}
				onOpen={() => setVisibility(true)}
				onClose={() => setVisibility(false)}
				disableSwipeToOpen
				anchor="right"
			>
				<SideBar>
					<Row user={user}>
						{user && (
							<UserInfo>
								<UserImg src={user.avatar} alt={user.name} />
								<UserName>{user.name}</UserName>
							</UserInfo>
						)}
						<Button
							aria-label="Fechar menu"
							onClick={() => setVisibility(false)}
						>
							<CloseIcon />
						</Button>
					</Row>
					<Row user={user}>
						{user && (
							<Button aria-label="Sair" onClick={signOut}>
								<SignOutIcon />
							</Button>
						)}
						<MoonButton
							aria-label={`Trocar o tema atual para ${
								theme === "light" ? "dark" : "light"
							}`}
							onClick={toggleTheme}
						>
							<MoonIcon />
						</MoonButton>
					</Row>
				</SideBar>
			</SwipeableDrawer>
		</Container>
	);
};

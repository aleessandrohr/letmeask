import React from "react";
import { toast } from "react-toastify";

import { ThemeProvider } from "styled-components";

import { Routes } from "pages/routes";

import { Menu } from "components/Menu";

import { usePersistedTheme } from "hooks/usePersistedTheme";

import { AuthProvider } from "contexts/auth";
import { ConnectedProvider } from "contexts/connected";

import { DARK } from "themes/dark";
import { LIGHT } from "themes/light";

import { GlobalStyle } from "./styles";

import "react-toastify/dist/ReactToastify.css";

toast.configure({
	position: "bottom-right",
	autoClose: 3000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	draggable: true,
	pauseOnHover: true,
});

export const App: React.FC = () => {
	const [theme, setTheme] = usePersistedTheme("theme", LIGHT.title);
	const currentTheme = theme === "light" ? LIGHT : DARK;

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ThemeProvider theme={currentTheme}>
			<ConnectedProvider>
				<AuthProvider>
					<Menu theme={theme} toggleTheme={toggleTheme} />
					<Routes />
				</AuthProvider>
			</ConnectedProvider>
			<GlobalStyle />
		</ThemeProvider>
	);
};

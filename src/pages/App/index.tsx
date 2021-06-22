import React from "react";

import { Routes } from "pages/routes";

import { GlobalStyle } from "./styles";

export const App: React.FC = () => (
	<>
		<Routes />
		<GlobalStyle />
	</>
);

import React from "react";
import { toast } from "react-toastify";

import { Routes } from "pages/routes";

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

export const App: React.FC = () => (
	<>
		<Routes />
		<GlobalStyle />
	</>
);

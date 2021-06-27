import { useContext } from "react";

import { ConnectedContext } from "contexts/connected";

export const useConnected = () => {
	const context = useContext(ConnectedContext);

	if (!context) {
		throw new Error("useConnected must be used within a ConnectedProvider");
	}

	return context;
};

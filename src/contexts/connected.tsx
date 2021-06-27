import { createContext, useState, useEffect } from "react";

import { database } from "services/firebase";

interface IConnectedContext {
	connected?: boolean;
}

export const ConnectedContext = createContext({} as IConnectedContext);

export const ConnectedProvider: React.FC = ({ children }) => {
	const [connected, setConnected] = useState();

	useEffect(() => {
		const connectedRef = database.ref(".info/connected");

		connectedRef.on("value", snap => setConnected(snap.val()));

		return () => connectedRef.off("value");
	}, []);

	return (
		<ConnectedContext.Provider value={{ connected }}>
			{children}
		</ConnectedContext.Provider>
	);
};

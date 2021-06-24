import { createContext, useState, useEffect } from "react";

import { Loading } from "components/Loading";

import { firebase, auth } from "services/firebase";

interface User {
	id: string;
	name: string;
	avatar: string;
}

interface IAuthContext {
	user?: User | null;
	signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>();

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-shadow
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				const { uid, displayName, photoURL } = user;

				if (!displayName || !photoURL) {
					throw new Error("Missing information from Google Account!");
				}

				setUser({
					id: uid,
					name: displayName,
					avatar: photoURL,
				});
			} else {
				setUser(null);
			}
		});

		return () => unsubscribe();
	}, []);

	const signInWithGoogle = async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		// eslint-disable-next-line @typescript-eslint/no-shadow
		const { user } = await auth.signInWithPopup(provider);

		if (user) {
			const { uid, displayName, photoURL } = user;

			if (!displayName || !photoURL) {
				throw new Error("Missing information from Google Account!");
			}

			setUser({
				id: uid,
				name: displayName,
				avatar: photoURL,
			});
		}
	};

	if (user === undefined) {
		return <Loading />;
	}

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle }}>
			{children}
		</AuthContext.Provider>
	);
};

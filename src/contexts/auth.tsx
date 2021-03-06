import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import { firebase, auth } from "services/firebase";

import { User } from "types/user";

interface IAuthContext {
	user?: User;
	signInWithGoogle: () => Promise<void>;
	signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User>();

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

	const signOut = async () => {
		const signOutConfirm = confirm("Tem certeza que deseja deslogar?");

		if (signOutConfirm) {
			await auth.signOut();
			toast.success("Deslogado com sucesso!");
		}
	};

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

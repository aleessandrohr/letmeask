import { useAuth } from "hooks/useAuth";

import { Container, SignOutIcon } from "./styles";

export const SignOut: React.FC = () => {
	const { user, signOut } = useAuth();

	if (!user) {
		return <></>;
	}

	return (
		<Container type="button" aria-label="Deslogar a conta" onClick={signOut}>
			<SignOutIcon />
		</Container>
	);
};

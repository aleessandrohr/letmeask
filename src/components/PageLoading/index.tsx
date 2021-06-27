import { BarLoader } from "react-spinners";

import { Container, LogoIcon } from "./styles";

export const PageLoading: React.FC = () => (
	<Container>
		<LogoIcon />
		<BarLoader />
	</Container>
);

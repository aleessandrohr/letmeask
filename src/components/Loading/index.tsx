import { BarLoader } from "react-spinners";

import { Logo } from "assets/images/svgs";

import { Container, LogoIcon } from "./styles";

export const Loading: React.FC = () => (
	<Container>
		<LogoIcon src={Logo} alt="Letmeask" />
		<BarLoader />
	</Container>
);

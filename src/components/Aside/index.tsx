import { Illustration } from "assets/images/svgs";

import { Container, IllustrationIcon, Strong, Text } from "./styles";

export const Aside: React.FC = () => (
	<Container>
		<IllustrationIcon
			src={Illustration}
			alt="Ilustração símbolizando perguntas e respostas"
		/>
		<Strong>Crie salas de Q&amp;A ao-vivo</Strong>
		<Text>Tire as dúvidas de sua audiência em tempo-real</Text>
	</Container>
);

import { toast } from "react-toastify";

import { Toast } from "components/Toast";

import { Copy } from "assets/images/svgs";

import { Container, ImgContainer, Img, Code } from "./styles";

interface Props {
	code: string;
}

export const RoomCode: React.FC<Props> = ({ code }) => {
	const copyRoomCodeToClipboard = () => {
		try {
			navigator.clipboard.writeText(code);
			toast.success("Código copiado com sucesso!");
		} catch {
			toast.error("Erro ao copiar o código!");
		}
	};

	return (
		<Container onClick={copyRoomCodeToClipboard}>
			<ImgContainer>
				<Img src={Copy} alt="Copiar o código da sala" />
			</ImgContainer>
			<Code>Sala #{code}</Code>
			<Toast />
		</Container>
	);
};

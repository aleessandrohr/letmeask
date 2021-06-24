import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isOutlined?: boolean;
}

export const Button: React.FC<Props> = ({ children, ...props }) => (
	<Container {...props}>{children}</Container>
);

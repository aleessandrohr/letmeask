import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	...props
}) => <Container {...props}>{children}</Container>;

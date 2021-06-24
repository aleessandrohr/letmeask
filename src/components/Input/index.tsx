import { InputHTMLAttributes, forwardRef, Ref } from "react";

import { Container } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = forwardRef(
	({ ...props }, ref: Ref<HTMLInputElement>) => (
		<Container ref={ref} {...props} />
	),
);

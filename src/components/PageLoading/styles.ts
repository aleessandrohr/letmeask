import styled from "styled-components";

import { LogoComponent } from "assets/images/svgs";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	padding: 5rem 0;

	> span {
		width: 40vw;
		max-width: 50rem;
		border-radius: 8px;
		background: ${({ theme }) => theme.colors.gray200};

		> span {
			background: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const LogoIcon = styled(LogoComponent)`
	margin-bottom: 5rem;

	> path:nth-child(n + 1):nth-child(-n + 5) {
		fill: ${({ theme }) => theme.colors.gray600};
	}
`;

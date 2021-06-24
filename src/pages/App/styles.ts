import { createGlobalStyle } from "styled-components";

import { COLORS } from "assets/colors";

export const GlobalStyle = createGlobalStyle`
	 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

		&:focus-visible {
			outline: 2px solid transparent;
		 	box-shadow: 0 0 0 2px ${COLORS.gray600};
		}
  }

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
		scroll-behavior: smooth;
  }

  body {
    background: ${COLORS.background};
    color: ${COLORS.gray600};
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

	a {
		color: ${COLORS.gray600};
		text-decoration: none;
	}

	button, input, textarea {
		font-size: 1.6rem;
		border: transparent;
	}

	ul {
		list-style: none;
	}

	::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}

	::-webkit-scrollbar-track {
		background: ${COLORS.gray50};
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb {
		background: ${COLORS.primary};
		border-radius: 4px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	@media (max-width: 768px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 55.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 52.5%;
    }
  }
`;

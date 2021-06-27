import "styled-components";

import { DARK } from "themes/dark";
import { LIGHT } from "themes/light";

type Theme = typeof DARK & typeof LIGHT;

declare module "styled-components" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends Theme {}
}

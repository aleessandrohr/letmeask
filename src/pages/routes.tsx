import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "pages/Home";
import { NewRoom } from "pages/NewRoom";

import { AuthProvider } from "contexts/auth";

export const Routes: React.FC = () => (
	<BrowserRouter>
		<AuthProvider>
			<Route path="/" exact component={Home} />
			<Route path="/rooms/new" component={NewRoom} />
		</AuthProvider>
	</BrowserRouter>
);

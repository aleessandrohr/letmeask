import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "pages/Home";
import { NewRoom } from "pages/NewRoom";
import { Room } from "pages/Room";

import { AuthProvider } from "contexts/auth";

export const Routes: React.FC = () => (
	<BrowserRouter>
		<AuthProvider>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/rooms/new" component={NewRoom} />
				<Route path="/rooms/:id" component={Room} />
			</Switch>
		</AuthProvider>
	</BrowserRouter>
);

import { ToastContainer, ToastContainerProps } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Toast: React.FC<ToastContainerProps> = ({ ...props }) => (
	<ToastContainer
		position="bottom-right"
		autoClose={3000}
		closeOnClick
		pauseOnFocusLoss
		draggable
		pauseOnHover
		{...props}
	/>
);

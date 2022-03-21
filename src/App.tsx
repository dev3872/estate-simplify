import { BrowserRouter } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";
function App() {
	return (
		<div>
			<BrowserRouter>
				<AppNavbar />
			</BrowserRouter>
		</div>
	);
}

export default App;

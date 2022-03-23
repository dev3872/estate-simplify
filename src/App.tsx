import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";
import "./App.css";
import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Help } from "./components/Help";
import ContactUs from "./components/ContactUs";
function App() {
	return (
		<div className="main-division">
			<BrowserRouter>
				<AppNavbar />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/help" element={<Help />} />
					<Route path="/about-us" element={<ContactUs />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

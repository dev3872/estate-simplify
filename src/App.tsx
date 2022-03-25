import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";
import "./App.css";
import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Help } from "./components/Help";
import ContactUs from "./components/ContactUs";
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Dashboard from "./components/Dashboard";
import { NotFound404 } from "./components/NotFound404";

interface Auth {
	isAuth: boolean;
	name: string;
	email: string;
}
function App() {
	const [token, setToken] = useState<string>("");
	const [auth, setAuth] = useState<Auth>({
		isAuth: false,
		name: "",
		email: "",
	});
	useEffect(() => {
		setToken(localStorage.getItem("token") || "");
	}, []);
	useEffect(() => {
		localStorage.setItem("token", token || "");
		verifyToken(token);
		function verifyToken(tokenTest: string) {
			var config: AxiosRequestConfig = {
				method: "GET",
				url: "https://flexi-app-server.herokuapp.com/api/auth",
				headers: {
					"x-auth-token": tokenTest,
				},
			};
			axios(config)
				.then((response: AxiosResponse) => {
					console.log(JSON.stringify(response.data));
					setAuth({
						isAuth: true,
						name: response.data.name,
						email: response.data.email,
					});
				})
				.catch((reason) => {
					console.log(reason);
				});
		}
	}, [token]);

	const changeToken = (newToken: string) => {
		setToken(newToken);
	};

	return (
		<div className="main-division">
			<BrowserRouter>
				<AppNavbar auth={auth.isAuth} />
				<Routes>
					<Route
						path="/"
						element={
							auth.isAuth ? (
								<Dashboard auth={auth} />
							) : (
								<Landing auth={auth.isAuth} />
							)
						}
					/>
					<Route
						path="/login"
						element={<Login auth={auth.isAuth} changeToken={changeToken} />}
					/>
					<Route
						path="/register"
						element={<Register changeToken={changeToken} auth={auth.isAuth} />}
					/>
					<Route path="/help" element={<Help />} />
					<Route path="/about-us" element={<ContactUs />} />
					<Route path="*" element={<NotFound404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

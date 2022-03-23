import React, { useState } from "react";
import {
	Paper,
	createStyles,
	TextInput,
	PasswordInput,
	Checkbox,
	Button,
	Title,
	Text,
} from "@mantine/core";
import { Link } from "react-router-dom";
import LoginImage from "../images/login1.svg";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useStyles = createStyles((theme) => ({
	wrapper: {
		height: "100vh",
		width: "100%",
		backgroundSize: "cover",
		backgroundImage: "url(" + LoginImage + ")",
	},

	form: {
		borderRight: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
		}`,
		height: "100%",
		maxWidth: 450,
		paddingTop: 80,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: "100%",
		},
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	logo: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		width: 120,
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
	},
}));
interface registerDataInterface {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	password2: string;
}
export function Register() {
	const { classes } = useStyles();
	const [registerData, setRegisterData] = useState<registerDataInterface>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		password2: "",
	});
	const registerUser = () => {
		console.table(registerData);
		var data = JSON.stringify({
			name: registerData.firstName + " " + registerData.lastName,
			email: registerData.email,
			password: registerData.password,
			password2: registerData.password2,
		});
		var config: AxiosRequestConfig = {
			method: "POST",
			url: "https://flexi-app-server.herokuapp.com/api/users",
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};
		axios(config)
			.then((response: AxiosResponse) => {
				console.log(JSON.stringify(response.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const changeRegisterData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRegisterData({
			...registerData,
			[event.target.name]: event.target.value,
		});
	};
	return (
		<div className={classes.wrapper}>
			<Paper className={classes.form} radius={0} p={30}>
				<Title
					order={2}
					className={classes.title}
					align="center"
					mt="md"
					mb={50}
				>
					Register
				</Title>
				<TextInput
					label="First Name"
					name="firstName"
					placeholder="First name"
					size="md"
					onChange={changeRegisterData}
				/>
				<TextInput
					label="Last Name"
					name="lastName"
					placeholder="Last name"
					mt="md"
					size="md"
					onChange={changeRegisterData}
				/>
				<TextInput
					label="Email address"
					name="email"
					placeholder="hello@gmail.com"
					mt="md"
					size="md"
					onChange={changeRegisterData}
				/>
				<PasswordInput
					label="Password"
					name="password"
					placeholder="Your password"
					mt="md"
					size="md"
					onChange={changeRegisterData}
				/>
				<PasswordInput
					label="Password2"
					name="password2"
					placeholder="Confirm Password"
					mt="md"
					size="md"
					onChange={changeRegisterData}
				/>
				<Checkbox label="Keep me logged in" mt="xl" size="md" />
				<Button fullWidth mt="xl" size="md" onClick={registerUser}>
					Register
				</Button>

				<Text align="center" mt="md">
					Have an account? <Link to="/login">Login</Link>
				</Text>
			</Paper>
		</div>
	);
}

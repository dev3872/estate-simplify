import React, { useEffect, useState } from "react";
import {
	Paper,
	createStyles,
	TextInput,
	PasswordInput,
	Checkbox,
	Button,
	Title,
	Text,
	Loader,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../images/login1.svg";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useNotifications } from "@mantine/notifications";
import { X } from "tabler-icons-react";

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
	loaderVisible: {
		position: "absolute",
		left: "200px",
		top: "350px",
		height: "500px",
		zIndex: 10,
	},
	loaderHidden: {
		display: "none",
	},
}));
interface loginDataInterface {
	email: string;
	password: string;
}
interface FunctionalProps {
	changeToken: (newToken: string) => void;
	auth: boolean;
}
export const Login: React.FC<FunctionalProps> = (props: FunctionalProps) => {
	const { classes } = useStyles();
	const navigate = useNavigate();
	const [visible, setVisible] = useState(false);
	const [loginData, setLoginData] = useState<loginDataInterface>({
		email: "",
		password: "",
	});
	const notifications = useNotifications();
	useEffect(() => {
		if (props.auth === true) {
			navigate("/");
		}
	}, [props.auth, navigate]);
	const loginUser = () => {
		setVisible(true);
		notifications.showNotification({
			title: "Data sent to server",
			message: "Data Successfully sent to server",
		});
		var data = JSON.stringify({
			email: loginData.email,
			password: loginData.password,
		});
		console.log(data);
		var config: AxiosRequestConfig = {
			method: "POST",
			url: "https://flexi-app-server.herokuapp.com/api/auth",
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};
		axios(config)
			.then((response: AxiosResponse) => {
				props.changeToken(response.data.token);
				notifications.showNotification({
					title: "Logged In Successfully",
					message: `Welcome to Estate Simplify`,
				});
				resetLoginData();
				setVisible(false);
			})
			.catch((reason) => {
				setVisible(false);
				console.table(reason.response.data.errors);
				reason.response.data.errors.map(
					(error: {
						location: string;
						msg: string;
						param: string;
						value: string;
					}) => {
						return notifications.showNotification({
							title: `${error.param}`,
							message: `${error.msg}`,
							color: "red",
							icon: <X />,
							autoClose: 5000,
							style: { backgroundColor: "red" },
						});
					}
				);
			});
	};
	const changeLoginData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLoginData({
			...loginData,
			[event.target.name]: event.target.value,
		});
	};
	const resetLoginData = () => {
		setLoginData({
			email: "",
			password: "",
		});
	};

	return (
		<div className={classes.wrapper}>
			<div className={visible ? classes.loaderVisible : classes.loaderHidden}>
				<Loader variant="bars" size={"xl"} />
			</div>
			<Paper className={classes.form} radius={0} p={30}>
				<Title
					order={2}
					className={classes.title}
					align="center"
					mt="md"
					mb={50}
				>
					Login
				</Title>

				<TextInput
					label="Email address"
					placeholder="hello@gmail.com"
					size="md"
					name="email"
					onChange={changeLoginData}
				/>
				<PasswordInput
					label="Password"
					placeholder="Your password"
					mt="md"
					size="md"
					name="password"
					onChange={changeLoginData}
				/>
				<Checkbox label="Keep me logged in" mt="xl" size="md" />
				<Button fullWidth mt="xl" size="md" onClick={loginUser}>
					Login
				</Button>

				<Text align="center" mt="md">
					Create a new account? <Link to="/register">Register</Link>
				</Text>
			</Paper>
		</div>
	);
};

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
	Notification,
} from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../images/login1.svg";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Check, X } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	wrapper: {
		height: "100vh",
		width: "100%",
		position: "relative",
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
interface registerDataInterface {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	password2: string;
}
interface FunctionalProps {
	changeToken: (newToken: string) => void;
	auth: boolean;
}
export const Register: React.FC<FunctionalProps> = (props: FunctionalProps) => {
	const { classes } = useStyles();
	const [registerData, setRegisterData] = useState<registerDataInterface>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		password2: "",
	});
	const [visible, setVisible] = useState<boolean>(false);
	const [notification, setNotification] = useState<boolean>(false);
	const notifications = useNotifications();
	const navigate = useNavigate();
	useEffect(() => {
	  if(props.auth===true){
		  navigate('/');
	  }
	}, [props.auth,navigate])
	
	const registerUser = () => {
		setVisible(true);
		notifications.showNotification({
			title: "Data sent to server",
			message: "Data Successfully sent to server",
		});
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
				props.changeToken(response.data.token);
				setVisible(false);
				resetRegisterData();
				setNotification(true);
				notifications.showNotification({
					title: "Registration Success",
					message: "Log in your account. 🤥",
				});
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
	const changeRegisterData = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRegisterData({
			...registerData,
			[event.target.name]: event.target.value,
		});
	};
	const resetRegisterData = () => {
		setRegisterData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			password2: "",
		});
	};

	return (
		<div className={classes.wrapper}>
			<div className={visible ? classes.loaderVisible : classes.loaderHidden}>
				<Loader variant="bars" size={"xl"} />
			</div>
			<div
				className={notification ? classes.loaderVisible : classes.loaderHidden}
			>
				<Notification
					onClose={() => setNotification(false)}
					icon={<Check size={18} />}
					color="teal"
					title="User Registered"
					sx={(theme) => ({
						backgroundColor: theme.colors.gray[0],
						"&:hover": {
							backgroundColor: theme.colors.gray[1],
						},
					})}
				>
					{" "}
					Login and begin to post Property
				</Notification>
			</div>
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
					value={registerData.firstName}
					onChange={changeRegisterData}
				/>
				<TextInput
					label="Last Name"
					name="lastName"
					placeholder="Last name"
					mt="md"
					size="md"
					value={registerData.lastName}
					onChange={changeRegisterData}
				/>
				<TextInput
					label="Email address"
					name="email"
					placeholder="hello@gmail.com"
					mt="md"
					size="md"
					value={registerData.email}
					onChange={changeRegisterData}
				/>
				<PasswordInput
					label="Password"
					name="password"
					placeholder="Your password"
					mt="md"
					size="md"
					value={registerData.password}
					onChange={changeRegisterData}
				/>
				<PasswordInput
					label="Password2"
					name="password2"
					placeholder="Confirm Password"
					mt="md"
					size="md"
					value={registerData.password2}
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
};

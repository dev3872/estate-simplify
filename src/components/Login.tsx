import React from "react";
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

export function Login() {
	const { classes } = useStyles();
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
					Login
				</Title>

				<TextInput
					label="Email address"
					placeholder="hello@gmail.com"
					size="md"
				/>
				<PasswordInput
					label="Password"
					placeholder="Your password"
					mt="md"
					size="md"
				/>
				<Checkbox label="Keep me logged in" mt="xl" size="md" />
				<Button fullWidth mt="xl" size="md">
					Login
				</Button>

				<Text align="center" mt="md">
					Create a new account? <Link to="/register">Register</Link>
				</Text>
			</Paper>
		</div>
	);
}

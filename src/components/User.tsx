import React from "react";
import { Avatar, Text, Button, Paper, createStyles } from "@mantine/core";

interface UserInfoActionProps {
	avatar: string;
	name: string;
	email: string;
	job: string;
}
const useStyles = createStyles((theme) => ({
	user: {
		margin: theme.spacing.lg * 4,
		minWidth: 250,
		maxHeight: 300,
		[theme.fn.smallerThan("md")]: {
			margin: theme.spacing.lg * 1,
		},
	},
}));

export function User({ avatar, name, email, job }: UserInfoActionProps) {
	const { classes } = useStyles();
	return (
		<Paper
			className={classes.user}
			radius="md"
			withBorder
			p="lg"
			sx={(theme) => ({
				backgroundColor:
					theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
			})}
		>
			<Avatar src={avatar} size={120} radius={120} mx="auto" />
			<Text align="center" size="lg" weight={500} mt="md">
				{name}
			</Text>
			<Text align="center" color="dimmed" size="sm">
				{email} • {job}
			</Text>

			<Button variant="default" fullWidth mt="md">
				Send message
			</Button>
		</Paper>
	);
}

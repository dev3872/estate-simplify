import React from "react";
import {
	createStyles,
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
} from "@mantine/core";
import { Check } from "tabler-icons-react";
import headImage from "../images/result.svg";
import { Link } from "react-router-dom";
const useStyles = createStyles((theme) => ({
	inner: {
		display: "flex",
		justifyContent: "space-between",
		paddingTop: theme.spacing.xl * 6,
		paddingBottom: theme.spacing.xl * 4,
		paddingLeft: theme.spacing.xl * 6,
	},

	content: {
		maxWidth: 600,
		margin: theme.spacing.xl,
		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 44,
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan("xs")]: {
			fontSize: 28,
		},
	},

	control: {
		[theme.fn.smallerThan("xs")]: {
			flex: 1,
		},
	},

	image: {
		width: 1000,
		padding: 0,
		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},

	highlight: {
		position: "relative",
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
				: theme.colors[theme.primaryColor][0],
		borderRadius: theme.radius.sm,
		padding: "4px 12px",
	},
}));

export function Landing(props: { auth: boolean }) {
	const { classes } = useStyles();
	return (
		<div>
			<Container>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							A <span className={classes.highlight}>modern</span> React <br />{" "}
							components library
						</Title>
						<Text color="dimmed" mt="md">
							Build fully functional accessible web applications faster than
							ever – Mantine includes more than 120 customizable components and
							hooks to cover you in any situation
						</Text>

						<List
							mt={30}
							spacing="sm"
							size="sm"
							icon={
								<ThemeIcon size={20} radius="xl">
									<Check size={12} />
								</ThemeIcon>
							}
						>
							<List.Item>
								<b>TypeScript based</b> – build type safe applications, all
								components and hooks export types
							</List.Item>
							<List.Item>
								<b>Free and open source</b> – all packages have MIT license, you
								can use Mantine in any project
							</List.Item>
							<List.Item>
								<b>No annoying focus ring</b> – focus ring will appear only when
								user navigates with keyboard
							</List.Item>
						</List>

						<Group mt={30}>
							<Button radius="xl" size="md" className={classes.control}>
								Read More
							</Button>
							<Button
								variant="default"
								radius="xl"
								size="md"
								className={classes.control}
							>
								<Link to="register">Register</Link>
							</Button>
						</Group>
					</div>
					<Image src={headImage} className={classes.image} />
				</div>
			</Container>
		</div>
	);
}

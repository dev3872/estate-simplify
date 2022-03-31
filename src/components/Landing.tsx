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
						<Title className={classes.title}>FlexiAbode</Title>
						<Text color="dimmed" mt="md">
							Online FlexiAbode is a web based application where Property Owner,
							Contractors and Consumers come forward together to manage their
							property. It allows an easy and flexible way to communicate
							property between Seller and User. Sellers can post his property
							for Sell, Rent and P.G. Users interested can look through the
							property by using filters and contact Owner.
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
								<b>Secure</b> – We make sure your data is used solely for the
								purpose specified by you.
							</List.Item>
							<List.Item>
								<b>Free</b> – Never a dime is charged, its free now and will
								always be free
							</List.Item>
							<List.Item>
								<b>Search without Login</b> – Stay annonymous? we respect your
								desire. Search your dream location site without creating an
								account.
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

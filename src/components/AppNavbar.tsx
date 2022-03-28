import React, { useState } from "react";
import {
	createStyles,
	Navbar,
	UnstyledButton,
	Tooltip,
	Title,
} from "@mantine/core";
import {
	Home2,
	User,
	Settings,
	Search,
	AddressBook,
	Plus,
} from "tabler-icons-react";
import { HomeLogo } from "../images/Logo";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
	wrapper: {
		display: "flex",
	},

	aside: {
		flex: "0 0 60px",
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderRight: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
		}`,
	},

	main: {
		flex: 1,
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[0],
	},

	mainLink: {
		width: 44,
		height: 44,
		borderRadius: theme.radius.md,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[5]
					: theme.colors.gray[0],
		},
	},

	mainLinkActive: {
		"&, &:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
					: theme.colors[theme.primaryColor][0],
			color:
				theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 7],
		},
	},

	title: {
		boxSizing: "border-box",
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: theme.spacing.xl,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		padding: theme.spacing.md,
		paddingTop: 18,
		height: 60,
		borderBottom: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
		}`,
	},

	logo: {
		boxSizing: "border-box",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		height: 60,
		paddingTop: theme.spacing.md,
		borderBottom: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
		}`,
		marginBottom: theme.spacing.xl,
	},

	link: {
		boxSizing: "border-box",
		display: "block",
		textDecoration: "none",
		borderTopRightRadius: theme.radius.md,
		borderBottomRightRadius: theme.radius.md,
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		padding: `0 ${theme.spacing.md}px`,
		fontSize: theme.fontSizes.sm,
		marginRight: theme.spacing.md,
		fontWeight: 500,
		height: 44,
		lineHeight: "44px",

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[5]
					: theme.colors.gray[1],
			color: theme.colorScheme === "dark" ? theme.white : theme.black,
		},
	},

	linkActive: {
		"&, &:hover": {
			borderLeftColor:
				theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
			backgroundColor:
				theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
			color: theme.white,
		},
	},
}));

interface FunctionalProps {
	auth: boolean;
}
export const AppNavbar: React.FC<FunctionalProps> = (
	props: FunctionalProps
) => {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState({ index: 0, name: "Home" });
	const [activeLink, setActiveLink] = useState(
		props.auth ? "Dashboard" : "Home"
	);

	const mainLinksMockdata = props.auth
		? [
				{ icon: Home2, label: "Home" },
				{ icon: User, label: "Account" },
				{ icon: Settings, label: "Settings" },
				{ icon: Plus, label: "New" },
				{ icon: AddressBook, label: "List" },
				{ icon: Search, label: "Search" },
		  ]
		: [
				{ icon: Home2, label: "Home" },
				{ icon: User, label: "Account" },
				{ icon: Settings, label: "Settings" },
		  ];

	const linksdata = [
		{
			name: "Home",
			values: props.auth
				? [{ valueName: "Dashboard", valueLink: "/" }]
				: [{ valueName: "Home", valueLink: "/" }],
		},
		{
			name: "Account",
			values: props.auth
				? [
						{ valueName: "Profile", valueLink: "/profile" },
						{ valueName: "Edit Profile", valueLink: "/edit-profile" },
						{ valueName: "My Contacts", valueLink: "/contacts" },
						{ valueName: "Messages", valueLink: "/messages" },
						{ valueName: "Logout", valueLink: "/logout" },
				  ]
				: [
						{ valueName: "Login", valueLink: "/login" },
						{ valueName: "Register", valueLink: "/register" },
				  ],
		},
		{
			name: "Settings",
			values: props.auth
				? [
						{ valueName: "Theme", valueLink: "/theme" },
						{ valueName: "Help", valueLink: "/help" },
						{ valueName: "About Us", valueLink: "/about-us" },
				  ]
				: [
						{ valueName: "Help", valueLink: "/help" },
						{ valueName: "About Us", valueLink: "/about-us" },
				  ],
		},
		{
			name: "New",
			values: [
				{
					valueName: "Residential Property",
					valueLink: "/post-residential-property",
				},
				{ valueName: "Commercial Property", valueLink: "/commercial-search" },
			],
		},
		{
			name: "List",
			values: [
				{ valueName: "Near me", valueLink: "/vicinity-properties" },
				{ valueName: "Posted By me", valueLink: "/my-properties" },
			],
		},
		{
			name: "Search",
			values: [
				{ valueName: "Post Property", valueLink: "/post-property" },
				{ valueName: "Rent Property", valueLink: "/rent-property" },
			],
		},
	];
	const mainLinks = mainLinksMockdata.map((link, index) => (
		<Tooltip
			label={link.label}
			position="right"
			withArrow
			transitionDuration={0}
			key={link.label}
		>
			<UnstyledButton
				onClick={() => setActive({ index: index, name: link.label })}
				className={cx(classes.mainLink, {
					[classes.mainLinkActive]: link.label === active.name,
				})}
			>
				<link.icon />
			</UnstyledButton>
		</Tooltip>
	));

	const links = linksdata[active.index].values.map((link) => (
		<Link
			className={cx(classes.link, {
				[classes.linkActive]: activeLink === link.valueName,
			})}
			to={link.valueLink}
			onClick={(event) => {
				setActiveLink(link.valueName);
			}}
			key={link.valueName}
		>
			{link.valueName}
		</Link>
	));

	return (
		<Navbar height={"100vh"} sx={{ width: "300px" }}>
			<Navbar.Section grow className={classes.wrapper}>
				<div className={classes.aside}>
					<Link to="/">
						{" "}
						<div className={classes.logo}>
							<HomeLogo />
						</div>
					</Link>
					{mainLinks}
				</div>
				<div className={classes.main}>
					<Title order={4} className={classes.title}>
						{active.name}
					</Title>

					{links}
				</div>
			</Navbar.Section>
		</Navbar>
	);
};

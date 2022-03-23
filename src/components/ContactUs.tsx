import { Container, createStyles } from "@mantine/core";
import { User } from "./User";
var data = [
	{
		avatar:
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
		name: "Rohit Bhatt",
		email: "jsdev@student.iul.ac.in",
		job: "Sleep all day",
	},
	{
		avatar:
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
		name: "Pankaj Yadav",
		email: "pankaj@student.iul.ac.in",
		job: "Earn all day",
	},
	{
		avatar:
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
		name: "Nirnant Verma",
		email: "nijju@student.iul.ac.in",
		job: "Eat all day",
	},
];
const useStyles = createStyles((theme) => ({
	wrapper: {
		display: "flex",
        height:'100vh',
		justifyContent: "space-around",
		[theme.fn.smallerThan("md")]: {
			flexDirection: "column",
            overflowY:'scroll'
		},
	},
}));
export default function ContactUs() {
	const { classes } = useStyles();
	return (
		<Container className={classes.wrapper}>
			{data.map((user, index) => {
				return (
					<User
                        key={index}
						avatar={user.avatar}
						name={user.name}
						email={user.email}
						job={user.job}
					/>
				);
			})}
		</Container>
	);
}

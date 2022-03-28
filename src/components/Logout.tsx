import { createStyles, Image } from "@mantine/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoutImage from "../images/logout.png";
interface FunctionalProps {
	changeToken: (newToken: string) => void;
	auth: boolean;
}
const useStyles = createStyles((theme) => ({
	wrapper: {
		display: "flex",
		height: "100vh",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 440,
		margin: "auto",
		"&:hover": {
			cursor: "pointer",
		},
	},
}));
export const Logout: React.FC<FunctionalProps> = (props: FunctionalProps) => {
	const { classes } = useStyles();
	const logoutUser = () => {
		localStorage.removeItem("token");
		props.changeToken("");
	};
	const navigate = useNavigate();
	useEffect(() => {
		if (props.auth === false) navigate("/");
	});

	return (
		<div className={classes.wrapper}>
			<div className={classes.image} onClick={logoutUser}>
				<Image radius="md" src={logoutImage} alt="Random unsplash image" />
			</div>
		</div>
	);
};

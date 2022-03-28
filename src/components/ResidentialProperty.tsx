import {
	Grid,
	createStyles,
	Col,
	MantineTheme,
	Timeline,
	Text,
} from "@mantine/core";
import { useEffect } from "react";
import { NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import { ListingFor, ReraCertification, UserType } from "./NewPropertyComponents";

interface FunctionalProps {
	auth: boolean;
}
interface residentialPropertyStepType {
	title: string;
	text: string;
	link: string;
	completed: boolean;
}
const ResidentialPropertySteps: residentialPropertyStepType[] = [
	{
		title: "User Type",
		text: "Select User Type",
		link: "user-type",
		completed: true,
	},
	{
		title: "Listing for User",
		text: "Select required Categories",
		link: "listing-for",
		completed: true,
	},{
        title: "Select Options",
        text:"Select necessory options",
        link:"rera-certification",
        completed:false,
    },
	{
		title: "Property Type",
		text: "",
		link: "",
		completed: false,
	},
	{
		title: "Location Detail",
		text: "",
		link: "",
		completed: false,
	},
	{
		title: "Property Detail",
		text: "",
		link: "",
		completed: false,
	},
	{
		title: "Images",
		text: "",
		link: "",
		completed: false,
	},
	{
		title: "Furnishing",
		text: "",
		link: "",
		completed: false,
	},
	{
		title: "Amenities",
		text: "",
		link: "",
		completed: false,
	},
	{
		title: "Pricing",
		text: "",
		link: "",
		completed: false,
	},
];

const useStyles = createStyles((theme: MantineTheme) => ({
	wrapper: {
		display: "flex",
		paddingBottom: theme.spacing.xl * 4,
		width: "100%",
	},
	timeline: {
		display: "flex",
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		marginTop: 100,
		marginLeft: 50,
	},
}));
export const ResidentialProperty: React.FC<FunctionalProps> = (
	props: FunctionalProps
) => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!props.auth) navigate("/");
	}, [props.auth, navigate]);

	const { classes } = useStyles();
	return (
		<Grid gutter={0} className={classes.wrapper}>
			<Col span={12} xl={3} lg={3}>
				{residentialTimeLine(classes.timeline, navigate)}
			</Col>
			<Col span={12} xl={9} lg={9}>
				<Routes>
					<Route path="/user-type" element={<UserType />} />
					<Route path="/listing-for" element={<ListingFor />} />
                    <Route path="/rera-certification" element={<ReraCertification />} />
				</Routes>
			</Col>
		</Grid>
	);
};

function residentialTimeLine(timeline: string, navigate: NavigateFunction) {
	return (
		<Timeline className={timeline} active={4}>
			{ResidentialPropertySteps.map((residentialPropertyStep, index) => {
				return (
					<Timeline.Item
						key={index}
						color={residentialPropertyStep.completed ? "blue" : "red"}
						title={residentialPropertyStep.title}
						onClick={() =>
							navigate(
								`/post-residential-property/${residentialPropertyStep.link}`
							)
						}
						bulletSize={24}
					>
						<Text color="dimmed" size="sm">
							{residentialPropertyStep.text}
						</Text>
					</Timeline.Item>
				);
			})}
		</Timeline>
	);
}

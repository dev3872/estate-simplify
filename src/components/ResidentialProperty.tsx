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
import {
	AmenitiesDetails,
	FurnishingDetails,
	ImagesDetail,
	ListingFor,
	LocationDetail,
	PropertyDetail,
	PropertyForRent,
	PropertyForSharePG,
	PropertyType,
	ReraCertification,
	UserType,
} from "./NewPropertyComponents";

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
	},
	{
		title: "Select Options",
		text: "Select necessory options",
		link: "property-for",
		completed: false,
	},
	{
		title: "Property Type",
		text: "Select Property Type",
		link: "property-type",
		completed: false,
	},
	{
		title: "Location Detail",
		text: "Select Location Detail",
		link: "location-detail",
		completed: false,
	},
	{
		title: "Property Detail",
		text: "Enter Property Detail",
		link: "property-detail",
		completed: false,
	},
	{
		title: "Images",
		text: "Upload Property Images",
		link: "images-detail",
		completed: false,
	},
	{
		title: "Furnishing",
		text: "Select Furnishing",
		link: "furnishing-detail",
		completed: false,
	},
	{
		title: "Amenities",
		text: "Select Amenities",
		link: "amenities-detail",
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
					<Route path="/property-for" element={<PropertyForSharePG />} />
					<Route path="/property-type" element={<PropertyType />} />
					<Route path="/location-detail" element={<LocationDetail />} />
					<Route path="/property-detail" element={<PropertyDetail />} />
					<Route path="/images-detail" element={<ImagesDetail />} />
					<Route path="/furnishing-detail" element={<FurnishingDetails />} />
					<Route path="/amenities-detail" element={<AmenitiesDetails />} />
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

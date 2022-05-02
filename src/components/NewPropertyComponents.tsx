import {
	Badge,
	Blockquote,
	Card,
	Checkbox,
	Chip,
	Chips,
	Col,
	createStyles,
	Grid,
	Group,
	Image,
	Input,
	Select,
	Switch,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { useState } from "react";
const owner: string = require("../images/owner.jpg");
const builder: string = require("../images/builder.jpg");
const dealer: string = require("../images/dealer.jpg");
const roommate: string = require("../images/roommate.jpg");
const sell: string = require("../images/sell.jpg");
const rent: string = require("../images/rent.jpg");
const pg: string = require("../images/pg.jpg");
const share: string = require("../images/share.jpg");
const useStyles = createStyles((theme) => ({
	wrapper: {
		width: "70%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: 50,
	},
	colClass: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
	bannerWrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "70%",
		height: "100%",
	},
	bannerCard: {
		margin: "5px 0px 5px 0px",
		padding: "0px",
	},
	bannerGrid: {
		display: "flex",
		padding: "0px",
	},
	bannerItem: {
		backgroundColor: "#F8F9FA",
		margin: "0px",
		padding: "0px",
	},
	bannerImage: {
		padding: "0px",
	},
	reraWrapper: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
	},
	reraInputElements: {
		width: "70%",
	},
	checkboxClass: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
	},
	selectClass: {
		width: "50%",
		marginTop: "30px",
	},
	chipsPropertyType: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		width: "50%",
	},
	locationDetails: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		width: "50%",
	},
	propertyDetails: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		width: "75%",
	},
}));

const UserTypeData: {
	title: string;
	image: string;
	check: boolean;
}[] = [
	{ title: "Owner", image: owner, check: false },
	{ title: "Dealer", image: dealer, check: false },
	{ title: "Builder", image: builder, check: false },
	{ title: "Roommate", image: roommate, check: false },
];
const listingForData: {
	task: string;
	title: string;
	image: string;
	check: boolean;
}[] = [
	{
		task: "Sell",
		title:
			"Ready to Sell and move out? We will help you get the best price on the market. Put the tea to brew while you fill in the details. Watch us make it happen.",
		image: sell,
		check: false,
	},
	{
		task: "Rent",
		title:
			"We make sure your property is in right hands. Decide your desired tenents age and gender. Now sit back and relax.",
		image: rent,
		check: false,
	},
	{
		task: "Share",
		title: "Looking for a roommate? We got your back.",
		image: pg,
		check: false,
	},
	{
		task: "PG",
		title:
			"Deciding to set up a hostel for students or a hub for developers to dwell in. We are here to help",
		image: share,
		check: false,
	},
];
export const UserType = () => {
	const { classes } = useStyles();
	return (
		<Grid className={classes.wrapper} gutter={0}>
			{UserTypeData.map((userData, index) => {
				return (
					<Col key={index} className={classes.colClass} offset={1} span={4}>
						<OwnerType
							title={userData.title}
							image={userData.image}
							check={userData.check}
						/>
					</Col>
				);
			})}
		</Grid>
	);
};
export const ListingFor = () => {
	const { classes } = useStyles();
	return (
		<div className={classes.bannerWrapper}>
			{listingForData.map((listingData, index) => {
				return (
					<Card shadow="sm" m="md" key={index}>
						<Grid className={classes.bannerGrid}>
							<Col className={classes.bannerItem} span={8}>
								<Title order={1}>{listingData.task}</Title>
								<Blockquote cite="-Experts">{listingData.title}</Blockquote>
							</Col>
							<Col className={classes.bannerImage} span={4}>
								<Image
									src={listingData.image}
									height={200}
									alt={listingData.title}
								/>
							</Col>
						</Grid>
					</Card>
				);
			})}
		</div>
	);
};
export const OwnerType = (props: {
	title: string;
	image: string;
	check: boolean;
}) => {
	return (
		<div key={props.title} style={{ width: 370, margin: "auto" }}>
			<Card shadow="sm" p="lg" m="lg">
				<Card.Section>
					<Image src={props.image} height={200} alt="Norway" />
				</Card.Section>

				<Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
					<Text weight={500}>{props.title}</Text>
					<Badge color="pink" variant="light">
						On Sale
					</Badge>
				</Group>
			</Card>
		</div>
	);
};
export const ReraCertification = () => {
	const { classes } = useStyles();
	return (
		<div className={classes.reraWrapper}>
			<Switch label="My property has Rera Certification" size="md" />
			<TextInput
				className={classes.reraInputElements}
				placeholder="Certification ID"
				label="Certification ID"
				description="Enter your Rera Certification ID"
				error="Required"
				required
			/>
			<TextInput
				className={classes.reraInputElements}
				placeholder="Promoter Name"
				label="Promoter Name"
				description="Project promoted by builder"
				required
			/>
			<TextInput
				className={classes.reraInputElements}
				placeholder="Project Name"
				label="Project"
				required
			/>
		</div>
	);
};
export const PropertyForRent = () => {
	const { classes } = useStyles();
	const [checked, setChecked] = useState(false);
	return (
		<>
			<div className={classes.checkboxClass}>
				<Checkbox
					style={{ margin: "10px" }}
					size="xl"
					label="Family"
					checked={checked}
					onChange={(event) => setChecked(event.currentTarget.checked)}
				/>
				<Checkbox
					style={{ margin: "10px" }}
					size="xl"
					label="Single Men"
					checked={checked}
					onChange={(event) => setChecked(event.currentTarget.checked)}
				/>
				<Checkbox
					style={{ margin: "10px" }}
					size="xl"
					label="Single Women"
					checked={checked}
					onChange={(event) => setChecked(event.currentTarget.checked)}
				/>
				<Checkbox
					style={{ margin: "10px" }}
					size="xl"
					label="All"
					checked={checked}
					onChange={(event) => setChecked(event.currentTarget.checked)}
				/>
				<Select
					size="xl"
					className={classes.selectClass}
					label="Agreement Type"
					placeholder="Pick one"
					data={[
						{ value: "Company Lease", label: "Company Lease" },
						{ value: "Any", label: "Any" },
					]}
				/>
			</div>
		</>
	);
};
export const PropertyForSharePG = () => {
	const { classes } = useStyles();
	const [checked, setChecked] = useState(false);
	return (
		<>
			<div className={classes.checkboxClass}>
				<Checkbox
					style={{ margin: "10px" }}
					size="xl"
					label="Girls"
					checked={checked}
					onChange={(event) => setChecked(event.currentTarget.checked)}
				/>
				<Checkbox
					style={{ margin: "10px" }}
					size="xl"
					label="Boys"
					checked={checked}
					onChange={(event) => setChecked(event.currentTarget.checked)}
				/>
				<Checkbox
					style={{ margin: "10px" }}
					size="xl"
					label="Both"
					checked={checked}
					onChange={(event) => setChecked(event.currentTarget.checked)}
				/>
			</div>
		</>
	);
};
export const PropertyType = () => {
	const { classes } = useStyles();
	const [value, setValue] = useState("react");
	const residential = [
		"Residential Apartment",
		"Farm House",
		"Serviced Apartment",
		"Independent Villa/House",
		"Independent Builder Floor",
		"Studio Apartment",
		"Residential Land",
		"Other",
	];
	return (
		<div className={classes.chipsPropertyType}>
			<Chips multiple={false} value={value} onChange={setValue}>
				{residential.map((propertyType) => (
					<Chip value={propertyType}>{propertyType}</Chip>
				))}
			</Chips>
		</div>
	);
};
export const LocationDetail = () => {
	const { classes } = useStyles();
	return (
		<div className={classes.locationDetails}>
			<Grid>
				<Grid.Col span={6}>
					<Input placeholder="State" />
				</Grid.Col>
				<Grid.Col span={6}>
					<Input placeholder="City" />
				</Grid.Col>
				<Grid.Col span={12}>
					<Input placeholder="Project Name" />
				</Grid.Col>
				<Grid.Col span={12}>
					<Input placeholder="Locality" />
				</Grid.Col>
				<Grid.Col span={12}>
					<Input placeholder="Complete Address with PinCode" />
				</Grid.Col>
			</Grid>
		</div>
	);
};
export const PropertyDetail = () => {
	const { classes } = useStyles();
	return (
		<div className={classes.propertyDetails}>
			<Grid>
				<Col span={4}><Input placeholder="Super-build-up area" /></Col>
				<Col span={4}><Input placeholder="Build-up area" /></Col>
				<Col span={4}><Input placeholder="Carpet Area" /></Col>
				<Col span={2}><Input placeholder="Bedroom" /></Col>
				<Col span={2}><Input placeholder="Bathroom" /></Col>
				<Col span={2}><Input placeholder="Balcony" /></Col>
				<Col span={2}><Input placeholder="Pooja" /></Col>
				<Col span={2}><Input placeholder="Study" /></Col>
				<Col span={2}><Input placeholder="Servent" /></Col>
				<Col span={4}><Input placeholder="Property On Floor" /></Col>
				<Col span={4}><Input placeholder="Reserved Parking" /></Col>
				<Col span={4}><Input placeholder="Other Parking Count" /></Col>
			</Grid>
		</div>
	);
};

import React from "react";
import {
	createStyles,
	Image,
	Accordion,
	Grid,
	Col,
	Container,
	Title,
} from "@mantine/core";
import image from "../images/help.svg";

const useStyles = createStyles((theme) => ({
	wrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: theme.spacing.xl * 4,
	},

	title: {
		marginBottom: theme.spacing.md,
		paddingLeft: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	item: {
		fontSize: theme.fontSizes.sm,
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[1]
				: theme.colors.gray[7],
	},
}));

const placeholder =
	"It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export function Help() {
	const { classes } = useStyles();
	return (
		<div className={classes.wrapper}>
			<Container size="lg">
				<Grid id="faq-grid" gutter={50}>
					<Col span={12} md={6}>
						<Image src={image} alt="Frequently Asked Questions" />
					</Col>
					<Col span={12} md={6}>
						<Title order={2} align="left" className={classes.title}>
							Frequently Asked Questions
						</Title>

						<Accordion iconPosition="right" initialItem={0}>
							<Accordion.Item
								label="How can I reset my password?"
								className={classes.item}
							>
								{placeholder}
							</Accordion.Item>
							<Accordion.Item
								label="Can I create more that one account?"
								className={classes.item}
							>
								{placeholder}
							</Accordion.Item>
							<Accordion.Item
								label="How can I subscribe to monthly newsletter?"
								className={classes.item}
							>
								{placeholder}
							</Accordion.Item>
							<Accordion.Item
								label="Do you store credit card information securely?"
								className={classes.item}
							>
								{placeholder}
							</Accordion.Item>
							<Accordion.Item
								label="What payment systems to you work with?"
								className={classes.item}
							>
								{placeholder}
							</Accordion.Item>
						</Accordion>
					</Col>
				</Grid>
			</Container>
		</div>
	);
}

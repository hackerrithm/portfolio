import React, { Component } from "react";
import SimpleCard from "../reusable/SimpleCard";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid/Grid";
import "./start.css"
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary,
		},
	})
);

export default function Start() {
	const classes = useStyles();
	return (
		<div className="container">

		<div className={classes.root}>
			<br />
			<Grid container spacing={3}>
				{/* <Grid item xs={12}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid> */}
				{/* <Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
					</Grid>
					<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid> */}
				<Grid item xs={3}>
					Kemar Galloway
				</Grid>
				<Grid item xs={3}>
					vv
				</Grid>
				<Grid item xs={3}>
					vv
				</Grid>
				<Grid item xs={3}>
					vv
				</Grid>
			</Grid>
			<SimpleCard />
		</div>
				</div>
	);
}

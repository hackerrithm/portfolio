import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { createStyles } from "@material-ui/styles";
import { ThemeContext } from "../theme/themeprovider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Theme, withStyles, makeStyles } from "@material-ui/core/styles";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
	focusVisible?: string;
}

interface Props extends SwitchProps {
	classes: Styles;
}

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

const IOSSwitch = withStyles((theme: Theme) =>
	createStyles({
		root: {
			width: 42,
			height: 26,
			padding: 0,
			margin: theme.spacing(1),
		},
		switchBase: {
			padding: 1,
			"&$checked": {
				transform: "translateX(16px)",
				color: theme.palette.common.white,
				"& + $track": {
					backgroundColor: "#52d869",
					opacity: 1,
					border: "none",
				},
			},
			"&$focusVisible $thumb": {
				color: "#52d869",
				border: "6px solid #fff",
			},
		},
		thumb: {
			width: 24,
			height: 24,
		},
		track: {
			borderRadius: 26 / 2,
			border: `1px solid ${theme.palette.grey[400]}`,
			backgroundColor: theme.palette.grey[50],
			opacity: 1,
			transition: theme.transitions.create([
				"background-color",
				"border",
			]),
		},
		checked: {},
		focusVisible: {},
	})
)(({ classes, ...props }: Props) => {
	return (
		<Switch
			focusVisibleClassName={classes.focusVisible}
			disableRipple
			classes={{
				root: classes.root,
				switchBase: classes.switchBase,
				thumb: classes.thumb,
				track: classes.track,
				checked: classes.checked,
			}}
			{...props}
		/>
	);
});

function Navigation() {
	const classes = useStyles();
	const setThemeName = useContext(ThemeContext);
	const [themeState, setThemestate] = useState({ checked: true });
	const handleUniversalThemeChange = (name: string) => (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setThemestate({ ...themeState, [name]: event.target.checked });
		// setThemestate(!themeState)
		event.target.checked
			? setThemeName("lightTheme")
			: setThemeName("darkTheme");
	};
	return (
		<div className={classes.root}>
			<br/>
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
				</Grid>
				<Grid item xs={3}>
				</Grid>
				<Grid item xs={3}>
					<Link to="/projects">Projects</Link>
					<Link to="/">Start</Link>
					<>
						<FormControlLabel
							control={
								<IOSSwitch
									checked={themeState.checked}
									onChange={handleUniversalThemeChange(
										"checked"
									)}
									value="checked"
								/>
							}
							label={themeState.checked ? "Light" : "Dark"}
						/>
					</>
				</Grid>
			</Grid>
		</div>
	);
}

export default Navigation;

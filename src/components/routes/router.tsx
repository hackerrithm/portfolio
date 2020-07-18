import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "../projects/Projects";
import Start from "../start/Start";
import Navigation from "../navigation/Navigation";

const AppRouter = () => {
	return (
		<Router>
			<Navigation />
			<Content />
		</Router>
	);
};

const Content = () => (
	<Switch>
		<Route exact path="/" component={Start} />
		<Route exact path="/projects" component={Projects} />
	</Switch>
);

export default AppRouter;

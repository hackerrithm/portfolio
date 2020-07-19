import * as React from "react";
import Router from "./router";

const RouteManager: React.FC<any> = ({
	children
}: {
	children: React.ReactChild;
}) => {
	return <Router>{children}</Router>;
}

export default RouteManager;
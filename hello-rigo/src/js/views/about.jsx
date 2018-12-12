import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Nav from "../component/nav.jsx";

//create your first component
class About extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				This will house the about us
			</div>
		);
	}
}
export default About;

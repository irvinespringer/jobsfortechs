import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "../component/nav.jsx";

//create your first component
class Connect extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				This will house contact page
			</div>
		);
	}
}
export default Connect;

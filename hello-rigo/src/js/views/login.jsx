import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Nav from "../component/nav.jsx";
import LoginNav from "../component/loginnav.jsx";
import Footer from "../component/footer.jsx";

class LogIn extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<LoginNav />
				This will house the login page
				<Footer />
			</div>
		);
	}
}

export default LogIn;

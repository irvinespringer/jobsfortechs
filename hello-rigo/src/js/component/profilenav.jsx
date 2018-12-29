import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class ProfileNav extends React.Component {
	render() {
		return (
			<div className="container ">
				<div className=" text-right mt-4 mb-4">
					Hello irvine.springer@gmail.com &nbsp;
					<Link to="/">
						<i className="fas fa-sign-out-alt" />
						Log out
					</Link>
				</div>
			</div>
		);
	}
}

export default ProfileNav;

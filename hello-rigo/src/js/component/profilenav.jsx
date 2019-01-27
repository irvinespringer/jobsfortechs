import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

class ProfileNav extends React.Component {
	render() {
		return (
			<div className="container ">
				<Context.Consumer>
					{({ store, actions }) => {
						let message = "";
						const userStatus = store.users.find(user => {
							return user.logStatus === true;
						});
						if (userStatus) {
							message = "Hello " + userStatus.email;
						} else {
							message = "Login";
						}

						return (
							<React.Fragment>
								<div className=" text-right mt-4 mb-4">
									{message} &nbsp;
									<Link to="/">
										<i className="fas fa-sign-out-alt" />
										Log out
									</Link>
								</div>
							</React.Fragment>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

export default ProfileNav;

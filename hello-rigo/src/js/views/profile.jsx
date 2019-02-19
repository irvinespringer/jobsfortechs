import React from "react";
import {
	BrowserRouter,
	Route,
	Switch,
	Link,
	withRouter
} from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import SearchBar from "../component/search.jsx";
import ProfileNav from "../component/profilenav.jsx";
import Resumeupload from "../component/resumeupload.jsx";

class Profile extends React.Component {
	render() {
		return (
			<div className="container ">
				<ProfileNav />
				<div className="container mt-2 mb-5 ">
					<SearchBar />
				</div>
				<div className="card-columns d-flex justify-content-center">
					<div className="col-6">
						<div className="text-black shadow bg-white rounded">
							<ul className="">
								<li className="text-center">
									<h5>Resume & Experience</h5>
								</li>
								<li className="mb-3">
									<Link to="/update-resume">
										Upload Resume
									</Link>
								</li>
								<Link to="/resume">
									<li className="mb-3">Update Resume</li>
								</Link>
								<li className="mb-3">
									<Link to="/">
										<i className="fas fa-sign-out-alt" />
										Log out
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<Resumeupload />
						</div>
					</div>
					<div className="col-6 ">
						<div className="text-black shadow bg-white rounded">
							<div className="text-right">
								<i className="fas fa-edit" />
							</div>

							<ul className="">
								<li className="text-center">
									<h5>Account Settings</h5>
								</li>
								<Context.Consumer>
									{({ store, actions }) => {
										return store.login.map(
											(user, index) => {
												return (
													<React.Fragment key={index}>
														<li className="mb-3">
															<span className="font-weight-bold">
																Name:
															</span>

															{user.full_name}
														</li>
														<li className="mb-3">
															<span className="font-weight-bold">
																Email:
															</span>

															{user.email}
														</li>
														<li className="mb-3">
															<span className="font-weight-bold">
																Password:
															</span>
															{user.password}
														</li>
														<li className="mb-3">
															<span className="font-weight-bold">
																Telephone:
															</span>
															{user.telephone}
														</li>
														<li className="mb-3">
															<span className="font-weight-bold">
																Address:
															</span>

															{user.street_address1 +
																"," +
																user.street_address_2 +
																"," +
																user.city +
																"," +
																user.state +
																"," +
																user.zip_code}
														</li>
													</React.Fragment>
												);
											}
										);
									}}
								</Context.Consumer>
							</ul>
						</div>
					</div>
				</div>

				<div className="mb-2 mt-4 ">
					<div className="text-danger font-weight-bold">
						Close My Acccount
					</div>
					<div className="mt-2">
						When you close your account, your email address will no
						longer receive marketing emails from Techsperts. You
						will, however, continue to receive communication from
						employers you have been in contact with prior to closing
						your account. After closing your account, if you apply
						for any jobs, you will receive communication from those
						employers as well.
					</div>
				</div>
			</div>
		);
	}
}

Profile.propTypes = {
	full_name: PropTypes.string,
	email: PropTypes.string,
	password: PropTypes.string,
	telephone: PropTypes.object,
	address: PropTypes.object,
	history: PropTypes.object,
	match: PropTypes.object
};

export default withRouter(Profile);

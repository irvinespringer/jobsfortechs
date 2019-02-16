import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { withRouter, BrowserRouter, Router } from "react-router-dom";
import PropTypes from "prop-types";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

class LogForm extends React.Component {
	constructor() {
		super();

		this.formPreventDefault = this.formPreventDefault.bind(this);
	}

	formPreventDefault(e) {
		e.preventDefault();
	}

	render() {
		const responseFacebook = response => {};
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div className="container mb-5 mt-5 ">
								<div className="row d-flex justify-content-center">
									<div className="col-sm-4 bg-light ">
										<div>
											<h5>Sign In</h5>
											<div>
												<div className="form-group">
													<label>Email</label>
													<input
														type="text"
														className="form-control"
														id="email"
													/>
												</div>
												<div className="form-group">
													<label>Password</label>
													<input
														type="text"
														className="form-control"
														id="password"
													/>
												</div>
												<div className="form-check mb-3">
													<input
														type="checkbox"
														className="form-check-input"
													/>
													<label className="form-check-label">
														Keep me signed in on
														this device
														<p>
															<Link to="/">
																Forgot password?
															</Link>
														</p>
													</label>
												</div>
												<div className="text-center">
													<button
														onClick={() =>
															actions.signInUserClick(
																document.querySelector(
																	"[id=email"
																).value,
																document.querySelector(
																	"[id=password"
																).value,
																this.props
																	.history
															)
														}
														className="btn btn-primary mb-2  ">
														Sign In
													</button>
												</div>
											</div>
											<div>
												<p className="text-center">
													OR
												</p>
												<hr className="featurette-divider" />
											</div>
											{/* facebook login functionality
											<div className="">
												<FacebookLogin
													appId="1233449633498286"
													autoLoad
													callback={responseFacebook}
													render={renderProps => (
														<button
															onClick={
																renderProps.onClick
															}
															type="submit"
															className="btn btn-primary mb-2 btn-facebook ">
															Continue with
															facebook
														</button>
													)}
												/>
											</div>*/}
											<div className="">
												<button className="btn btn-primary mb-2 btn-google ">
													Sign up with Google
												</button>
												<hr className="featurette-divider" />
												By signing in to your
												account,you agree to our Terms
												of Service and consent to our
												Cookie and Privacy Policies
												<div />
											</div>
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default withRouter(LogForm);

LogForm.propTypes = {
	history: PropTypes.object
};

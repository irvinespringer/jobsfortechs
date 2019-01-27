import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

class LogForm extends React.Component {
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
											<form>
												<div className="form-group">
													<label>Email</label>
													<input
														type="text"
														className="form-control"
														name="email"
													/>
												</div>
												<div className="form-group">
													<label>Password</label>
													<input
														type="text"
														className="form-control"
														name="password"
													/>
												</div>
												<div className="form-check mb-3">
													<input
														type="checkbox"
														className="form-check-input"
													/>
													<label className="form-check-label">
														Keep me signed in on
														this device{" "}
														<p>
															<Link to="/">
																Forgot password?
															</Link>
														</p>
													</label>
												</div>
												<div className="text-center">
													<button
														type="submit"
														onClick={() =>
															actions.signInUserClick(
																document.querySelector(
																	"[name=email"
																).value,
																document.querySelector(
																	"[name=password"
																).value,
																this.props
																	.history
															)
														}
														className="btn btn-primary mb-2  ">
														Sign In
													</button>
												</div>
											</form>
											<div>
												<p className="text-center">
													OR
												</p>
												<hr className="featurette-divider" />
											</div>
											{/* facebook login functionality*/}
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
											</div>
											<div className="">
												<button
													type="submit"
													className="btn btn-primary mb-2 btn-google ">
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

export default LogForm;

LogForm.propTypes = {
	history: PropTypes.object
};

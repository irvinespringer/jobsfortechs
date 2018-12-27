import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class LogForm extends React.Component {
	render() {
		return (
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
									/>
								</div>
								<div className="form-group">
									<label>Password</label>
									<input
										type="text"
										className="form-control"
									/>
								</div>
								<div className="form-check mb-3">
									<input
										type="checkbox"
										className="form-check-input"
									/>
									<label className="form-check-label">
										Keep me signed in on this device{" "}
										<p>
											<Link to="/">Forgot password?</Link>
										</p>
									</label>
								</div>
								<div className="text-center">
									<button
										type="submit"
										className="btn btn-primary mb-2  ">
										Sign In
									</button>
								</div>
							</form>
							<div>
								<p className="text-center">OR</p>
								<hr className="featurette-divider" />
							</div>
							<div className="">
								<button
									type="submit"
									className="btn btn-primary mb-2 btn-facebook ">
									Continue with facebook
								</button>
							</div>
							<div className="">
								<button
									type="submit"
									className="btn btn-primary mb-2 btn-google ">
									Sign up with Google
								</button>
								<hr className="featurette-divider" />
								By signing in to your account,you agree to our
								Terms of Service and consent to our Cookie and
								Privacy Policies
								<div />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default LogForm;

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class SignUpForm extends React.Component {
	render() {
		return (
			<div className="container mb-5 ">
				<div className="row d-flex justify-content-center">
					<div className="col-sm-4 ">
						<div>
							Create your account
							<p>
								Already have an account? &nbsp;
								<Link to="./login">Log in</Link>
							</p>
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
							</div>
							<div>
								<p>OR</p>
							</div>
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
								<div className="mb-3">
									Password must be at least 8 characters with
									one uppercase letter, one lowercase letter,
									one number and a symbol
								</div>
								<div className="text-center">
									<button
										type="submit"
										className="btn btn-primary mb-2  ">
										Sign Up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default SignUpForm;

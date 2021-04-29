import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Newsletter extends React.Component {
	render() {
		return (
			<div className="newsletter_w3w3pvt py-5 ">
				<div className="container py-xl-5 py-lg-3 newsboard   ">
					<div className="row ">
						<div className="col-sm-4 mb-2 ">
							<div className="img text-center">
								<img
									src="//comps.gograph.com/suitcase_gg55618400.jpg"
									alt="subscribe and save"
									className="newspic"
								/>
							</div>
						</div>
						<div className="col-sm-4 mb-2 ">
							<h5 className="tittle text-center text-bl font-weight-bold">
								Subscribe & Save
							</h5>
							<p className="sub-tittle text-center mt-2 mb-sm-2 mb-2 pb-xl-3">
								We do not want you to be the person on the
								flight or hotel who paid the most for their
								trip. We therefore encourage you to subscribe
								and save. No pressure!
							</p>
						</div>

						<div className="col-sm-4 ">
							<div className="newsletter ">
								<form className="form-inline text-center ">
									<div className="form-group mb-0 w-100 ">
										<input
											className="email mr-2  "
											type="email"
											name="email"
											placeholder="Your email..."
											required=""
										/>
										<div>
											<button type="submit" className="">
												Subscribe
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Newsletter;

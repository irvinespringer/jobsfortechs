import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Connect extends React.Component {
	render() {
		return (
			//contact form start

			<div className="contact-wthree pt-lg-2" id="contact">
				<div className="container py-md-4 py-2">
					<div className="title-desc text-left pb-3">
						<h4 className="main-title-w3pvt  text-capitalize">
							contact
						</h4>
						<p>Explore it all. The sky is the limit!</p>
					</div>
					<div className="row py-lg-4 py-sm-2">
						<div className="col-lg-12">
							<div className="w3_pvt-contact-top">
								<h4>get in touch </h4>
								<ul className="d-flex header-wthreelayouts pt-0 flex-column">
									<li>
										<span
											className="fa fa-home"
											data-blast="color"
										/>
										<p className="d-inline">
											1234k Avenue,Block-4,Canada.
										</p>
									</li>
									<li className="my-3">
										<span
											className="fa fa-envelope-open"
											data-blast="color"
										/>
										<span className="text-secondary">
											info@example.com
										</span>
									</li>
									<li>
										<span
											className="fa fa-phone"
											data-blast="color"
										/>
										<p className="d-inline">
											+456 123 7890
										</p>
									</li>
								</ul>
							</div>
							<hr className="featurette-divider" />
							<div className="col-lg-12 mt-4">
								<div className="register-top1">
									<form
										action="#"
										method="post"
										className="register-wthree">
										<div className="form-group">
											<div className="row">
												<div className="col-lg-3 pl-lg-0">
													<label>Full name</label>
													<input
														className="form-control"
														type="text"
														placeholder="Johnson"
														name="email"
														required=""
														data-blast="borderColor"
													/>
												</div>
												<div className="col-lg-3 my-lg-0 my-4">
													<label>Email</label>
													<input
														className="form-control"
														type="email"
														placeholder="example@email.com"
														name="email"
														required=""
														data-blast="borderColor"
													/>
												</div>
												<div className="col-lg-3">
													<label>Mobile</label>
													<input
														className="form-control"
														type="text"
														placeholder="xxxx xxxxx"
														name="email"
														required=""
														data-blast="borderColor"
													/>
												</div>
												<div className="col-lg-3 d-flex align-items-end pr-lg-0 mt-lg-0 mt-4">
													<button
														type="submit"
														className="btn btn-w3_pvt btn-block w-100 text-white button bg-theme">
														Send
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Connect;

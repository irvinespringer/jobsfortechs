import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

//import iberia from "../img/IB.png";

import Nav from "../component/nav.jsx";
import LoginNav from "../component/loginnav.jsx";
import SearchBar from "../component/search.jsx";
import Footer from "../component/footer.jsx";

//create your first component
class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: true };

		this.toggleDiv = this.toggleDiv.bind(this);
	}

	toggleDiv = () => {
		const { show } = this.state;
		this.setState({ show: !show });
	};

	render() {
		return (
			<div className="">
				<div className="container mt-5  ">
					<SearchBar />
				</div>
				<div className="container mt-5 mb-5   ">
					<div className="row d-flex justify-content-center">
						<div className="col-4  p-3 mb-5 bg-light mr-2 shadow-lg">
							<ul className="list-group ">
								<Context.Consumer>
									{({ store, actions }) => {
										let c = "visible";
										return store.jobsearch.map(
											(item, index) => {
												return (
													<React.Fragment key={index}>
														<li className="">
															<div className="text-success">
																Search Result
															</div>
															<div className="mt-1 mb-2 ">
																<div className="font-weight-bold">
																	{
																		item.job_title
																	}
																</div>
																<div className=" mt-1">
																	{
																		item.company_name
																	}
																</div>
																<div>
																	{
																		item.company_location
																	}
																</div>
																<div className=" mt-1">
																	{
																		item.job_description
																	}
																</div>
																<hr className="featurette-divider" />
																<div className="text-primary">
																	What are you
																	waiting for?
																	Apply Now!
																	<button
																		onClick={() => {
																			actions.jobDetails(
																				item.id
																			);

																			item.toggleDiv;
																		}}
																		type="button"
																		className="btn btn-primary mt-2">
																		Show
																		Details
																	</button>
																	<hr className="featurette-divider" />
																</div>
															</div>
														</li>
													</React.Fragment>
												);
											}
										);
									}}
								</Context.Consumer>
							</ul>
						</div>

						<Context.Consumer>
							{({ store, actions }) => {
								let item = store.findjobdetails;

								return (
									<React.Fragment>
										{this.state.show && (
											<div className="col-6 shadow-lg ">
												<div className="container">
													<div className="row">
														<div className="col">
															<div className="mt-4 text-center">
																<img src="https://marxholdings.com/images/deals/IB.png" />
															</div>
														</div>
														<div className="col-6">
															<div className="container mt-4">
																<div className="row ">
																	<div className=" col text-left">
																		<div>
																			<div className="text-right">
																				<h5>
																					16:08
																				</h5>
																			</div>
																			<div className="text-right">
																				<h6>
																					MIA
																				</h6>
																			</div>
																		</div>
																	</div>
																	<div className=" col-4 test-center">
																		{" "}
																		2{" "}
																	</div>
																	<div className=" col text-right">
																		<div>
																			<div className="text-left ">
																				<h5>
																					14:30
																				</h5>
																			</div>
																			<div className="text-left">
																				<h6>
																					EDI
																				</h6>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-6">
															<div className="container mt-4">
																<div className="row ">
																	<div className=" col text-left">
																		<div>
																			<div className="text-right">
																				<h5>
																					16:08
																				</h5>
																			</div>
																			<div className="text-right">
																				<h6>
																					MIA
																				</h6>
																			</div>
																		</div>
																	</div>
																	<div className=" col-4 test-center">
																		{" "}
																		2{" "}
																	</div>
																	<div className=" col text-right">
																		<div>
																			<div className="text-left ">
																				<h5>
																					14:30
																				</h5>
																			</div>
																			<div className="text-left">
																				<h6>
																					EDI
																				</h6>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div className="col">
															<div className="mt-4 text-center">
																<h5 className="">
																	$1200 USD
																</h5>
																<p className="mb-2 text-center">
																	Expedia.com
																</p>
															</div>

															<p>
																<button
																	type="button"
																	className="btn btn-primary btn-block">
																	Book
																</button>
																<div className="text-nowrap">
																	{" "}
																	For More
																	Details{" "}
																</div>
																<div className="text-center ">
																	<i className="fas fa-angle-down " />
																</div>
															</p>
														</div>
													</div>
												</div>
											</div>
										)}
									</React.Fragment>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}

SearchResults.propTypes = {
	id: PropTypes.number
};

export default withRouter(SearchResults);

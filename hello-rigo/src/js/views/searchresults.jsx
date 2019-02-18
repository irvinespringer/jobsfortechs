import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

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
				<div className="container mt-5 mb-5  ">
					<div className="row">
						<div className="col-4 shadow-lg p-3 mb-5 bg-white rounded">
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
											<div className="col-8 bg-light">
												Job Details
												<div className="mt-1 mb-2 ">
													<div className="font-weight-bold">
														{item.job_title}
													</div>
													<div className="">
														{item.company_name}
													</div>
													<div>
														{item.company_location}
													</div>
													<button
														type="button"
														className="btn btn-primary mt-2">
														Apply Now
													</button>
													<hr className="featurette-divider" />
													<div className=" mt-2 mb-1 font-weight-bold">
														Company overview:
													</div>
													<span className="mb-2">
														{item.company_overview}
													</span>
													<div className=" mt-2 mb-2 font-weight-bold">
														Job Description:
													</div>
													<span className="mb-2">
														{item.job_description}
													</span>
													<div className=" mt-2 mb-2 font-weight-bold">
														Responsibilities:
													</div>
													<span className="mb-2">
														{item.responsibilities}
													</span>
													<div className=" mt-2 mb-2 font-weight-bold">
														Qualifications:
													</div>
													<span className="mb-2">
														<li>
															{
																item.qualifications
															}
														</li>
													</span>
													<div className="mt-2 mb-2 font-weight-bold">
														Skills:
													</div>
													<span className="mb-2">
														<li>{item.skills}</li>
													</span>
													<div className="mt-2 mb-2 font-weight-bold">
														Salary:
													</div>
													<span className="mb-2">
														{item.salary}
													</span>
													<div className="mt-2 mb-2 font-weight-bold">
														Benefits:
													</div>
													<span className="mb-2">
														<li>{item.benefits}</li>
													</span>
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

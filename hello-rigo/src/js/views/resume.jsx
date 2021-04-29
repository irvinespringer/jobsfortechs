import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ProfileNav from "../component/profilenav.jsx";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

class Resume extends React.Component {
	render() {
		return (
			<div>
				<ProfileNav />
				<div className="container mt-5 mb-5 ">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.login.map((user, index) => {
								return (
									<React.Fragment key={index}>
										<div className="row ">
											<div className="col-md-12 mb-5 ">
												<h5 className="">
													Work Experience
												</h5>
												<div className="font-weight-bold">
													{user.job_title_1}
												</div>
												<div>{user.company_name_1}</div>
												<div>
													{user.job_start_month_1 +
														" " +
														user.job_start_year_1 +
														" " +
														"to" +
														" " +
														user.job_end_month_1 +
														" " +
														user.job_end_year_1}
												</div>
												<div className="mt-2 mb-2">
													Description
												</div>
												<div>
													<span>
														{user.job_description_1}
													</span>
												</div>
												<div />
												<div className="mt-2 text-right ">
													<i className="fas fa-plus-circle text-success" />
													&nbsp;
													<i className="fas fa-edit text-primary" />
													&nbsp;
													<i className="fas fa-trash-alt text-danger" />
												</div>
											</div>
										</div>
										<div className="row ">
											<div className="col-md-12 mb-5  ">
												<h5>Education</h5>
												<div>{user.degree_1}</div>
												<div>{user.school_name_1}</div>
												<div>
													{user.school_start_month_1 +
														" " +
														user.school_start_year_1 +
														" " +
														"to" +
														" " +
														user.school_end_month_1 +
														" " +
														user.school_end_year_1}
												</div>
												<div className="mt-2 text-right ">
													<i className="fas fa-plus-circle text-success " />
													&nbsp;
													<i className="fas fa-edit text-primary" />
													&nbsp;
													<i className="fas fa-trash-alt text-danger" />
												</div>
											</div>
										</div>
										<div className="row ">
											<div className="col-md-12 mb-5  ">
												<h5>Skills </h5>
												<div>
													<span>{user.skills}</span>
												</div>
												<div className="mt-2 text-right ">
													<i className="fas fa-plus-circle text-success " />
													&nbsp;
													<i className="fas fa-edit text-primary " />
													&nbsp;
													<i className="fas fa-trash-alt text-danger" />
												</div>
											</div>
										</div>
									</React.Fragment>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
export default Resume;

Resume.propTypes = {
	job_title_1: PropTypes.string,

	history: PropTypes.object,
	match: PropTypes.object
};

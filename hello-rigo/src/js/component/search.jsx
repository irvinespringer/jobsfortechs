import React from "react";
import {
	withRouter,
	BrowserRouter,
	Route,
	Switch,
	Link
} from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

class SearchBar extends React.Component {
	constructor() {
		super();

		this.formPreventDefault = this.formPreventDefault.bind(this);
	}

	formPreventDefault(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ actions }) => {
						return (
							<div className="form-inline justify-content-center">
								<div className="input-group mb-2 mr-sm-2">
									<div className="input-group-prepend">
										<div className="input-group-text">
											<i className="fas fa-search text-primary" />
										</div>
									</div>
									<input
										type="text"
										className="form-control search"
										placeholder="Search for job"
										id="job_title"
									/>
								</div>

								<div className="input-group mb-2 mr-sm-2">
									<div className="input-group-prepend">
										<div className="input-group-text">
											<i className="fas fa-map-marker-alt text-primary" />
										</div>
									</div>
									<input
										type="text"
										className="form-control search"
										placeholder="Location"
										id="company_location"
									/>
								</div>

								<button
									className="btn searchbutton mb-2"
									onClick={() =>
										actions.searchJobs(
											document.querySelector(
												"[id=job_title"
											).value,
											document.querySelector(
												"[id=company_location"
											).value,
											this.props.history
										)
									}>
									Search
								</button>
							</div>
						);
					}}
				</Context.Consumer>

				<div className="row d-flex justify-content-center ">
					<i className="fas fa-cloud-upload-alt text-danger" />
					&nbsp;
					<Link to="./signup" className="">
						Upload your resume
					</Link>
					&nbsp; &nbsp; - Your new career starts here
				</div>
			</div>
		);
	}
}
export default withRouter(SearchBar);

SearchBar.propTypes = {
	history: PropTypes.object
};

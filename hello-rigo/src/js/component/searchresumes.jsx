import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class SearchResumes extends React.Component {
	render() {
		return (
			<div>
				<form className="form-inline justify-content-center">
					<div className="input-group mb-2 mr-sm-2">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fas fa-search text-primary" />
							</div>
						</div>
						<input
							type="text"
							className="form-control search"
							placeholder="e.g ux, developer, python"
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
						/>
					</div>

					<button type="submit" className="btn searchbutton mb-2">
						Search Resumes
					</button>
				</form>
				<div className="row d-flex justify-content-center">
					<i className="fas fa-clipboard text-danger" />
					&nbsp;
					<Link to="/post-job">Post a new job</Link>
					&nbsp;- Find the best and brightest talent
				</div>
			</div>
		);
	}
}
export default SearchResumes;

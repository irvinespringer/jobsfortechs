import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class SearchBar extends React.Component {
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
							placeholder="Search for job"
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
						Search
					</button>
				</form>
				<div className="row d-flex justify-content-center">
					<i className="fas fa-cloud-upload-alt text-danger" />
					&nbsp;
					<Link to="./signup">Upload your resume</Link>
					&nbsp; &nbsp; - Your new career starts here
				</div>
			</div>
		);
	}
}
export default SearchBar;

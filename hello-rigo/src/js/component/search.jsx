import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class SearchBar extends React.Component {
	render() {
		return (
			<form className="form-inline justify-content-center">
				<div className="input-group mb-2 mr-sm-2">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<i className="fas fa-search" />
						</div>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="Search for job"
					/>
				</div>

				<div className="input-group mb-2 mr-sm-2">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<i className="fas fa-map-marker-alt" />
						</div>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="Location"
					/>
				</div>

				<button type="submit" className="btn btn-primary mb-2">
					Search
				</button>
			</form>
		);
	}
}
export default SearchBar;

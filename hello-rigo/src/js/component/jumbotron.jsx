import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import SearchBar from "../component/search.jsx";

class Jumbo extends React.Component {
	render() {
		return (
			<div className="mb-3  jumbotron jumbotron-fluid ">
				<h1 className="display-4">
					<i className="fas fa-code ml-5" />
				</h1>
				<div className="lead ml-5 font-weight-bold">
					Techies Welcome
				</div>
				<div className="lead">
					<div className="container mt-5 ">
						<div className="post-body2">
							<SearchBar />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Jumbo;

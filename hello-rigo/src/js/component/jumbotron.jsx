import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import SearchBar from "../component/search.jsx";

class Jumbo extends React.Component {
	render() {
		return (
			<div className="mb-4  jumbotron ">
				<h1 className="display-12 text-center mb-4">
					<div className="lead ml-5" />
				</h1>
				<div className="lead">
					<div className="container mt-2 ">
						<div className="row">
							<div className="col-12 post-body2">
								<SearchBar />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Jumbo;

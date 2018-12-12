import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import SearchBar from "../component/search.jsx";

class Jumbo extends React.Component {
	render() {
		return (
			<div className="container mb-5  jumbotron">
				<h1 className="display-4">
					<i className="fas fa-code" />
				</h1>
				<p className="lead">Developers Welcome</p>
				<p className="lead">
					<div className="container">
						<div className="">
							<SearchBar />
						</div>
					</div>
				</p>
			</div>
		);
	}
}

export default Jumbo;

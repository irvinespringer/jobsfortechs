import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

//nav bar bootstrap component

class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
				<div>
					<a className="navbar-brand ">Job Site</a>
				</div>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className=" collapse navbar-collapse"
					id="navbarSupportedContent ">
					<ul className="nav navbar-nav ml-auto">
						<li className="nav-item nav-link active">
							<Link to="./home">Find Job</Link>
						</li>
						<li className="nav-item nav-link ">
							<Link to="./insight">Insight</Link>
						</li>
						<li className="nav-item nav-link">
							<Link to="./about">About us</Link>
						</li>
						<li className="nav-item nav-link ">
							<Link to="./connect">Connect</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;

import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

//nav bar bootstrap component

class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light shadow bg-white rounded">
				<div className="nav-item dropdown ">
					<a
						className="nav-link dropdown-toggle"
						data-toggle="dropdown"
						href="#"
						role="button"
						aria-haspopup="true"
						aria-expanded="false">
						<span> Start Here</span>
						&nbsp;
						<i className="fas fa-cog" />
					</a>
					<div className="dropdown-menu dropdown-menu-right">
						<Link to="/login" className="dropdown-item">
							Login
						</Link>
						<Link to="/signup" className="dropdown-item">
							Sign up
						</Link>
					</div>
				</div>

				<a className="navbar-brand text-primary">Zazool</a>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<div className="nav-item nav-link">
							<Link to="/home">Find Job</Link>
						</div>
						<div className="nav-item nav-link">
							<Link to="/insight">Insight</Link>
						</div>
						{/*<div className="nav-item nav-link">
							<Link to="/about">About us</Link>
						</div>*/}
						<div className="nav-item nav-link">
							<Link to="/connect">Connect</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;

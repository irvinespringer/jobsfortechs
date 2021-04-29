import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

//nav bar bootstrap component

class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg shadow backnav ">
				<div className="nav-item dropdown  ">
					<div className="dropdown-menu dropdown-menu-right">
						<Link to="/login" className="dropdown-item">
							Login
						</Link>
						<Link to="/signup" className="dropdown-item">
							Sign up
						</Link>
					</div>
				</div>
				<i className="fas fa-suitcase-rolling fa-2x" />
				&nbsp;
				<a className="navbar-brand ">Test Site</a>
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
					className="collapse navbar-collapse "
					id="navbarNavAltMarkup">
					<div className="navbar-nav   ">
						<div className="nav-item nav-link  ">
							<Link
								to="/home"
								style={{ textDecoration: "none" }}
								className="ink">
								Flights
							</Link>
						</div>
						<div className="nav-item nav-link">
							<Link
								to="/insight"
								style={{ textDecoration: "none" }}
								className="ink">
								Hotels
							</Link>
						</div>
						{/*<div className="nav-item nav-link">
							<Link to="/about">Cars</Link>
						</div>*/}
						<div className="nav-item nav-link">
							<Link
								to="/connect"
								style={{ textDecoration: "none" }}
								className="ink">
								Deals
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;

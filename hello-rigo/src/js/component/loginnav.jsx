import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class LoginNav extends React.Component {
	render() {
		return (
			<nav>
				<ul className="nav ">
					<li className="nav-item dropdown ml-auto">
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
							<Link to="./login" className="dropdown-item">
								Login
							</Link>
							<Link to="./signup" className="dropdown-item">
								Sign up
							</Link>
						</div>
					</li>
				</ul>
			</nav>
		);
	}
}

export default LoginNav;

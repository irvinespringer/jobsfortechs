import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer className="page-footer text-white blue bg-secondary">
				<div className="footer-copyright text-center py-3">
					{/*Connect with us on Social Media
					<div>
						<i className="fab fa-facebook-square" />
						&nbsp;
						<i className="fab fa-instagram" />
						&nbsp;
						<i className="fab fa-twitter-square" />
					</div>*/}
					<div>All Rights Reserved 2018 Final Exchange LLC</div>
					<div>
						Made in Miami with &nbsp;{" "}
						<i className="fas fa-heart text-danger" />
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;

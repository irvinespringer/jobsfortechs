import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer className="page-footer font-small blue .bg-dark footer">
				<div className="footer-copyright text-center py-3">
					Let&apos;s get social
					<div>
						<i className="fab fa-facebook-square" />
						&nbsp;
						<i className="fab fa-instagram" />
						&nbsp;
						<i className="fab fa-twitter-square" />
					</div>
					<p>All Rights Reserved 2018 Jobsite LLC</p>
				</div>
			</footer>
		);
	}
}

export default Footer;

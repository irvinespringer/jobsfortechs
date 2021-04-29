import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<div className="footer-agile">
				<div className="container">
					<div className="footer-btm-agileinfo">
						<div className="row">
							<div className="col-md-3 col-xs-3 footer-grid w3social">
								<h6>Quick Links</h6>
								<ul>
									<li>
										<a>Home</a>
									</li>
									<li>
										<a className="scroll">
											Cookies & Privacy Policy
										</a>
									</li>
									<li>
										<a className="scroll">
											Terms & Conditions
										</a>
									</li>
									<li>
										<a className="scroll">FAQ</a>
									</li>
								</ul>
							</div>
							<div className="col-md-3 col-xs-3 footer-grid">
								<h6>Connect</h6>

								<ul>
									<li>
										<i className="fa fa-map-marker" />
										+012 345 6789
									</li>
									<li>
										<i className="fa fa-fax" />
										+987 654 3210
									</li>
									<li>
										<i className="fa fa-phone" />
										Kmome St, NY 10002, Canada.
									</li>
									<li>
										<i className="fa fa-envelope" />
										<a href="mailto:example@mail.com">
											mail@example.com
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-6 col-xs-6 footer-grid about">
								<h6>What we stand for</h6>
								<p>
									We are customer centric, travel lovers and
									professionals with integrity.
								</p>
								<p className="w3l-para-mk">
									We are not an online travel agency, we are
									just a happy bunch who genuinely love to
									help people save money on travel.
								</p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
					<div className=" container footer-agilem mt-2">
						<div className="row">
							<div className="col-sm-8 col-xs-9 copy-w3lsright">
								<p>
									© 2019 FlightDealsDaddy. All rights reserved
									| We help you find the cheapest flights,
									hotels and car rentals. Made for the &nbsp;
									<i className="fas fa-heart text-danger" />{" "}
									of travel
								</p>
							</div>
							<div className="col-sm-4 col-xs-3 social-w3licon">
								<div className="text-light mt-2 text-center">
									<i className="fab fa-instagram fa-2x" />
									&nbsp;
									<i className="fab fa-facebook-square fa-2x " />
									&nbsp;
									<i className="fab fa-twitter-square fa-2x " />{" "}
								</div>
							</div>
							<div className="clearfix" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;

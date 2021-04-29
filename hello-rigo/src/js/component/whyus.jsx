import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Why extends React.Component {
	render() {
		return (
			<div className="features-icons bg-light text-center">
				<div className="container">
					<div className="row ">
						<div className="col-lg-4">
							<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
								<div className="features-icons-icon d-flex mb-4">
									<i className="fas fa-piggy-bank m-auto whycon" />
								</div>
								<h5 className="title text-bl font-weight-bold">
									Lowest Prices
								</h5>
								<p className="sub-tittle mb-0">
									We search hundreds of reputable travel
									websites and return transparent price
									results for hotels,car rentals and flights
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
								<div className="features-icons-icon d-flex mb-4">
									<i className="fas fa-map-marked-alt m-auto whycon" />
								</div>
								<h5 className="title text-bl font-weight-bold">
									Worldwide Coverage
								</h5>
								<p className="sub-tittle mb-0">
									No matter where in the world you would like
									to discover, please rest assure we can help
									you find a reasonably prices route, hotel or
									car rental
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="features-icons-item mx-auto mb-0 mb-lg-3">
								<div className="features-icons-icon d-flex mb-4">
									<i className="fas fa-lock m-auto whycon" />
								</div>
								<h5 className="title text-bl font-weight-bold">
									Fully Secure & Free
								</h5>
								<p className="sub-tittle mb-0">
									Our travel search service is absolutely free
									and secure. There are no charges or hiddens
									fees. We get paid by our partners on
									referrals
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Why;

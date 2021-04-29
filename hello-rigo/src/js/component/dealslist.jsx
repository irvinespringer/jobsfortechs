import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Dealslist extends React.Component {
	render() {
		return (
			<div>
				<div className="container py-xl-4 py-lg-2 ">
					<h5 className="title text-bl font-weight-bold">
						Discover great deals for your next getaway
					</h5>
					<h6 className="sub-tittle mb-4">
						Search the cities and routes below for flight, hotels
						and cars
					</h6>
					<div className="row  ">
						<div className="col-sm-4 mb-2  ">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									Cras justo odio
								</li>
								<li className="list-group-item">
									Dapibus ac facilisis in
								</li>
								<li className="list-group-item">
									Morbi leo risus
								</li>
								<li className="list-group-item">
									Porta ac consectetur ac
								</li>
								<li className="list-group-item">
									Vestibulum at eros
								</li>
							</ul>
						</div>
						<div className="col-sm-4 mb-2 ">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									Cras justo odio
								</li>
								<li className="list-group-item">
									Dapibus ac facilisis in
								</li>
								<li className="list-group-item">
									Morbi leo risus
								</li>
								<li className="list-group-item">
									Porta ac consectetur ac
								</li>
								<li className="list-group-item">
									Vestibulum at eros
								</li>
							</ul>
						</div>

						<div className="col-sm-4 ">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									Cras justo odio
								</li>
								<li className="list-group-item">
									Dapibus ac facilisis in
								</li>
								<li className="list-group-item">
									Morbi leo risus
								</li>
								<li className="list-group-item">
									Porta ac consectetur ac
								</li>
								<li className="list-group-item">
									Vestibulum at eros
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dealslist;

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Cards extends React.Component {
	render() {
		return (
			<div className="container mb-3  ">
				<div className="card-columns d-flex justify-content-center">
					<div className="col-6">
						<img
							className="card-img-top"
							src="https://images.pexels.com/photos/1157859/pexels-photo-1157859.jpeg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Hi</h5>
							<p className="card-text">Hello</p>
							<a href="#" className="btn btn-primary">
								Get Jobs
							</a>
						</div>
					</div>

					<div className="col-6">
						<img
							className="card-img-top"
							src="https://images.pexels.com/photos/1080865/pexels-photo-1080865.jpeg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Hi</h5>
							<p className="card-text">Hello</p>
							<a href="#" className="btn btn-primary">
								Post Job
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;

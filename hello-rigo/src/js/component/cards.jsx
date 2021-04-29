import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Cards extends React.Component {
	render() {
		return (
			<div className="container mt-4 pt-4">
				<h5 className="mb-4 title text-bl font-weight-bold">
					Look at the wonderful deals we found
				</h5>
				<div className="row mb-4">
					<div className="col-sm-3">
						<div className="card border-0">
							<img
								src="https://images.pexels.com/photos/2133849/pexels-photo-2133849.jpeg"
								className="newsPicThumb"
								alt="travel deal"
							/>

							<div className="card-body">
								<h5 className="card-title">
									Special title treatment
								</h5>
								<p className="card-text">
									With supporting text below as
								</p>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card border-0">
							<img
								src="https://images.pexels.com/photos/2179606/pexels-photo-2179606.jpeg"
								className="newsPicThumb"
								alt="travel deal"
							/>

							<div className="card-body">
								<h5 className="card-title">
									Special title treatment
								</h5>
								<p className="card-text">
									With supporting text below as
								</p>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card border-0">
							<img
								src="https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg"
								className="newsPicThumb"
								alt="travel deal"
							/>
							<div className="card-body">
								<h5 className="card-title">
									Special title treatment
								</h5>
								<p className="card-text">
									With supporting text below as
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="card border-0">
							<img
								src="https://images.pexels.com/photos/2671089/pexels-photo-2671089.jpeg"
								className="newsPicThumb"
								alt="travel deal"
							/>
							<div className="card-body">
								<h5 className="card-title">
									Special title treatment
								</h5>
								<p className="card-text">
									With supporting text below as
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row mb-4">
					<div className="col-sm-3">
						<div className="card border-0">
							<img
								src="https://images.pexels.com/photos/2133849/pexels-photo-2133849.jpeg"
								className="newsPicThumb"
								alt="travel deal"
							/>

							<div className="card-body">
								<h5 className="card-title">
									Special title treatment
								</h5>
								<p className="card-text">
									With supporting text below as
								</p>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card border-0">
							<img
								src="https://images.pexels.com/photos/2179606/pexels-photo-2179606.jpeg"
								className="newsPicThumb"
								alt="travel deal"
							/>

							<div className="card-body">
								<h5 className="card-title">
									Special title treatment
								</h5>
								<p className="card-text">
									With supporting text below as
								</p>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="card border-0">
							<img
								src="https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg"
								className="newsPicThumb"
								alt="travel deal"
							/>
							<div className="card-body">
								<h5 className="card-title">
									Special title treatment
								</h5>
								<p className="card-text">
									With supporting text below as
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="card border-0">
							<img
								src="https://images.pexels.com/photos/2671089/pexels-photo-2671089.jpeg"
								className="newsPicThumb"
								alt="travel deal"
							/>
							<div className="card-body">
								<h5 className="card-title">
									Special title treatment
								</h5>
								<p className="card-text">
									With supporting text below as
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container ">
					<div
						className="row 
					">
						<div className="col-12 text-center  ">
							<button
								type="button"
								className="btn btn-outline-secondary mb-4">
								More Deals Please
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;

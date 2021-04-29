import React from "react";
import {
	withRouter,
	BrowserRouter,
	Route,
	Switch,
	Link
} from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

class SearchBar extends React.Component {
	constructor() {
		super();

		this.formPreventDefault = this.formPreventDefault.bind(this);
	}

	formPreventDefault(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ actions }) => {
						return (
							<div className="container ">
								<div className="mb-3">
									<h6>
										Round Trip &nbsp;
										<i className="fas fa-caret-down mr-4" />{" "}
										1 Adult &nbsp;
										<i className="fas fa-caret-down mr-4" />
										Economy &nbsp;
										<i className="fas fa-caret-down" />
									</h6>
								</div>
								<div className="form-row">
									<div className="col-12">
										<div className="form-inline">
											<div className="input-group mb-2 mr-sm-2 ">
												<div className="input-group-prepend ">
													<div className="input-group-text">
														<i className="fas fa-plane-departure text-secondary" />
													</div>
												</div>
												<input
													type="text"
													className="form-control search"
													placeholder="From ?"
													id="outbound"
												/>
											</div>

											<div className="input-group mb-2 mr-sm-2">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="fas fa-plane-arrival text-secondary" />
													</div>
												</div>

												<input
													type="text"
													className="form-control search"
													placeholder="To ?"
													id="inbound"
												/>
											</div>

											<div className="input-group mb-2 mr-sm-2">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="fa fa-calendar text-secondary" />
													</div>
												</div>

												<input
													type="text"
													className="form-control search"
													placeholder="Departing"
													id="departure_date"
												/>
											</div>

											<div className="input-group mb-2 mr-sm-2">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="fa fa-calendar text-secondary" />
													</div>
												</div>

												<input
													type="text"
													className="form-control search"
													placeholder="Returning"
													id="return_date"
												/>
											</div>

											<button
												className="btn searchbutton mb-2 ml-1"
												onClick={() =>
													actions.searchFlights(
														document.querySelector(
															"[id=outbound"
														).value,
														document.querySelector(
															"[id=inbound"
														).value,
														document.querySelector(
															"[id=departure_date"
														).value,
														document.querySelector(
															"[id=return_date"
														).value,
														this.props.history
													)
												}>
												<i
													className="fa fa-search text-secondary"
													aria-hidden="true"
												/>
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<div className="row d-flex justify-content-center ">
					<i
						className="fas fa-hand-holding-usd fa-2x whycon "
						aria-hidden="true"
					/>
					&nbsp;
					<h5>
						<Link to="./signup" className="whycon">
							Best Deal Ever
						</Link>
						&nbsp;- Search and Save!
					</h5>
				</div>
			</div>
		);
	}
}
export default withRouter(SearchBar);

SearchBar.propTypes = {
	history: PropTypes.object
};

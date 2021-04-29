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

class Searchalt extends React.Component {
	constructor() {
		super();

		this.formPreventDefault = this.formPreventDefault.bind(this);
	}

	formPreventDefault(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
						<div className="theme-search-area theme-search-area-stacked theme-search-area-white">
							<div className="theme-search-area-header _ta-c">
								<h1 className="theme-search-area-title theme-search-area-title-lg">
									<strong>Cheap Fares</strong>
								</h1>
								<p className="theme-search-area-subtitle">
									Search thousands of fares at onces
								</p>
							</div>
							<div
								className="theme-search-area-form"
								id="hero-search-form">
								<div className="row" data-gutter="none">
									<div className="col-md-5 ">
										<div className="row" data-gutter="none">
											<div className="col-md-6 ">
												<div className="theme-search-area-section first theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved">
													<div className="theme-search-area-section-inner">
														<i className="theme-search-area-section-icon lin lin-location-pin" />
														<input
															className="theme-search-area-section-input typeahead"
															type="text"
															placeholder="Departure"
															data-provide="typeahead"
														/>
													</div>
												</div>
											</div>
											<div className="col-md-6 ">
												<div className="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved">
													<div className="theme-search-area-section-inner">
														<i className="theme-search-area-section-icon lin lin-location-pin" />
														<input
															className="theme-search-area-section-input typeahead"
															type="text"
															placeholder="Arrival"
															data-provide="typeahead"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 ">
										<div className="row" data-gutter="none">
											<div className="col-md-4 ">
												<div className="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved">
													<div className="theme-search-area-section-inner">
														<i className="theme-search-area-section-icon lin lin-calendar" />
														<input
															className="theme-search-area-section-input datePickerStart _mob-h"
															value="Wed 06/27"
															type="text"
															placeholder="Check-in"
														/>
														<input
															className="theme-search-area-section-input _desk-h mobile-picker"
															value="2018-06-27"
															type="date"
														/>
													</div>
												</div>
											</div>
											<div className="col-md-4 ">
												<div className="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved">
													<div className="theme-search-area-section-inner">
														<i className="theme-search-area-section-icon lin lin-calendar" />
														<input
															className="theme-search-area-section-input datePickerEnd _mob-h"
															value="Mon 07/02"
															type="text"
															placeholder="Check-out"
														/>
														<input
															className="theme-search-area-section-input _desk-h mobile-picker"
															value="2018-07-02"
															type="date"
														/>
													</div>
												</div>
											</div>
											<div className="col-md-4 ">
												<div
													className="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved quantity-selector"
													data-increment="Passengers">
													<div className="theme-search-area-section-inner">
														<i className="theme-search-area-section-icon lin lin-people" />
														<input
															className="theme-search-area-section-input"
															value="1 Passenger"
															type="text"
														/>
														<div
															className="quantity-selector-box"
															id="FlySearchPassengers">
															<div className="quantity-selector-inner">
																<p className="quantity-selector-title">
																	Passengers
																</p>
																<ul className="quantity-selector-controls">
																	<li className="quantity-selector-decrement">
																		<a href="#">
																			&#45;
																		</a>
																	</li>
																	<li className="quantity-selector-current">
																		1
																	</li>
																	<li className="quantity-selector-increment">
																		<a href="#">
																			&#43;
																		</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-1 ">
										<button className="theme-search-area-submit _mt-0 _tt-uc theme-search-area-submit-no-border theme-search-area-submit-glow theme-search-area-submit-curved">
											<i className="theme-search-area-submit-icon fa fa-angle-right" />
											<span className="_desk-h">
												Search
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Searchalt);

Searchalt.propTypes = {
	history: PropTypes.object
};

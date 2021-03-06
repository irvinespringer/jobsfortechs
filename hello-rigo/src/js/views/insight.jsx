import React, { Component } from "react";
import { withRouter, Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

class Insight extends Component {
	render() {
		return (
			<div className="container mt-5 d-flex justify-content-center ">
				<div className="row ">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.posts.map((news, index) => {
								return (
									<React.Fragment key={index}>
										<div className="col-lg-12 ">
											<div className=" mb-2  ">
												<img
													src={
														news.jetpack_featured_media_url
													}
													className="techNewsImage"
												/>
											</div>
											<div className="m-t-2">
												<h4 className="">
													{news.title}
												</h4>
											</div>

											<div className="text-left">
												{news.content}
											</div>
											<div>
												<hr className="featurette-divider" />
											</div>
										</div>
									</React.Fragment>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

Insight.propTypes = {
	id: PropTypes.number
};

export default withRouter(Insight);

import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import NewsCard from "../component/newscard.jsx";

class Blog extends Component {
	render() {
		return (
			<div className="container mt-5 d-flex justify-content-center ">
				<div className="row ">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.blogs.map((item, index) => {
								return (
									<React.Fragment key={index}>
										<div className="col-lg-12 ">
											<div className=" mb-2  ">
												<img
													src={item.urlToImage}
													className="techNewsImage"
												/>
											</div>
											<div className="m-t-2">
												<h4 className="">
													<Link
														to={
															"/insight/" +
															item.title
														}>
														{item.title}
													</Link>
												</h4>
											</div>

											<div className="text-left">
												{item.content}
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

Blog.propTypes = {
	id: PropTypes.number
};

export default withRouter(Blog);

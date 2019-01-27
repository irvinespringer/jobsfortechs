import React from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

class NewsCard extends React.Component {
	render() {
		return (
			<div className="col-md-6">
				<ul className="list-unstyled">
					<Context.Consumer>
						{({ store }) => {
							let id = this.props.id;

							return (
								<React.Fragment id={id} key={id}>
									<li className="media">
										<img
											className="mr-3 newsPicThumb"
											src={store.articles[id].urlToImage}
											alt=""
										/>
										<div className="media-body">
											<h6 className="mt-0 mb-1">
												{store.articles[id].title}
											</h6>
											<div className="snip">
												{" "}
												{store.articles[id].content}
											</div>
										</div>
									</li>

									{/*	<div className="col-sm-6">
										<ul className="list-unstyled">
											<li className="media">
												<img
													className="mr-3 newsPicThumb"
													src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
													alt=""
												/>
												<div className="media-body">
													<h5 className="mt-0 mb-1">
														Tech news header
													</h5>
													Cras sit amet nibh libero,
													in gravida nulla. Nulla vel
													metus scelerisque ante
													sollicitudin.
												</div>
											</li>
											<li className="media my-4">
												<img
													className="mr-3 newsPicThumb"
													src="https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg"
													alt=""
												/>
												<div className="media-body">
													<h5 className="mt-0 mb-1">
														Tech news header
													</h5>
													Cras sit amet nibh libero,
													in gravida nulla. Nulla vel
													metus scelerisque ante
													sollicitudin.
												</div>
											</li>
											<li className="media">
												<img
													className="mr-3 newsPicThumb"
													src="https://images.pexels.com/photos/355904/pexels-photo-355904.jpeg"
													alt=""
												/>
												<div className="media-body">
													<h5 className="mt-0 mb-1">
														Tech news header
													</h5>
													Cras sit amet nibh libero,
													in gravida nulla. Nulla vel
													metus scelerisque ante
													sollicitudin.
												</div>
											</li>
										</ul>
									</div>*/}
								</React.Fragment>
							);
						}}
					</Context.Consumer>
				</ul>
			</div>
		);
	}
}

NewsCard.propTypes = {
	id: PropTypes.number,
	key: PropTypes.number,
	title: PropTypes.string,
	urlToImage: PropTypes.string,
	description: PropTypes.string,
	publishedAt: PropTypes.string,
	source: PropTypes.object,
	url: PropTypes.string,
	content: PropTypes.string,
	match: PropTypes.object,
	history: PropTypes.object
};

export default withRouter(NewsCard);

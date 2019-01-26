import React from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

class News extends React.Component {
	render() {
		// const {
		// 	title: title,
		// 	description: description,
		// 	publishedAt: publishedAt,
		// 	source: source,
		// 	urlToImage: urlToImage,
		// 	url: url
		// } = this.props;
		return (
			<div className="container mb-5">
				{/*<Context.Consumer>
					{({ store }) => {
						let id = this.props.id;

						return (
							<React.Fragment>
								<div className="row">
									<div className="col-sm-6 ">
										<ul className="list-unstyled">
											<li className="media">
												<img
													className="mr-3 newsPicThumb"
													src={
														store.articles[0]
															.urlToImage
													}
													alt=""
												/>
												<div className="media-body">
													<h5 className="mt-0 mb-1">
														{
															store.articles[0]
																.title
														}
													</h5>
													{store.articles[0].content}
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
									</div>

									<div className="col-sm-6">
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
									</div>
								</div>
							</React.Fragment>
						);
					}}
				</Context.Consumer> */}
			</div>
		);
	}
}

News.propTypes = {
	id: PropTypes.number,
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

export default withRouter(News);

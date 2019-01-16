import React from "react";
//import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

class News extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="container mb-5">
				<Context.Consumer>
					{({ store }) => {
						//let id = this.props.id;

						return (
							<div className="row" /*id={id} key={id}*/>
								<div className="col-sm-6 ">
									<ul className="list-unstyled">
										<li className="media">
											<img
												className="mr-3 newsPicThumb"
												//src={store.news[id].urlToImage}
												alt=""
											/>
											<div className="media-body">
												<h5 className="mt-0 mb-1">
													{/*{store.news[id].title}*/}
												</h5>
												Cras sit amet nibh libero, in
												gravida nulla. Nulla vel metus
												scelerisque ante sollicitudin.
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
												Cras sit amet nibh libero, in
												gravida nulla. Nulla vel metus
												scelerisque ante sollicitudin.
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
												Cras sit amet nibh libero, in
												gravida nulla. Nulla vel metus
												scelerisque ante sollicitudin.
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
												Cras sit amet nibh libero, in
												gravida nulla. Nulla vel metus
												scelerisque ante sollicitudin.
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
												Cras sit amet nibh libero, in
												gravida nulla. Nulla vel metus
												scelerisque ante sollicitudin.
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
												Cras sit amet nibh libero, in
												gravida nulla. Nulla vel metus
												scelerisque ante sollicitudin.
											</div>
										</li>
									</ul>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

News.propTypes = {
	id: PropTypes.number
};

export default News;

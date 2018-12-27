import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class News extends React.Component {
	render() {
		return (
			<div className="container mb-5">
				<div className="row">
					<div className="col-sm-6 ">
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
									Cras sit amet nibh libero, in gravida nulla.
									Nulla vel metus scelerisque ante
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
									Cras sit amet nibh libero, in gravida nulla.
									Nulla vel metus scelerisque ante
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
									Cras sit amet nibh libero, in gravida nulla.
									Nulla vel metus scelerisque ante
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
									Cras sit amet nibh libero, in gravida nulla.
									Nulla vel metus scelerisque ante
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
									Cras sit amet nibh libero, in gravida nulla.
									Nulla vel metus scelerisque ante
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
									Cras sit amet nibh libero, in gravida nulla.
									Nulla vel metus scelerisque ante
									sollicitudin.
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default News;

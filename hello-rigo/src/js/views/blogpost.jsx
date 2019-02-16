import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

class BlogPost extends Component {
	render() {
		return (
			<div className="container mt-5 d-flex justify-content-center ">
				<div className="row ">
					<Context.Consumer>
						{({ store, actions }) => {
							var news = store.blogs.find(item => {
								return (
									item.title == this.props.match.params.theid
								);
							});

							return (
								<React.Fragment>
									<div className="col-lg-12 ">
										<div className=" mb-2  ">
											<img
												src={news.urlToImage}
												className="techNewsImage"
											/>
										</div>
										<div className="m-t-2">
											<h4 className="">{news.title}</h4>
										</div>

										<div className="text-left">
											{news.content}
										</div>
										<div>
											<hr className="featurette-divider" />
											<div className="text-center mb-2">
												<Link to="/">
													<i className="fas  fa-angle-double-left fa-2x" />
												</Link>{" "}
												&nbsp;
												<Link to="/">
													<i className="fas fa-home fa-2x" />
												</Link>
												&nbsp;
												<Link to="/">
													<i className="fas  fa-angle-double-right fa-2x" />
												</Link>
											</div>
										</div>
									</div>
								</React.Fragment>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

BlogPost.propTypes = {
	match: PropTypes.object
};

export default withRouter(BlogPost);

import React from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { withRouter, Link } from "react-router-dom";
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
								<React.Fragment>
									<li className="media" id={id} key={id}>
										<img
											className="mr-3 newsPicThumb"
											src={store.blogs[id].urlToImage}
											alt=""
										/>
										<div className="media-body">
											<h6 className="mt-0 mb-1">
												<Link
													to={
														"/insight/" +
														store.blogs[id].title
													}>
													{store.blogs[id].title}{" "}
												</Link>
											</h6>
											<div className="snip">
												{store.blogs[id].content}
											</div>
										</div>
									</li>
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
	content: PropTypes.string,
	match: PropTypes.object,
	history: PropTypes.object
};

export default withRouter(NewsCard);

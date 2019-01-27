import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import NewsCard from "../component/newscard.jsx";

class TechNews extends Component {
	render() {
		return (
			<div className="container mt-5 d-flex justify-content-center ">
				<div className="row ">
					<Context.Consumer>
						{({ store, items }) => {
							return (items = store.articles
								.filter((i, index) => index < 10)
								.map((news, index) => {
									return (
										<React.Fragment key={index}>
											<div className="col-lg-12 ">
												<div className=" mb-2  ">
													<img
														src={news.urlToImage}
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
								}));
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

TechNews.propTypes = {
	id: PropTypes.number
};

export default withRouter(TechNews);

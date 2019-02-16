import React from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import NewsCard from "../component/newscard.jsx";

class News extends React.Component {
	render() {
		return (
			<div className="container mb-2 ">
				<div className="row ">
					<Context.Consumer>
						{({ store, items }) => {
							return (items = store.blogs
								.filter((i, index) => index < 6)
								.map((news, index) => {
									return <NewsCard id={index} key={index} />;
								}));
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

News.propTypes = {
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

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Nav from "../component/nav.jsx";
import LoginNav from "../component/loginnav.jsx";
import SearchBar from "../component/search.jsx";
import Footer from "../component/footer.jsx";

//create your first component
class SearchResults extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Nav />
				</div>
				<div>
					<LoginNav />
				</div>
				<div>
					<SearchBar />
				</div>

				<div className="container mb-5">
					<div className="row">
						<div className="col-sm-6 ">Search Results</div>

						<div className="col-sm-6">Job Details</div>
					</div>
				</div>

				<div>
					<Footer />
				</div>
			</div>
		);
	}
}
export default SearchResults;

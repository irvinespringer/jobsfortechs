import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "../component/nav.jsx";
import Jumbo from "../component/jumbotron.jsx";
import Skywidget from "../component/skywidget.jsx";
import Footer from "../component/footer.jsx";
import Why from "../component/whyus.jsx";
import Newsletter from "../component/newsletter.jsx";
import Dealslist from "../component/dealslist.jsx";
import Connect from "../views/connect.jsx";
import SearchBar from "../component/search.jsx";
import Searchalt from "../component/searchalt.jsx";
import LoginNav from "../component/loginnav.jsx";
import Cards from "../component/cards.jsx";
import NewsCard from "../component/newscard.jsx";
import News from "../component/news.jsx";
import Insidertips from "../component/insidertips.jsx";

import { Context } from "../store/appContext.jsx";

//create your first component
class Home extends React.Component {
	render() {
		return (
			<div>
				<Jumbo />

				<Cards />

				<Skywidget />
				<Why />
				<Newsletter />
				<Dealslist />
				<News />
				<Insidertips />
			</div>
		);
	}
}
export default Home;

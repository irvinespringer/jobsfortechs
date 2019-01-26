import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "../component/nav.jsx";
import Jumbo from "../component/jumbotron.jsx";
import Footer from "../component/footer.jsx";
import SearchBar from "../component/search.jsx";
import LoginNav from "../component/loginnav.jsx";
import Video from "../component/video.jsx";
import Cards from "../component/cards.jsx";
import News from "../component/news.jsx";

//create your first component
class Home extends React.Component {
	render() {
		return (
			<div>
				<div />

				<div>
					<Jumbo />
				</div>

				<div>
					<Cards />
				</div>
				<Video />
				<div />
				<News />
			</div>
		);
	}
}
export default Home;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home.jsx";
import Insight from "./views/insight.jsx";
import About from "./views/about.jsx";
import Connect from "./views/connect.jsx";
import SignUp from "./views/signup.jsx";
import LogIn from "./views/login.jsx";
import SearchResults from "./views/searchresults.jsx";

class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/insight" component={Insight} />
					<Route exact path="/about" component={About} />
					<Route exact path="/connect" component={Connect} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={LogIn} />
					<Route
						exact
						path="/search-results"
						component={SearchResults}
					/>
				</Switch>
			</BrowserRouter>
		);
	}
}
export default Layout;

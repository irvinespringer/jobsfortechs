import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";
import Store from "./store/appContext.jsx";

import Home from "./views/home.jsx";
import Insight from "./views/insight.jsx";
import About from "./views/about.jsx";
import Connect from "./views/connect.jsx";
import SignUp from "./views/signup.jsx";
import LogIn from "./views/login.jsx";
import SearchResults from "./views/searchresults.jsx";
import TechNews from "./views/technews.jsx";
import Profile from "./views/profile.jsx";
import Resume from "./views/resume.jsx";
import EmployerProfile from "./views/employerprofile.jsx";
import RecentJobsPosted from "./views/recentjobsposted.jsx";
import PostJobForm from "./views/postjobform.jsx";

import Nav from "./component/nav.jsx";
import LoginNav from "./component/loginnav.jsx";
import ProfileNav from "./component/profilenav.jsx";
import Footer from "./component/footer.jsx";

class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/insight" component={Insight} />
						<Route exact path="/about" component={About} />
						<Route exact path="/connect" component={Connect} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/login" component={LogIn} />
						<Route exact path="/technews" component={TechNews} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/resume" component={Resume} />
						<Route
							exact
							path="/employer-profile"
							component={EmployerProfile}
						/>
						<Route
							exact
							path="/search-results"
							component={SearchResults}
						/>
						<Route
							exact
							path="/recent-jobs"
							component={RecentJobsPosted}
						/>
						<Route exact path="/post-job" component={PostJobForm} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}
export default Layout;

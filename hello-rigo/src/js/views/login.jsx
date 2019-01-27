import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Nav from "../component/nav.jsx";
import LoginNav from "../component/loginnav.jsx";
import LogForm from "../component/loginform.jsx";
import Footer from "../component/footer.jsx";
import AccountSettingsForm from "../component/accountsettingsform.jsx";
import ResumeForm from "../component/resumeform.jsx";

class LogIn extends React.Component {
	render() {
		return (
			<div>
				<LogForm />

				{/*<AccountSettingsForm />

				<ResumeForm /> */}
			</div>
		);
	}
}

export default LogIn;

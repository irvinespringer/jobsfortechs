import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Nav from "../component/nav.jsx";
import LoginNav from "../component/loginnav.jsx";
import Footer from "../component/footer.jsx";
import AccountSettingsForm from "../component/accountsettingsform.jsx";

class AccountSettings extends React.Component {
	render() {
		return (
			<div>
				<AccountSettingsForm />
			</div>
		);
	}
}

export default AccountSettings;

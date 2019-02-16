import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Nav from "../component/nav.jsx";
import LoginNav from "../component/loginnav.jsx";
import Footer from "../component/footer.jsx";
import SignUpForm from "../component/signupform.jsx";
import ResumeForm from "../component/resumeform.jsx";

class UpdateResume extends React.Component {
	render() {
		return (
			<div>
				<ResumeForm />
			</div>
		);
	}
}

export default UpdateResume;

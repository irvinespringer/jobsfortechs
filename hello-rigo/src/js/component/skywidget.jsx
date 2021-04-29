import React from "react";
import { BrowserRouter, Route, Switch, Link, Widget } from "react-router-dom";

class Skywidget extends React.Component {
	render() {
		return (
			<div className="">
				<div
					data-skyscanner-widget="FlightSearchWidget"
					data-locale="en-GB"
				/>
				<script src={Widget} async />
			</div>
		);
	}
}

export default Skywidget;

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Video extends React.Component {
	render() {
		return (
			<div className="container mb-5">
				<div className="row">
					<div className="col-sm-4 ">
						<span className="h3">
							Is Your Git Hub Account Updated?
						</span>
					</div>
					<div className="col-sm-8">
						<div className="embed-responsive embed-responsive-16by9">
							<iframe
								className="embed-responsive-item"
								src="https://youtu.be/CuYkkR0z8bQ"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Video;

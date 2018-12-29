import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ProfileNav from "../component/profilenav.jsx";

class Resume extends React.Component {
	render() {
		return (
			<div>
				<ProfileNav />
				<div className="container mt-5 mb-5 ">
					<div className="row ">
						<div className="col-md-12 mb-5 ">
							<h5 className="">Work Experience </h5>
							<div className="font-weight-bold">
								Market Manager
							</div>
							<div>Expedia Group</div>
							<div>November 2014 to present</div>
							<div className="mt-2 mb-2">Description</div>
							<div>
								<span>
									Lorem Ipsum has been the industry standard
									dummy text ever since the 1500s, when an
									unknown printer took a galley of type and
									scrambled it to make a type specimen book.
									It has survived not only five centuries, but
									also the leap into electronic typesetting,
									remaining essentially unchanged
								</span>
							</div>
							<div>... more</div>
							<div className="mt-2 text-right ">
								<i className="fas fa-plus-circle text-success" />
								&nbsp;
								<i className="fas fa-edit text-primary" />
								&nbsp;
								<i className="fas fa-trash-alt text-danger" />
							</div>
						</div>
					</div>
					<div className="row ">
						<div className="col-md-12 mb-5  ">
							<h5>Education</h5>
							<div>Bsc. Accounting</div>
							<div>University of the West Indies</div>
							<div>August 2000 to August 2003</div>
							<div className="mt-2 text-right ">
								<i className="fas fa-plus-circle text-success " />
								&nbsp;
								<i className="fas fa-edit text-primary" />
								&nbsp;
								<i className="fas fa-trash-alt text-danger" />
							</div>
						</div>
					</div>
					<div className="row ">
						<div className="col-md-12 mb-5  ">
							<h5>Skills </h5>
							<div>
								<span>
									excel, word, css, php, ReactJS, HTML5,
									JavaScript, Object Oriented Programming,
									analytics
								</span>
							</div>
							<div className="mt-2 text-right ">
								<i className="fas fa-plus-circle text-success " />
								&nbsp;
								<i className="fas fa-edit text-primary " />
								&nbsp;
								<i className="fas fa-trash-alt text-danger" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Resume;

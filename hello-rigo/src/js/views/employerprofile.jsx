import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import SearchResumes from "../component/searchresumes.jsx";
import ProfileNav from "../component/profilenav.jsx";

class EmployerProfile extends React.Component {
	render() {
		return (
			<div className="container ">
				<ProfileNav />
				<div className="container mt-2 mb-5 ">
					<SearchResumes />
				</div>
				<div className="card-columns d-flex justify-content-center">
					<div className="col-6">
						<div className="text-black shadow bg-white rounded">
							<ul className="">
								<li className="text-center">
									<h5>Manage Account</h5>
								</li>
								<li className="mb-3">
									<Link to="/post-job">Post Job</Link>
								</li>
								<li className="mb-3">
									<Link to="/recent-jobs">
										Recent Jobs Posted
									</Link>
								</li>
								<Link to="/">
									<li className="mb-3">Payments</li>
								</Link>
								<Link to="/">
									<li className="mb-3">Upgrade Plan</li>
								</Link>
								<li className="mb-3">
									<Link to="/">
										<i className="fas fa-sign-out-alt" />
										Log out
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-6 ">
						<div className="text-black shadow bg-white rounded">
							<div className="text-right">
								<i className="fas fa-edit" />{" "}
							</div>

							<ul className="">
								<li className="text-center">
									<h5>Account Settings</h5>
								</li>
								<li className="mb-3">
									<span className="font-weight-bold">
										Name:
									</span>{" "}
									James Yahoo
								</li>
								<li className="mb-3">
									<span className="font-weight-bold">
										Company:
									</span>{" "}
									Yahoo Inc.
								</li>
								<li className="mb-3">
									<span className="font-weight-bold">
										Email:
									</span>{" "}
									recruiter@yahoo.com
								</li>
								<li className="mb-3">
									<span className="font-weight-bold">
										Password:
									</span>{" "}
									********
								</li>
								<li className="mb-3">
									<span className="font-weight-bold">
										Telephone:
									</span>{" "}
									888 678 9980
								</li>
								<li className="mb-3">
									<span className="font-weight-bold">
										{" "}
										Address:
									</span>{" "}
									8766 NW 123rd St,Atlanta,GA, 6578
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="mb-2 mt-4 ">
					<div className="text-danger font-weight-bold">
						Close My Acccount
					</div>
					<div className="mt-2">
						{" "}
						When you close your account, your email address will no
						longer receive marketing emails from Techsperts. You
						will, however, continue to receive communication from
						job seekers you have been in contact with prior to
						closing your account.
					</div>
				</div>
			</div>
		);
	}
}

export default EmployerProfile;

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import SearchBar from "../component/search.jsx";

class Profile extends React.Component {
	render() {
		return (
			<div className="container ">
				<p className=" text-right mt-4 mb-4">
					{" "}
					Hello irvine.springer@gmail.com &nbsp;
					<Link to="/">
						{" "}
						<i className="fas fa-sign-out-alt" />
						Log out
					</Link>
				</p>
				<div className="container mt-2 mb-5 ">
					<SearchBar />
				</div>
				<div className="card-columns d-flex justify-content-center">
					<div className="col-6">
						<div className="text-black shadow bg-white rounded">
							<ul className="">
								<li className="text-center">
									<h5>Resume & Experience</h5>
								</li>
								<li className="mb-3">
									<Link to="/">Upload Resume</Link>
								</li>
								<li className="mb-3">
									Update Experience &nbsp;{" "}
									<i className="fas fa-edit" />
								</li>
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
									Irvine Springer
								</li>
								<li className="mb-3">
									<span className="font-weight-bold">
										Email:
									</span>{" "}
									irvine.springer@gmail.com
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
									7866377804
								</li>
								<li className="mb-3">
									<span className="font-weight-bold">
										{" "}
										Address:
									</span>{" "}
									12136, SW 143LN, Miami, FL, 33186
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
						employers you have been in contact with prior to closing
						your account. After closing your account, if you apply
						for any jobs, you will receive communication from those
						employers as well.{" "}
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Nav from "../component/nav.jsx";
import LoginNav from "../component/loginnav.jsx";
import SearchBar from "../component/search.jsx";
import Footer from "../component/footer.jsx";

//create your first component
class SearchResults extends React.Component {
	render() {
		return (
			<div className="">
				<div className="container mt-5  ">
					<SearchBar />
				</div>
				<div className="container mt-5 mb-5 bg-light bg-light shadow ">
					<div className="row">
						<div className="col-sm-4 bg-light ">
							Search Results
							<div className="mt-1 mb-2 ">
								<div className="font-weight-bold">
									Job Title
								</div>
								<div className=" mt-1">Company Name</div>
								<div>Location</div>
								<div className=" mt-1">Description</div>
								<div className="text-primary">
									What are you waiting for? Apply Now!
									<hr className="featurette-divider" />
								</div>
							</div>
						</div>

						<div className="col-sm-1 bg-white" />

						<div className="col-sm-7 bg-light">
							Job Details
							<div className="mt-1 mb-2 ">
								<div className="font-weight-bold">
									Job Title
								</div>
								<div className="">Company Name</div>
								<div>Location</div>
								<button
									type="button"
									className="btn btn-primary mt-2">
									Apply Now
								</button>
								<hr className="featurette-divider" />
								<div className=" mt-2 mb-1 font-weight-bold">
									Company overview:
								</div>
								<span className="mb-2">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Donec tempus nulla at urna
									mattis blandit. Vestibulum sit amet libero
									eros. Nullam accumsan, lectus sit amet
									euismod maximus, mauris metus tristique
									orci, tristique dictum nisl ante at justo.
									Etiam convallis ligula tortor
								</span>
								<div className=" mt-2 mb-2 font-weight-bold">
									{" "}
									Job Description:
								</div>
								<span className="mb-2">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Donec tempus nulla at urna
									mattis blandit. Vestibulum sit amet libero
									eros. Nullam accumsan, lectus sit amet
									euismod maximus, mauris metus tristique
									orci, tristique dictum nisl ante at justo.
									Etiam convallis ligula tortor
								</span>
								<div className=" mt-2 mb-2 font-weight-bold">
									Responsibilities:
								</div>
								<span className="mb-2">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Donec tempus nulla at urna
									mattis blandit. Vestibulum sit amet libero
									eros. Nullam accumsan, lectus sit amet
									euismod maximus, mauris metus tristique
									orci, tristique dictum nisl ante at justo.
									Etiam convallis ligula tortor
								</span>
								<div className=" mt-2 mb-2 font-weight-bold">
									Qualifications:
								</div>
								<span className="mb-2">
									<li>Qualification 1</li>
									<li>Qualification 2</li>
									<li>Qualification 3</li>
									<li>Qualification 4</li>
								</span>
								<div className="mt-2 mb-2 font-weight-bold">
									Skills:
								</div>
								<span className="mb-2">
									<li>Skill 1</li>
									<li>Skill 2</li>
									<li>Skill 3</li>
									<li>Skill 4</li>
								</span>
								<div className="mt-2 mb-2 font-weight-bold">
									{" "}
									Salary:
								</div>
								<span className="mb-2">$80,000- $120,000</span>
								<div className="mt-2 mb-2 font-weight-bold">
									{" "}
									Benefits:
								</div>
								<span className="mb-2">
									<li>Benefit 1</li>
									<li>Benefit 2</li>
									<li>Benefit 3</li>
									<li>Benefit 4</li>
								</span>
							</div>
						</div>
					</div>
				</div>{" "}
			</div>
		);
	}
}
export default SearchResults;

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class TechNews extends Component {
	render() {
		return (
			<div className="container mt-5 d-flex justify-content-center ">
				<div className="row ">
					<div className="col-lg-12 ">
						<div className=" mb-2  ">
							<img
								src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
								className="techNewsImage"
							/>
						</div>
						<div className="m-t-2">
							<h4 className="">Tech News Title</h4>
						</div>

						<div className="text-left">
							Contrary to popular belief, Lorem Ipsum is not
							simply random text. It has roots in a piece of
							classical Latin literature from 45 BC, making it
							over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia,
							looked up one of the more obscure Latin words,
							consectetur, from a Lorem Ipsum passage, and going
							through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem
							Ipsu
						</div>
						<div>
							<hr className="featurette-divider" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TechNews;

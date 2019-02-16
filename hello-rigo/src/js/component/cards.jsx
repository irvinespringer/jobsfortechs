import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Cards extends React.Component {
	render() {
		return (
			<div className="mb-4">
				<div className="card-columns d-flex justify-content-center">
					<div className="col-md-4 col-sm-12">
						<img
							className="card-img-top"
							src="https://images.pexels.com/photos/1157859/pexels-photo-1157859.jpeg"
							alt="Card image cap"
						/>
						<div className="post-body text-white">
							<h5 className="" />
							<p className="">
								Need a job, need experience? Start your search
								here, create an account, post your resume, get
								hired.
							</p>
							<a href="#" className="btn border border-primary">
								Get Jobs
							</a>
						</div>
					</div>

					<div className="col-4">
						<img
							className="card-img-top"
							src="https://images.pexels.com/photos/34092/pexels-photo.jpg"
							alt="Card image cap"
						/>
						<div className="post-body text-white">
							<h5 className="" />
							<p className="">
								A talented pool of technology experts awaitings.
								Create an account, post jobs, hire the right
								candidate.
							</p>
							<a href="#" className="btn border border-primary">
								Post Job
							</a>
						</div>
					</div>

					<div className="col-4">
						<img
							className="card-img-top"
							src="https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg"
							alt="Card image cap"
						/>
						<div className="post-body text-white">
							<h5 className="" />
							<p className="">
								If a 9 to 5 is not your style and you need help
								generarting leads and aquiring new clients, we
								can help.
							</p>
							<a href="#" className="btn border border-primary">
								Book Consultation
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;

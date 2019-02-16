import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import YouTube from "react-youtube";

class Video extends React.Component {
	render() {
		// const opts = {
		// 	height: "390",
		// 	width: "640",
		// 	playerVars: {
		// 		// https://developers.google.com/youtube/player_parameters
		// 		autoplay: 1
		// 	}
		// };

		return (
			<div className="bg-light">
				<div className="container mb-4">
					<div className="row">
						<div className="col-sm-4 ">
							<span className="h3 text-primary">
								Is Your Git Hub Account Updated?
								<p>Are You Interview Ready?</p>
								<p>Do You Have A Portfolio?</p>
								<p>Is Your Resume Optimized?</p>
							</span>
							<div className="text-primary mt-2 text-center">
								<i className="fab fa-instagram fa-3x" />
								&nbsp;
								<i className="fab fa-facebook-square fa-3x " />
								&nbsp;
								<i className="fab fa-twitter-square fa-3x " />{" "}
							</div>
						</div>
						<div className="col-sm-8">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe
									className="embed-responsive-item"
									src="https://www.youtube.com/embed/playlist?list=PLKzGg_uVtgiwHCT9wfDv3JXBMZUL-VF7v"
									// allowfullscreen
								/>
								{/*<YouTube
									videoId="0fFYacBQPbA"
									opts={opts}
									onReady={this._onReady}
								/>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Video;

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import YouTube from "react-youtube";

class Video extends React.Component {
	render() {
		const opts = {
			height: "390",
			width: "640",
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};

		return (
			<div className="bg-light ">
				<div className="container mb-5">
					<div className="row">
						<div className="col-sm-4 ">
							<span className="h3">
								Is Your Git Hub Account Updated?
							</span>
						</div>
						<div className="col-sm-8">
							<div className="">
								<YouTube
									videoId="0fFYacBQPbA"
									opts={opts}
									onReady={this._onReady}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Video;

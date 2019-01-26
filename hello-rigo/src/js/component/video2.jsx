import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import YouTube from "react-youtube";

class Video2 extends React.Component {
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
			<YouTube
				videoId="0fFYacBQPbA"
				opts={opts}
				onReady={this._onReady}
			/>
		);
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}
}

export default Video2;

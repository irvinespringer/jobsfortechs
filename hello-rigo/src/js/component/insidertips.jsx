import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import YouTube from "react-youtube";

class Insidertips extends React.Component {
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
						<div className="col-sm-6 mt-4 mb-4">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=InsiderTipsWidget&tipType=leadtime&locale=en-GB&market=US&currency=USD&originName='Miami'&destinationName='London'&poweredByLogoColour=light" />
							</div>
						</div>
						<div className="col-sm-6 mt-4 mb-4">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=InsiderTipsWidget&tipType=leadtime&locale=en-GB&market=US&currency=USD&originName='Miami'&destinationName='London'&poweredByLogoColour=light" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Insidertips;

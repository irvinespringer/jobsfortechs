import React from "react";
import {
	BrowserRouter,
	Route,
	Switch,
	Link,
	withRouter
} from "react-router-dom";
import PropTypes from "prop-types";
import ReactDropzone from "react-dropzone";
import request from "superagent";

class Resumeupload extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			files: []
		};
	}

	onDrop = files => {
		// POST to a test endpoint for demo purposes
		const req = request.post("https://httpbin.org/post");

		files.forEach(file => {
			req.attach(file.name, file);
		});

		req.end();
	};

	render() {
		return (
			<div className="text-black shadow bg-white rounded">
				<span className="text-center ">
					<h5>Drag Your Resume Here</h5>
				</span>

				{/*<div className="app">
					<ReactDropzone onDrop={this.onDrop}>
						Drop your best gator GIFs here!!
					</ReactDropzone>
				</div>*/}
			</div>
		);
	}
}

export default withRouter(Resumeupload);

// Resumeupload.propTypes = {
// 	Dropzone: PropTypes.function
// };

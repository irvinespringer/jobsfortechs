import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			fetch(
				"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5b54a21984444a2b9765b50bbb358179"
			)
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store.news = data;
					this.setState({ store });
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}

	return StoreWrapper;
};

export default Store;

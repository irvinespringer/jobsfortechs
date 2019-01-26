import React from "react";
import getState from "./store.js";
import fetch from "isomorphic-fetch";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			//news api fetch
			fetch(
				"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5b54a21984444a2b9765b50bbb358179"
			)
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store = data;
					this.setState({ store });
				});

			//wordpress blog fetch
			fetch("http://www.marxholdings.com/techexperts/wp-json/wp/v2/posts")
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store.posts = data;
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

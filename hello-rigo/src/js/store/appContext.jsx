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
			//blog api fetch
			fetch("https://jobsite-database-api-is758.c9users.io/api/blogs/")
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store.blogs = data;
					this.setState({ store });
				});

			//jobs api fetch
			fetch("https://jobsite-database-api-is758.c9users.io/api/jobs/")
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store.jobs = data;
					this.setState({ store });
				});

			//candidates api fetch
			fetch(
				"https://jobsite-database-api-is758.c9users.io/api/candidates/"
			)
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store.candidates = data;
					this.setState({ store });
				});

			//wordpress blog fetch
			fetch(
				"https://www.marxholdings.com/techexperts/wp-json/wp/v2/posts"
			)
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

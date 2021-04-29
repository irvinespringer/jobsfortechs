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
			// Skyscanner flight search

			fetch(
				"http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/FR/eur/en-US/uk/us/anytime/anytime?apikey=ir445976235421587617582765068600"
			)
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store.searchflights = data;
					this.setState({ store });
				});

			//blog api fetch
			/*fetch("https://jobsite-database-api-is758.c9users.io/api/blogs/")
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store.blogs = data;
					this.setState({ store });
				});*/
			//jobs api fetch
			/*	fetch("https://jobsite-database-api-is758.c9users.io/api/jobs/")
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store.jobs = data;
					this.setState({ store });
				});*/
			//candidates api fetch
			/*fetch(
				"https://jobsite-database-api-is758.c9users.io/api/candidates/"
			)
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store.candidates = data;
					this.setState({ store });
				});*/
			//news blog fetch
			/*fetch(
				"https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-15&sortBy=publishedAt&apiKey=5b54a21984444a2b9765b50bbb358179"
			)
				.then(response => response.json())

				// to update store information
				.then(data => {
					let { store } = this.state;
					store = data;
					this.setState({ store });
				});*/
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

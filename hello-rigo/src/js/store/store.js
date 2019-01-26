const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//this is where your store data lives
			articles: [],

			posts: []
		}
	};
};

export default getState;

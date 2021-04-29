const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//flight search

			searchflights: [],

			//this is where your store data lives
			//new.org api array
			articles: [],

			//job api array
			jobs: [],

			//new array created to pass filtered job search results

			jobsearch: [],

			//blog api array
			blogs: [],

			//wordpress headless test api
			posts: [],

			//list of users/candidates from candidates api
			candidates: [],

			findjobdetails: [],

			login: []
		},

		actions: {
			signInUserClick: (emailInput, passwordInput, history) => {
				const store = getStore();
				// let attempt = 3;
				let candidateLogIndex = store.candidates.findIndex(x => {
					return x.email === emailInput;
				});

				if (
					(emailInput === store.candidates[candidateLogIndex].email &&
						passwordInput ===
							store.candidates[candidateLogIndex].password) ||
					(emailInput === store.candidates[candidateLogIndex].email &&
						passwordInput ===
							store.candidates[candidateLogIndex].password)
				) {
					alert("Login Successfully");
					store.candidates[candidateLogIndex].logStatus = true;
					// alert(store.candidates[candidateLogIndex].logStatus);
					//new array created to validate user to profile
					//store.login = emailInput;

					store.login = store.candidates.filter(item => {
						return item.email == emailInput;
					});

					history.push("/profile");
				} else {
					// attempt--;
					alert("Try Again");
				}
			},

			searchFlights: (
				outbound,
				inbound,
				departure_date,
				return_date,
				history
			) => {
				const store = getStore();

				store.searchflights.filter(item => {
					return (
						item.OriginId.toLowerCase().indexOf(
							outbound.toLowerCase()
						) > -1 &&
						item.DestinationID.toLowerCase().indexOf(
							inbound.toLowerCase()
						) > -1
					);
				});

				setStore({ store: store });

				history.push("/searchresults");
			},

			jobDetails: id => {
				const store = getStore();
				store.findjobdetails = store.jobsearch.find(x => {
					return x.id === id;
				});
				// {
				// 	this.toggleDiv;
				// }
				// console.log(f);
				setStore({ store: store });
			}
		}
	};
};

export default getState;

const getState = ({ getStore, setStore }) => {
	return {
		store: {
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
					store.login = emailInput;
					//setStore({ store: store });
					history.push("/profile");
				} else {
					// attempt--;
					alert("Try Again");
				}
			},

			searchJobs: (job_title, company_location, history) => {
				const store = getStore();

				//          var jobfield= store.jobs.job_title.search(new RegExp(job_title, "i"));

				//               if (jobfield>0)
				//               return 'Matched';
				//else
				//return 'Not Matched';

				store.jobsearch = store.jobs.filter(item => {
					//return (
					//	item.job_title.search(new RegExp(job_title, "i")) > 0
					//);

					if (company_location !== "") {
						return (
							item.job_title
								.toLowerCase()
								.indexOf(job_title.toLowerCase()) > -1 &&
							item.company_location.toLowerCase() ===
								company_location.toLowerCase()
						);
					} else {
						return (
							item.job_title
								.toLowerCase()
								.indexOf(job_title.toLowerCase()) > -1
						);
					}

					//return item.company_location === company_location;

					// const lc = item.toString().toLowerCase();
					// const filter = company_location.toString().toLowerCase();
					// return lc.includes(filter);
				});

				//family.filter(person => person.age > 18);

				//var FilteredList = React.createClass({
				//      filterList: function(event){
				//      var updatedList = this.state.initialItems;
				//      updatedList = updatedList.filter(function(item){
				//      return item.toLowerCase().search(
				//      event.target.value.toLowerCase()) !== -1;
				//      });
				//      this.setState({items: updatedList});
				//       },

				setStore({ store: store });

				history.push("/search-results");
			}
		}
	};
};

export default getState;

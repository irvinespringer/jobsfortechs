const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//this is where your store data lives
			articles: [],

			blog: [],

			//list of users to be replaced with user api from django
			users: [
				{
					email: "john@gmail.com",
					password: "1234",
					logStatus: false
				},
				{
					email: "mark@gmail.com",
					password: "5678",
					logStatus: false
				}
			]
		},

		actions: {
			signInUserClick: (emailInput, passwordInput, history) => {
				const store = getStore();
				// let attempt = 3;
				let userLogIndex = store.users.findIndex(x => {
					return x.email === emailInput;
				});

				if (
					(emailInput === store.users[userLogIndex].email &&
						passwordInput === store.users[userLogIndex].password) ||
					(emailInput === store.users[userLogIndex].email &&
						passwordInput === store.users[userLogIndex].password)
				) {
					alert("Login Successfully");
					store.users[userLogIndex].logStatus = true;
					// alert(store.users[userLogIndex].logStatus);
					setStore({ store: store });
					history.push("/");
				} else {
					// attempt--;
					alert("Try Again");
				}
			}
		}
	};
};

export default getState;

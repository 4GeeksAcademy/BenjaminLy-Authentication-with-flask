const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			
			// Use getActions to call a function within a fuction
			fetchToken: () => {
				const apiUrl = process.env.BACKEND_URL
			}
		}
	};
};

export default getState;

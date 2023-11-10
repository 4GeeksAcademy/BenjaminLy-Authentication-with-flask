const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = process.env.BACKEND_URL 
	return {
		store: {
			isLoggedIn: false,
			hasAccess: false
		},
		actions: {
			
			// Use getActions to call a function within a fuction
			login: async (username, password) => {
				try {
					let options = {
						method: "POST",
						headers:{
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"username": username,
							"password": password
						})
					}
					let response = await fetch (apiUrl + "/api/token", options)
					let data = await response.json()
					if (data) {
						console.log(data)
						sessionStorage.setItem("token", data.token)
						setStore({isLoggedIn: true})
						return true
					}
				}catch(error){
					console.log(error)
				}
			},
			logout: () => {
				setStore({isLoggedIn: false})
				sessionStorage.removeItem("token")
			},
			private: async () => {
				// useEffect
				try{
					let options = {
						headers: {
							"Authorization" : "Bearer " + sessionStorage.getItem("token")
						}
					}
					let response = await fetch(apiUrl + '/api/private', options)
					let data = await response.json()
					
				}catch(error){
					console.log(error)
				}
			}

		}
	};
};

export default getState;

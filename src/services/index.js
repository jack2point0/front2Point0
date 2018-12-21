import decode from 'jwt-decode'

export default class AuthService {
	constructor(domain) {
		this.domain = process.env.REACT_APP_API_URL
	}

	sign_in = (credentials) => {
		return this.authFetch(`${this.domain}/users/sign_in`, {
			method: "POST",
			body: JSON.stringify(credentials),
		})
		.then(statusResponse => {
			console.log(statusResponse);
			let token = statusResponse.headers.get('Authorization')
			// set a JWT token in local storage, taken out of response from API
			console.log(token);
			this.setToken(token)
			//return json from response
			return statusResponse.json()
		})
	}

	register = (user) => {
		console.log('register method:', user)
		return this.authFetch(`${this.domain}/users`, {
			method: "POST",
			body: JSON.stringify(user),
		})
		.then(statusResponse => {
			let token = statusResponse.headers.get('Authorization')
			// set a JWT token in local storage, taken out of response from API
			console.log(token);
			this.setToken(token)
			//return json from response
			return statusResponse.json()
		})
	}

	loggedIn() {
		const token = this.getToken()
		return !!token && !this.isTokenExpired(token)
	}

	isTokenExpired(token) {
		try {
			const decoded = decode(token)
			if (decoded.exp < Date.now() / 1000) {
				return true
			} else {
				return false
			}
		}
		catch (err) {
			return false;
		}
	}

	// The token is stored in the browser
	setToken(token) {
		console.log("THIS IS THE TOKEN FROM SSET TOKEN", token);
    let parsedToken
    if(token===null){
      console.log("No token available.");
    }else{
  		parsedToken = token.split(' ')[1]
			console.log("THIS IS THE PARSED TOKEN", parsedToken);
  		localStorage.setItem('id_token', parsedToken)
    }
	}

	// Fetch the token from local storage
	getToken() {
		return localStorage.getItem('id_token')
	}

	// Removes the token
	logout() {
		localStorage.removeItem('id_token');
	}

	getUserId = () => {
		let tmpToken = this.getToken()
		if(tmpToken !== null && tmpToken !== undefined && tmpToken.length > 0){
			const token = decode(this.getToken());
			return token.sub
		} else {
			return null
		}
	}

	authFetch = (url, options) => {
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}

		if (this.loggedIn()) {
			headers['Authorization'] = 'Bearer ' + this.getToken()
		}

		return fetch(url, {
			headers,
			...options
		})
		.then(apiResponse => this._checkStatus(apiResponse))
		.catch(err => {
			console.log("::: FETCH ERROR CAUGHT:::", err)
			return err
		})
	}

	_checkStatus(response) {
		// console log message on whether or not the http response shows success
		// if in a real application, this would be handled more extensively
		if(response.status >= 200 && response.status < 300) {
			console.log(":::SUCCESS:::");
		} else {
			console.log(":::ERROR:::", response)
		}
		// we just return the whole response either way...
		return response
	}
}

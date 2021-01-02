class AuthenticationService {
    registerSuccessfulLogin(username,password) {
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        return user !== null;
    }

    getLoggedLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user===null) return ''
        return user
    }
}

export default new AuthenticationService()
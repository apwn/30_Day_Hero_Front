import {router} from '../main'

// URL and endpoint constants
const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'api/users/auth'
const SIGNUP_URL = API_URL + 'api/users/'

export default {

  // User object will let us check authentication status
  // var userInfo = JSON.parse(localStorage.getItem('user')),

  user: {
    authenticated: false,
    userInfo: JSON.parse(localStorage.getItem('user'))
    // if (userInfo){
    //   userInfo: userInfo
    // }
  },

  // Send a request to the login URL and save the returned JWT
login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then((data) => {
      // console.log(data)
      localStorage.setItem('token', data.data.token)
      localStorage.setItem('user', JSON.stringify(data.data.user));

      this.user.authenticated = true
      this.user.userInfo = JSON.parse(localStorage.getItem('user'))

      if(redirect) {
        context.$router.go(redirect)
      }

    }, (data) => {
      context.error = data
    })
  },


  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds).then((data) => {
      // console.log(data)
      localStorage.setItem('token', data.data.token)
      localStorage.setItem('user', JSON.stringify(data.data.user));

      this.user.authenticated = true
      this.user.userInfo = JSON.parse(localStorage.getItem('user'))

      if(redirect) {
        context.$router.go(redirect)
      }

    }, (data) => {
      context.error = data
    })
  },

  // signup(context, creds, redirect) {
  //   context.$http.post(SIGNUP_URL, creds, (data) => {
  //     console.log(data)
  //     localStorage.setItem('token', data.token)
  //
  //     this.user.authenticated = true
  //
  //     // if(redirect) {
  //     //   router.go(redirect)
  //     // }
  //
  //   }).error((err) => {
  //     context.error = err
  //   })
  // },

  // To log out, we just need to remove the token
  logout() {
    // localStorage.removeItem('token')
    localStorage.clear()
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
}

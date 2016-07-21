import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Homepage from './views/Homepage.vue'
import NavBar from './views/NavBar.vue'
import Calendar from './views/Calendar.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

import auth from './auth/index.js'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'

// Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

// Check the user's auth status when the app starts
auth.checkAuth()

// Define some components
// var Signup = Vue.extend({
//     template: '<p>This is signup!</p>'
// });
//
// var Bar = Vue.extend({
//     template: '<p>This is bar!</p>'
// });

Vue.component('nav-bar', NavBar)

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend({});

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter();

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/': {
        name: 'index',
        component: Homepage,
        subRoutes: {
            '/': {
                component: Calendar
            }
        }
    },
    '/signup': {
        component: Signup
    },
    '/login': {
        component: Login
    }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector .container.
router.start(App, 'body');

export var router

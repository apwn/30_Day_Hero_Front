import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

// Define some components
var Signup = Vue.extend({
    template: '<p>This is signup!</p>'
});

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App2 = Vue.extend({});

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
      component: App
    },
    '/signup': {
        component: Signup
    },
    '/bar': {
        component: Bar
    }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector .container.
router.start(App2, 'body');

export var router
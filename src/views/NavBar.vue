<template>
  <header id="header">
      <div class="main-logo">
          <a href="#">30 Day Hero</a>
      </div>
      <div class="main-nav">
          <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
          </ul>
      </div>
      <div class="user-nav">
          <a v-link="{ path: '/signup' }" class="button" role="button">Signup</a>
          <a v-if="!userAuth.authenticated" v-link="{ path: '/login' }" class="button" role="button">Login</a>
          <a v-if="userAuth.authenticated" v-link="{ path: '/login' }" class="button" role="button" @click="logout()">Logout</a>

          <!-- right sidebar -->
          <!-- <a href="#" data-component="offcanvas" data-target="#offcanvas-right" data-direction="right" class="button">Open Right</a>
          <div id="offcanvas-right" class="hide">
              <a href="#" class="close"></a>
              <nav>
                  <ul>
                      <li>...</li>
                  </ul>
              </nav>
          </div> -->
      </div>

  </header>
</template>

<script>
 import auth from '../auth'
 export default {
  data () {
    return {
      userAuth: auth.user
      }
    },
    methods: {
      logout() {
        auth.logout()
      }
    }
  }
</script>

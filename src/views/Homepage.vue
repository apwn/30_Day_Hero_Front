<template>
    <div v-if="!user.authenticated">
    <h1>Hello World!</h1>
    <p>There are {{ users }} users signed up!</p><br>
    </div>
    <div v-if="user.authenticated">
    <h1 v-if="user.userInfo.firstName">Hello {{ user.userInfo.firstName }}</h1>
    <h1 v-else>Hi There!</h1>
    <router-view></router-view>
    </div>

</template>


<script>
 import auth from '../auth'
export default {
  ready: function() {
    console.log(auth.user)
  this.$http({url: 'http://localhost:3000/api/info', method: 'GET'}).then(function (response) {
  this.users = response.data.userCount
  })
},
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      userCount : '',
      users: '',
      user: auth.user
    }
  }
}
</script>

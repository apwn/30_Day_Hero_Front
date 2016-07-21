<template>

    <h1>{{ msg }}</h1>
    <p>There are {{ users }} users signed up!</p>
    <p> {{ userAuth.authenticated }} </p>
    <p v-if="userAuth.authenticated">Authenticated!</p>

</template>


<script>
 import auth from '../auth'
export default {
  ready: function() {
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
      msg: 'Hello Tom!',
      userCount : '',
      users: '',
      userAuth: auth.user
    }
  }
}
</script>

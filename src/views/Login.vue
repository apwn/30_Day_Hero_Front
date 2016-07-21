<template>

  <div class="signup-form">
    <h2>Login</h2>

    <form class="form">

    <div class="form-item">
        <label>Email</label>
        <input type="email" name="email" v-model="email">
    </div>

    <div class="form-item">
        <label>Password</label>
        <input type="password" name="password" v-model="password">
    </div>

    </form>
    <div class="form-item">
        <button class="button primary" @click="submit()">Login</button>
    </div>


    </div>

    {{ email }}
    {{ password }}


</template>

<script>
import auth from '../auth/index.js'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit() {
      var credentials = {
        email: this.email,
        password: this.password
      }
      auth.login(this, credentials, '/')
    }
  }
}
</script>

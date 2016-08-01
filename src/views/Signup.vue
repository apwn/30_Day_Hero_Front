<template>

  <div class="signup-form">
    <h2>Signup</h2>

    <form class="form">

    <div class="form-item">
        <label>Name</label>
        <input type="text" name="name" v-model="name">
    </div>

    <div class="form-item">
        <label>Email</label>
        <input type="email" name="email" v-model="email">
    </div>

    <div class="form-item">
        <label>Password</label>
        <input type="password" name="password" v-model="password">
    </div>

    <div class="form-item">
        <label>Password Confirmation</label>
        <input type="password" name="passwordConfirmation" v-model="passwordConfirmation">
    </div>

    </form>
    <div class="form-item">
        <button class="button primary" @click="submit()">Signup</button>
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
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  methods: {
    submit() {
      if (this.name == '' || this.email == '' || this.password == '' || this.passwordConfirmation == ''){
        return alert ("Fields cannot be empty")
      } else if (this.password !== this.passwordConfirmation){
        return alert ("Password Confirmation doesn't match password")
      } else {
        var credentials = {
          firstName: this.name,
          email: this.email,
          password: this.password
        }
        auth.signup(this, credentials, '/')
      }
    }
  }
}
</script>

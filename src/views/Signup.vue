<template>

  <div class="signup-form">
    <h2>Signup</h2>

    <form class="form" v-on:submit.prevent>

    <div class="form-item">
        <label>Name</label>
        <input v-bind:class="[this.name.length > 0 && this.name.length < 2 || this.name.length > 30 ? invalidInput : '']" type="text" name="name" v-model="name" min="2" max="30" required >
    </div>

    <div class="form-item">
        <label>Email</label>
        <input type="email" name="email" v-model="email" required v-bind:class="[this.email.length > 0 && this.email.length < 8 || this.email.length > 60 ? invalidInput : '']"  min="8" max="60">
    </div>

    <div class="form-item">
        <label>Password <small>(between 6 and 16 chars)</small></label>
        <input type="password" name="password" v-model="password" required v-bind:class="[this.password.length > 0 && this.password.length < 6 || this.password.length > 16 ? invalidInput : '']"  min="6" max="16">
    </div>

    <div class="form-item">
        <label>Password confirmation</label>
        <input type="password" name="passwordConfirmation" v-model="passwordConfirmation" required v-bind:class="[this.passwordConfirmation.length > 0 && this.passwordConfirmation.length < 6 || this.passwordConfirmation.length > 16 ? invalidInput : '']"  min="6" max="16">
    </div>

    <div class="form-item">
        <button class="button primary" @click="submit()">Signup</button>
    </div>

    </form>

    </div>

    {{ email }}
    {{ password }}


</template>

<script>
import auth from '../auth/index.js'
export default {
  data() {
    return {
      invalidInput: 'invalid-input',
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

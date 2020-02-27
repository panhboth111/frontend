<template>
  <v-container class="px-12">
    <v-form ref="form" @submit.prevent="register()">
      <v-text-field label="Username" v-model="username" color="teal accent-3"></v-text-field>
      <v-text-field label="Email" v-model="email" color="teal accent-3"></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        color="teal accent-3"
      ></v-text-field>
      <v-btn id="loginBtn" color="teal accent-3 white--text" light block rounded height="50" @click="signup()">Sign Up</v-btn>
    </v-form>
  </v-container>
</template>
<script>
import service from "../../service.js"
export default {
    data() {
        return {
            username:"",
            email:"",
            password:"",
            showPassword:false
        }
    },
    methods: {
      async signup(){
        //alert("hi")
        await service.signup(this.username,this.email,this.password)
      }
    },
}
</script>
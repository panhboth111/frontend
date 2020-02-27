<template>
  <v-container class="px-12">
    <v-form ref="form" @submit.prevent="login()">
      <v-text-field id="usernameInput" label="Username" v-model="username" color="teal accent-3" ></v-text-field>
      <v-text-field
        id="passwordInput"
        label="Password"
        v-model="password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        color="teal accent-3"
      ></v-text-field>



      <v-btn id="loginBtn" color="teal accent-3 white--text" light block rounded height="50" @click="signin()">Login</v-btn>
    </v-form>
  </v-container>
</template>
<script>
import service from "../../service.js"
export default {
    data() {
        return {
            username:"",
            password:"",
            showPassword:false
        }
    },
    methods: {
      async signin(){
        await service.signin(this.username,this.password)
      }
    },
}
</script>
<template>
  <v-app>
  <NavBar v-if="notAuth && isLoaded" />
  <v-content >
    <router-view v-if="isLoaded"></router-view>
  </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue"
import service from "./service.js"
export default {
  name: 'App',
  data() {
    return {
      notAuth:false,
      user:{}
    }
  },
  components: {
    NavBar
  },
  methods: {
    checkPage(){
      this.notAuth = window.location.pathname !== "/"?true:false
    },
    async getUser(){
      await this.$store.dispatch("getUser")
      this.user = this.$store.getters.user
    },
    redirect(){
      service.redirect()
    }
  },
  computed: {
    isLoaded(){
      let loaded
      if(window.location.pathname == "/") loaded = true
      else if(window.location.pathname != "/" && this.$store.getters.user.username == undefined) loaded = false
      else loaded = true
      return loaded
    }
  },
  created() {
    this.checkPage()
    this.getUser()
    this.redirect()
  },
};
</script>
<style >
  {
    margin:0;
    padding:0;
  }
</style>

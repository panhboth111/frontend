<template>
    <nav>
    <v-app-bar clipped-left light src="./pic1.jpg">
            <v-spacer></v-spacer>
            <v-toolbar-title class="white teal--text text--accent-4 display-1">
                <span class="font-weight-thin">SO</span>
                <span>CIAL MEDIA</span>
            </v-toolbar-title>            
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent  app >
        <v-list-item class="pt-2">
            <v-list-item-avatar @click="choosePic">
                <v-img :src="user.profilePic" v-if="user.profilePic"></v-img>
                <v-icon v-else>fa-user</v-icon>
               <input
                type="file"
                accept="image/*"
                ref="picInput"
                @change="picInput"
                style="display:none"
                />
            </v-list-item-avatar>
            <v-list-item-title>{{user.username}}</v-list-item-title>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.label" class="py-5"  >
          <router-link :to="item.to" class="link" >
            <v-btn icon :class="item.color">
              <v-icon>fas {{ item.icon }}</v-icon>
            </v-btn>
          </router-link>
          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <span>
          <v-btn icon class="red--text" @click="signout">
            <v-icon> fa-sign-out-alt</v-icon> 
          </v-btn>
      </span>
    </v-navigation-drawer>
    </nav>
</template>
<script>
import service from "../../service.js"
export default {
    data() {
      return {
        drawer:true,
        mini:true,
        items:[
          {label:"Newsfeed", icon:"fa-newspaper",color:"green--text",to:"/home"},
          {label:"Publish", icon:"fa-pen", color:"blue--text",to:"/publish"},
          {label:"Explore", icon:"fa-search",color:"grey--text",to:"/explore"},
          {label:"About", icon:"fa-question", color:"yellow--text",to:"/about"},
        ],
        user:{}
      }
    },
    methods: {
      getUser(){
        this.user = this.$store.getters.user
        console.log(this.user)
      },
      choosePic(){
            this.$refs.picInput.click();
      },
      async picInput(event){
            const files = event.target.files;
            const selectedFile = files[0];
            const fileReader = new FileReader();
            fileReader.readAsDataURL(selectedFile);
            fileReader.addEventListener("load", async () => {
            await service.changeProfilePic(fileReader.result)
            });
        },
        async signout(){
          await service.signout()
        }
    },
    created() {
      this.getUser()
    },
}
</script>
<style >
  .link{
    text-decoration: none;
}
</style>
<template>
    <div>
        <v-card-title primary-title class="grey-ligthen-1 display-2 test">
                <span class="font-weight-thin test">EX</span>
                <span>PLORE</span>
        </v-card-title>
        <v-list>
            <v-list-item v-for="(user, i) in users" :key="i" >
                <v-card  class="headline d-flex mb-6">
                    <v-list-item-avatar class="pl-5">
                             <v-img :src="user.profilePic" v-if="user.profilePic"></v-img>
                             <v-icon v-else>fa-user</v-icon>
                    </v-list-item-avatar>
                     <v-card-title >
                        <span>{{user.username}}</span>
                        <span class="font-weight-thin pl-5">{{user.email}}</span>   
                     </v-card-title>
                                          
               </v-card>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
import service from "../service"
export default {
    data() {
        return {
            dummyUsers:[
                {username:"Neak Panhboth",email:"neakpanhboth18@kit.edu.kh",profilePic:"none"},
                {username:"Neak Panhboth",email:"neakpanhboth18@kit.edu.kh",profilePic:"none"},
                {username:"Neak Panhboth",email:"neakpanhboth18@kit.edu.kh",profilePic:"none"},
                {username:"Neak Panhboth",email:"neakpanhboth18@kit.edu.kh",profilePic:"none"},
                {username:"Neak Panhboth",email:"neakpanhboth18@kit.edu.kh",profilePic:"none"},
            ],
            users:[]
        }
    },
    methods: {
        async getUsers(){
            this.users = await service.getUsers()
        }
    },
    created() {
        this.getUsers()
    },
}
</script>
<style>
    .test{
        letter-spacing:2px;
        line-height:2;
    }
</style>
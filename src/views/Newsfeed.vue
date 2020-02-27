<template>
    <span> 
        <v-card>
            <v-card-title primary-title class="grey-ligthen-1 display-2 test">
                <span class="font-weight-thin test">NEWS</span>
                <span>FEED</span>
            </v-card-title>
            <v-carousel hide-delimiters >
                <v-carousel-item v-for="(post,i) in posts" :key="i" class="text-uppercase" :src="post.content" transition="fade-transition" reverse-transition="fade-transition" >
                    <p class="white--text display-1 text--lighten-2 font-weight-thin">{{post.postedBy}}</p>
                </v-carousel-item>
             </v-carousel>
        </v-card>
    </span>
</template>
<script>
import service from "../service"
export default {
    data() {
        return {
            dummyPosts:[
                {postedBy:"Neak Panhboth",content:"https://picsum.photos/510/300?random", date:"9:00 PM"},
                {postedBy:"pboth99",content:"https://picsum.photos/510/300?random", date:"9:00 PM"},
                {postedBy:"pboth99",content:"https://picsum.photos/510/300?random", date:"9:00 PM"},
                {postedBy:"pboth99",content:"https://picsum.photos/510/300?random", date:"9:00 PM"},
                {postedBy:"pboth99",content:"https://picsum.photos/510/300?random", date:"9:00 PM"},
            ],
            posts:[]
        }
    },
    methods: {
        async getPosts(){
            this.posts = await service.getPosts()
        }
    },
    created() {
        this.getPosts()
    },
}
</script>

<style >
    .test{
        letter-spacing:2px;
        line-height:2;
    }

</style>
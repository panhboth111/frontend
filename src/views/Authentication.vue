<template>
    <div class="d-flex align-center container-div">
        <span class="bg"></span>
        <AuthenticationCard />
    </div>
</template>
<script>
import AuthenticationCard from '../components/Authentication/AuthenticationCard.vue'
export default {
    components:{
        AuthenticationCard
    }
}
</script>
<style>
    .container-div {
         height: 100%;
    }
    .bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("flowers.jpg")
    no-repeat center center;
  background-size: cover;
  filter: blur(5px);
  -webkit-filter: blur(5px);
}
</style>
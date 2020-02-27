<template>
  <v-card flat width="600">
    <v-tabs background-color="transparent" centered color="teal accent-3" class="mb-5">
      <v-tab v-for="item in items" :key="item">
        <div style="width: 100px">{{ item }}</div>
      </v-tab>
      <v-tab-item style="height: 390px">
        <SigninTab />
      </v-tab-item>

      <v-tab-item style="height: 390px">
        <SignupTab />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import SigninTab from "./SigninTab.vue"
import SignupTab from "./SignupTab.vue"
export default {
    data() {
        return {
            items:["Sign in","Sign up"]
        }
    },
    components:{
        SigninTab,
        SignupTab
    }
}
</script>
<template>
    <v-card height="600" width="1000"  class="mx-auto">
        <v-row align="center" no-gutters>
            <v-col cols="5">
                 <v-card height="600"  class="text-center">
                    <v-img
                        height="600"
                        width="500"
                        src="./mint.jpg"
                        class="white--text align-center grey darken-4"
                        >
                            <h1  class="display-2 text-uppercase">
                             <span class="font-weight-light">So</span>
                                <span>cial Media</span>
                             </h1>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="7">
                <v-card tile height="600" class="text-center">
                    <v-img class="align-center white" height="600">
                        <FormTabs />
                    </v-img>
                    </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
import FormTabs from "./FormTabs.vue"
export default {
    name:'AuthenticationCard',
    components:{
        FormTabs
    }
}
</script>
<template>
    <div>
        <span> 
            <v-card>
                <v-card-title primary-title class="display-2 test">
                    <span class="font-weight-thin test">PUB</span>
                    <span>LISH</span>
                </v-card-title>
                <v-btn @click="choosePic">CHOOSE PICTURE</v-btn>
                <input
                type="file"
                accept="image/*"
                ref="picInput"
                @change="picInput"
                style="display:none"
                />
                <v-img :src="picURL">
                    <v-btn color="success" @click="upload()">UPLOAD</v-btn>
                </v-img>
            </v-card>
        </span>
    </div>
</template>
<script>
import service from "../service.js"
export default {
    data() {
        return {
            picURL : ""
        }
    },
    methods: {
        choosePic(){
            this.$refs.picInput.click();
        },
        picInput(event){
            const files = event.target.files;
            const selectedFile = files[0];
            const fileReader = new FileReader();
            fileReader.readAsDataURL(selectedFile);
            fileReader.addEventListener("load", () => {
            this.picURL = fileReader.result;
            });
        },
        async upload(){
            if(!this.picURL) alert("Please select a photo")
            else await service.upload(this.picURL)
        }
    },

}
</script>
<template>
<div style="margin-top:100px;">
  <v-carousel cycle hide-delimiter-background  >
    <center>
    <v-carousel-item  
      v-for="(item,i) in items"
      :key="i"
      :src="item"  max-width="500px" 
    ></v-carousel-item>
    </center>
  </v-carousel>

  
  </div>
</template>

<script>
import axios from "axios";
export default {
 
 data () {
      return {

         items: {},
         
        
      }
    }, mounted (){
      axios.get('http://localhost:8000/api/elections')
      .then(response =>{
        
        let imageArray = [];
        for (let i = 0; i < response.data.data.length; i++) {
          console.log("http://localhost:8000/storage/Elections_images/"+response.data.data[i].image)
          imageArray.push(
            "http://localhost:8000/storage/Elections_images/"+response.data.data[i].image);
        }
     this.items=imageArray;
      
      }).catch(error =>{
 console.log(error)
            this.errored = true
      })
    }
    
}
</script>

<style scoped>

.text_title{
   margin-top: 100px;
    text-align: center;
     margin-bottom: 50px;
}
.text_result{
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
}
</style>
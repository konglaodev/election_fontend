<template>
<div style="margin-top:100px;">
  <v-carousel hide-delimiters >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item"
    ></v-carousel-item>
  </v-carousel>

  <div class="text_title">
      <h1 style="font-size:50px;">ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ເວັບໄຊ</h1>     
      <h2 style="opacity: 0.5">ເລືອກຕັ້ງນາຍບ້ານຮູບແບບອອນລາຍ</h2>
    </div>

  <div class="text_result">ຜົນການເລືອກຕັ້ງ</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
 
 data () {
      return {

        items: {}
         
        ,
      }
    }, mounted (){
      axios.get('http://localhost:8000/api/showimagesCandidate')
      .then(response =>{
        
        let imageArray = [];
        for (let i = 0; i < response.data.data.length; i++) {
          console.log("http://localhost:8000/storage/candidate_images/"+response.data.data[i].image)
          imageArray.push(
            "http://localhost:8000/storage/candidate_images/"+response.data.data[i].image);
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
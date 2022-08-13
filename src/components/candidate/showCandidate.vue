<template>
<div style="margin-top:100px;" class="home">
    <center>
        <h1  >ເລືອກຕັ້ງນາຍບ້ານ ສະໄໝທີ IX</h1>
    </center>
    
    <v-container grid-list-xs v-for="item in candidateData" :key="item.id">
         <v-card  
    class="mx-auto"
    max-width="400"
    
    
  >
  <v-img :src="'http://localhost:8000/storage/candidate_images/'+item.image">

      </v-img>
    <v-list-item three-line >
    
      <v-list-item-content>
        <div class="text-overline mb-4">
     
        </div>
        <v-list-item-title class="text-h5 mb-1">
          <h3>  {{item.gender}} {{item.name}} {{item.surname}}</h3><br>
          
        </v-list-item-title>
        <h5 style="font-size:16px">
        <v-list-item-subtitle><b >ວັນເດືອນປີເກີດ :</b> {{item.dateOfBirth}}</v-list-item-subtitle>
        <v-list-item-subtitle><b>ນະໂຍບາຍ :</b> {{item.slogan}}</v-list-item-subtitle>
        <v-list-item-subtitle><b>ປະຫວັດຫຍໍ້: </b> {{item.history}}</v-list-item-subtitle>
        <v-list-item-subtitle><b>ທີ່ຢູ່: </b>{{item.address}}</v-list-item-subtitle></h5>
      </v-list-item-content>

      <!-- <v-list-item-avatar
        tile
        size="80"
        color="grey" max-width="500px"
      
      >
      <v-img :src="'http://localhost:8000/storage/candidate_images/'+item.image">

      </v-img></v-list-item-avatar> -->
    </v-list-item>

    <v-card-actions>
       <v-btn
              x-large
              color="success"
              dark
               @click="openConfirmDialog(item)"
            >
                ເລືອກນາຍບ້ານ
            </v-btn>
      <!-- <v-btn
        outlined
        rounded
        text
        color="primary"
       
     
      >
      
      </v-btn> -->
    </v-card-actions>
  </v-card>

    </v-container>
  <v-dialog
      v-model="comfirmDialog"
      persistent
      max-width="400"
    >
      <v-card class="home">
        <v-card-title class="text-h5">
         ຢັ້ນຢືນການເລືອກຕັ້ງ
        </v-card-title>
        <v-card-text >ທ່ານຕ້ອງການເລືອກ  <b class="home" >{{voteData.gender}} {{voteData.name}} {{voteData.surname}}</b> ແທ້ບໍ່?.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click.stop="comfirmDialog = false"
          >
            ຍົກເລີກ
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="vote()"
          >
            ຕົກລົງ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  <v-dialog
      v-model="responseDialog"
      persistent
      max-width="290"
      style="font-family:$font-family;"
    >
      <v-card>
        <v-card-title class="text-h5">
         {{responseMessage.header}}
        </v-card-title>
        <v-card-text>{{responseMessage.message}}.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="closeResponseDialog()"
          >
            ປິດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div> 




  
</template>
<script>
import axios from "axios";
export default{
  data(){
    return {
      responseMessage:{
        header:"",
        message:"",
      },
      responseDialog:false,
    
      voteData:{},
      comfirmDialog:false,
      candidateData :[]
    }
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/Candidate").then((response)=>{
      this.candidateData = response.data.data;
    }).catch((err)=>{
      console.log(err);
    })
  },
  methods:{
    closeResponseDialog(){
     this.responseMessage.header = "";
    this.responseMessage.message= "";
   
    this.responseDialog = false;

    
    },
    openConfirmDialog(item){
     
     
      this.voteData = item;
      this.comfirmDialog=true;
    },
   vote(){
   
   console.log(localStorage.getItem("populations_id"));
   console.log(this.voteData.id);
   axios.post("http://127.0.0.1:8000/api/vote",{
    population_id:localStorage.getItem("populations_id"),
    candidate_id:this.voteData.id
   }).then((response)=>{
    this.responseMessage.header = "ເລືອກສຳເລັດ";
    this.responseMessage.message= "ການເລືອກຂອງທ່ານສຳເລັດແລ້ວ";
      this.comfirmDialog = false; 
    this.responseDialog=true;
    
   }).catch((err)=>{
    /* eslint-disable */
      this.comfirmDialog = false; 
     if(localStorage.getItem("populations_id")=="undefined")
      {
         this.responseMessage.message="ບໍ່ສາມາດເລືອກໄດ້ ທ່ານບໍ່ໄດ້ຮັບສິດ";
       
      }
   this.responseMessage.header="ການເລືອກບໍ່ສຳເລັດ";
   if(err.response.status==422){
     this.responseMessage.message="ທ່ານບໍ່ມີສິດເລືອກ";
   }
   else{
   console.log(err.response.data);
 console.log(err.response.data["message"]);
     this.responseMessage.message="ບໍ່ສາມາດເລືອກໄດ້";
   }
   this.responseDialog=true;
    /* eslint-disable */
   })
   }
  }
}

</script>
<style lang="scss" >


.home{
    font-family: $font-family  !important;

}
</style>
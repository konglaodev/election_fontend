<template>
  <div class="home" >
    <div class="text_title">
      <h1 style="font-size:50px;">ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ເວັບໄຊ</h1>     
      <h2 style="opacity: 0.5">ເລືອກຕັ້ງນາຍບ້ານຮູບແບບອອນລາຍ</h2>
    </div>

  <div class="text_result">ຜົນການເລືອກຕັ້ງ</div>
     <v-data-table 
     
    :headers="header"
    :items="candidateData"
    :items-per-page="10"
    class="elevation-1 "
  >
    <template v-slot:[`item.index`]="{ item }">
    <p>{{candidateData.indexOf(item)+1 }}</p>
  </template>
  <template v-slot:[`item.candidate_images`]="{ item }">
     <v-img
              max-height="250"
              max-width="150"
              :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.candidate_image"
          ></v-img>
  </template>
  <template v-slot:[`item.candidate_name`]="{ item }">
    <p>{{item.gender }} {{item.candidate_name}} {{item.candidate_surname}}</p>
  </template>
  </v-data-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  
  data() { 
    return {
      no:1,
      header:[
          {
          text:'ລຳດັບທີ',
          align:'start',
          sortable: true,
          value: 'index'
        },
        {
          text:'ຮູບ',
          align:'start',
          sortable: true,
          value:'candidate_images'
        },
        {
          text:'ຊື່ ແລະ ນາມສະກຸນ ຜູ້ລົງສະໝັກເລືອກຕັ້ງ',
          align:'start',
          sortable: true,
          value:'candidate_name'
        },

        {
          text:'ຄະແນນເລືອກຕັ້ງ',
          sortable: true,
          value:'votes_count'
        }
      ],
      candidateData:[

      ],
      desserts: [
      ],
    };
  },
  mounted(){
    axios.get('http://127.0.0.1:8000/api/getScoreAll').then(response=>{
      this.candidateData = response.data.Data;
    
    }).catch(error => console.log(error));
  }
};
</script>
<style lang="scss" scoped>
.home{
    font-family: $font-family  !important;

}
  .vote_main{
    font-size: 35px;
  }
  table.v-table thead th {
      font-size: 20px !important;

 }
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

  .v-data-table ::v-deep th{

        font-size: 24px !important
  }
    .v-data-table ::v-deep td{
font-size: 24px !important
    }
        
</style>
<template>
  <div >
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
  ></v-data-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      header:[
        {
          text:'ຊື່',
          align:'start',
          sortable: true,
          value:'candidate_name'
        },
        {
          text:'ນາມສະກຸນ',
          sortable: true,
          value:'candidate_surname'
        },
        {
          text:'ຄະແນນໂຫວດ',
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
<style scoped>
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
</style>
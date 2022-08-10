<template>
  <div class="vote_main">

     <v-data-table 
    :headers="header"
    :items="candidateData"
    :items-per-page="5"
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
</style>
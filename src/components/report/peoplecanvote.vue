<template>
  <div class="container">
     <div  id="report">
     <div style="text-align:center;"><h1>ປະຊາກອນທີ່ມີສິດ ຜ່ານການກວດ</h1></div>
    
      <v-btn @click="print" color="success">ປີ້ນລາຍງານ</v-btn>
     <v-data-table 
    disable-pagination
      hide-default-footer
    :headers="headersPeopleVerify"
    :items="peopleCanvote"
 
    class="elevation-1 "
  >
    <template v-slot:[`item.index`]="{ item }">
    <p>{{peopleCanvote.indexOf(item)+1 }}</p>
  </template>
    <!-- <template v-slot:[`item.index`]="{ item }">
    <p>{{notevote.indexOf(item)+1 }}</p>
  </template>
  <template v-slot:[`item.candidate_images`]="{ item }">
     <v-img
              max-height="250"
              max-width="150"
              :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.candidate_image"
          ></v-img>
  </template> -->
  <template v-slot:[`item.name`]="{ item }">
    <p>{{item.gender }} {{item.name}} {{item.surname}}</p>
  </template>
  </v-data-table>
  </div>
     <div  id="report">
     <div style="text-align:center;"><h1>ປະຊາກອນທີ່ເລືອກແລ້ວ</h1></div>
    
      <!-- <v-btn @click="print" color="success">ປີ້ນລາຍງານ</v-btn> -->
     <v-data-table 
    disable-pagination
      hide-default-footer
    :headers="headersVoting"
    :items="voting"
 
    class="elevation-1 "
  >
  <template v-slot:[`item.index`]="{ item }">
    <p>{{voting.indexOf(item)+1 }}</p>
  </template>
    <!-- <template v-slot:[`item.index`]="{ item }">
    <p>{{notevote.indexOf(item)+1 }}</p>
  </template>
  <template v-slot:[`item.candidate_images`]="{ item }">
     <v-img
              max-height="250"
              max-width="150"
              :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.candidate_image"
          ></v-img>
  </template> -->
  <template v-slot:[`item.name`]="{ item }">
    <p>{{item.gender }} {{item.name}} {{item.surname}}</p>
  </template>
  </v-data-table>
  </div>
     <div  id="report">
     <div style="text-align:center;"><h1>ປະຊາກອນທີ່ມີສິດ ຍັງບໍ່ທັນເລືອກຕັ້ງ</h1></div>
    
      
     <v-data-table 
    disable-pagination
      hide-default-footer
    :headers="headersNotVote"
    :items="noteVote"
    :items-per-page="50"
    class="elevation-1 "
  >
   <template v-slot:[`item.index`]="{ item }">
    <p>{{noteVote.indexOf(item)+1 }}</p>
  </template>
    <!-- <template v-slot:[`item.index`]="{ item }">
    <p>{{notevote.indexOf(item)+1 }}</p>
  </template>
  <template v-slot:[`item.candidate_images`]="{ item }">
     <v-img
              max-height="250"
              max-width="150"
              :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.candidate_image"
          ></v-img>
  </template> -->
  <template v-slot:[`item.name`]="{ item }">
    <p>{{item.gender }} {{item.name}} {{item.surname}}</p>
  </template>
  </v-data-table>
  </div>
     <div  id="report">
     <div style="text-align:center;"><h1>ປະຊາກອນທີ່ມີອາຍຸຮອດ 18 ປີ</h1></div>
    
      
     <v-data-table 
    disable-pagination
      hide-default-footer
    :headers="headersvotingAge"
    :items="votingAge"
    :items-per-page="50"
    class="elevation-1 "
  >
<template v-slot:[`item.index`]="{ item }">
    <p>{{votingAge.indexOf(item)+1 }}</p>
  </template>
    <!-- <template v-slot:[`item.index`]="{ item }">
    <p>{{notevote.indexOf(item)+1 }}</p>
  </template>
  <template v-slot:[`item.candidate_images`]="{ item }">
     <v-img
              max-height="250"
              max-width="150"
              :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.candidate_image"
          ></v-img>
  </template> -->
  <template v-slot:[`item.name`]="{ item }">
    <p>{{item.gender }} {{item.name}} {{item.surname}}</p>
  </template>
  </v-data-table>
  </div>
  <table class="pt-10 " >
    <tr style="width: 100%; margin-bottom:200px; " >
        <td style="width: 90% ;"> <h3 style="margin-left:10%" >ເຊັນຄະນະກຳມະການ</h3></td>
        <td style=""> <h3>ເຊັນຄະນະບ້ານ</h3> </td>
        
    </tr>
  </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:'report',
    data(){
    return{
        no:1,
      voting:[],
      noteVote :[],
      peopleCanvote:[],
      votingAge:[],
      
      
  
     
         
      headersPeopleVerify:[
          {
          text:'ລຳດັບທີ',
          align:'start',
          sortable: true,
          value: 'index'
        },
        {
          text:'ຊື່ ແລະ ນາມສະກຸນ',
          align:'start',
          sortable: true,
          value:'name'
        },
        { text: 'ວ/ດ/ປ ເກີດ', value: 'dateOfBirth' },
        {
          text:'ເບີໂທ',
          align:'start',
          sortable: true,
          value:'phoneNumber'
        },
        {
          text:'ສຳມະໂນຄົວເລກທີ',
          align:'start',
          sortable: true,
          value:'cencus_id'
        },

        {
          text:'ສະຖານະ',
          sortable: true,
          value:'status'
        }
      ],
   

    
      headersNotVote: [
         {
          text:'ລຳດັບທີ',
          align:'start',
          sortable: true,
          value: 'index'
        },
        // { text: 'ຮູບ', value: 'image' },
        { text:'ເພດ',value: 'gender'},
        {
          text: 'ຊື່',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        // { text: 'ເບີໂທ', value: '' },
        { text: 'ເບີໂທ', value: 'phoneNumber' },
        { text: 'ວ/ດ/ປ ເກີດ', value: 'dateOfBirth' },
        // { text: 'ທີ່ຢູ່', value: 'address' },
           { text: 'ເລກສຳມະໂນ', value: 'cencus_id' },
        // { text: 'Actions', value: 'actions', sortable: false },
      ],
      headersVoting: [
         {
          text:'ລຳດັບທີ',
          align:'start',
          sortable: true,
          value: 'index'
        },
        // { text: 'ຮູບ', value: 'image' },
        { text:'ເພດ',value: 'gender'},
        {
          text: 'ຊື່',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        // { text: 'ເບີໂທ', value: '' },
        { text: 'ເບີໂທ', value: 'phoneNumber' },
        { text: 'ວ/ດ/ປ ເກີດ', value: 'dateOfBirth' },
        // { text: 'ທີ່ຢູ່', value: 'address' },
           { text: 'ເລກສຳມະໂນ', value: 'cencus_id' },
        // { text: 'Actions', value: 'actions', sortable: false },
      ],
      headersvotingAge: [
         {
          text:'ລຳດັບທີ',
          align:'start',
          sortable: true,
          value: 'index'
        },
        // { text: 'ຮູບ', value: 'image' },
        { text:'ເພດ',value: 'gender'},
        {
          text: 'ຊື່',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        // { text: 'ເບີໂທ', value: '' },
        { text: 'ເບີໂທ', value: 'phoneNumber' },
        { text: 'ວ/ດ/ປ ເກີດ', value: 'dateOfBirth' },
        // { text: 'ທີ່ຢູ່', value: 'address' },
        //    { text: 'ເລກສຳມະໂນ', value: 'cencus_id' },
        // { text: 'Actions', value: 'actions', sortable: false },
      ],
      
    }
  },
  mounted(){
//  axios.get("http://127.0.0.1:8000/api/canvoted").then((response)=>{
//   // console.log('res',response);
//       let vot = response.data.data;
//       this.voting= vot[0]['canvoted'];
//       // console.log(this.voting);
//     }).catch((err)=>{
//       console.log(err);
//     });
 axios.get("http://127.0.0.1:8000/api/peopleNotvote").then((response)=>{
  // console.log('res',response);
       this.noteVote = response.data.data;
    
      console.log('thislog',this.notevote);
    }).catch((err)=>{
      console.log(err);
    });
 axios.get("http://127.0.0.1:8000/api/peoplecanvoteAndChecked").then((response)=>{
  // console.log('res',response);
       this.peopleCanvote = response.data.data;
    
      console.log('thislog',this.peopleCanvote);
    }).catch((err)=>{
      console.log(err);
    });
     axios.get("http://127.0.0.1:8000/api/showpopulations").then((response)=>{
  // console.log('res',response);
       this.voting = response.data.data;
    
      // console.log('thislog',this.peopleCanvote);
    }).catch((err)=>{
      console.log(err);
    });
     axios.get("http://127.0.0.1:8000/api/populationAgeCanvote").then((response)=>{
  // console.log('res',response);
       this.votingAge = response.data.data;
    
      // console.log('thislog',this.peopleCanvote);
    }).catch((err)=>{
      console.log(err);
    });
    
    
  },
  methods:{
      print() {
      window.print();
    },
  }
}
</script>

<style>
  #printPageButton { 
    display: none;
  
  }
    
    @page {
  size: 100%
}
</style>
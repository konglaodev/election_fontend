<template>
  <div>

    <Navbar :title="title"/>
    <div class="container-content">
        
<center class=" py-5 pt">          <h1>ລາຍງານຜົນການເລືອກຕັ້ງ</h1>
</center>

 
      <br>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6">
            <h2>ຈຳນວນປະຊາກອນທັງໝົດ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2>{{peopleDataCount['data'].length ?? "0"}} ຄົນ</h2>
          </v-col>
          <v-col cols="12" sm="6">
            <h2>ຈຳນວນປະຊາກອນທີ່ສາມາດເລືອກຕັ້ງ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2> {{this.voting}} ຄົນ</h2>
          </v-col>
          <v-col cols="12" sm="6">
            <h2>ຈຳນວນປະຊາກອນທີ່ລົງຄະແນນແລ້ວ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2>{{peopleData['data'].length ?? "0"}} ຄົນ</h2>
          </v-col>
          <v-col cols="12" sm="6">
            <h2>ຈຳນວນຜູ້ລົງສະໝັກເລືອກຕັ້ງ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2>{{candidateData['data'].length ?? "0"}} ຄົນ</h2>
          </v-col>
        </v-row>
      </v-container>
      <br>
      <hr>
      <br>
      <div class="make_center py-5 pt-5">
        <h1>ສະຫຼຸບຄະແນນເລືອກຕັ້ງ</h1>
      </div>

      <v-simple-table >
        <template v-slot:default>
          <thead>
          <tr>
             <th class="text-left">
              ນາມ
            </th>
            <th class="text-left">
               ຊື່
            </th>
            <th class="text-left">
              ນາມສະກຸນ
            </th>
            <th class="text-left">
             ຄະແນນ
            </th>
           
          </tr>
          </thead>
          <tbody>
            
          <tr
              v-for="item in candidateHighVoteData['Data']"
              :key="item.id"
          >

            <!-- <td>  <v-img
                max-height="250"
                max-width="150"
                :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.candidate_image"
            ></v-img></td> -->
            <td>{{ item.gender}}</td>
            <td>{{ item.candidate_name }}</td>
            <td>{{ item.candidate_surname }}</td>
            <td>{{ item.votes_count }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <Peoplereport />
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import Peoplereport from '@/components/report/peoplecanvote.vue';
import { mapActions, mapGetters } from "vuex";
import Navbar from "@/components/bie/village_headman/dashboard/navbar.vue"
export default {
  name: "election_candidates",
 
  data(){
    return{
      voting:""
 ,     search: '',
      title:"ລາຍງານຂໍ້ມູນການເລືອກຕັ້ງ",
      dialog: false,
      dialogDelete: false,
      permissionItem:[
        'abc',
        'efg'
      ],
      headersPeople: [
        { text: 'ຮູບ', value: 'image' },
        { text:'ເພດ',value: 'gender'},
        {
          text: 'ຊື່',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ນາມສະກຸນ', value: 'surname' },
        // { text: 'ເບີໂທ', value: 'phoneNumber' },
        { text: 'ວ/ດ/ປ ເກີດ', value: 'dateOfBirth' },
        // { text: 'ທີ່ຢູ່', value: 'address' },
           { text: 'ເລກສຳມະໂນ', value: 'cencus_id' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      peopleItem: {
        name: '',
        surname: '',
        gender: '',
        dateOfBirth: '',
    
        cencus_id: '',
        image: '',
      },
      defaultItem: {
        name: '',
        surname: '',
        gender: '',
        dateOfBirth: '',
        cencus_id: '',
   
        image: '',
      },
    }
  },
  components:{
    Navbar,
    Peoplereport
  },
  computed: {
    ...mapGetters({
      peopleVotedData:"People/peopleVotedData",
      candidateHighVoteData: "ElectionInformation/candidateHighVoteData",
      peopleData: "ElectionInformation/peopleVotedData",
          peopleDataCount: "People/peopleData",
      censusData: "Census/censusData",
      candidateData: "Candidate/candidateData"

    }),
    formTitle () {
      return this.editedIndex === -1 ? 'ເພີ່ມຜູ້ໃຊ້' : 'ລາຍລະອຽດຂອງປະຊາກອນ'
    },
  },
  mounted(){
 axios.get("http://127.0.0.1:8000/api/canvoted").then((response)=>{
  console.log('res',response);
      let vot = response.data.data;
      this.voting= vot[0]['canvoted'];
      console.log(this.voting);
    }).catch((err)=>{
      console.log(err);
    });
  },


  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.getPeople()
    this.getCandidateHighVote()
    this.getCandidate()
    this.getPeopleVoted()
    this.getPeopleCount()

  },

  methods: {
    ...mapActions({
      getPeopleVoted:"People/getPeopleVoted",
      getCandidate: "Candidate/getCandidate",
      getCandidateHighVote: "ElectionInformation/getCandidateAllHighVote",
      getCensus:"Census/getCensus",
      getPeople: "ElectionInformation/getPeopleVoted",
      getPeopleCount : "People/getPeople",
      getPeopleOne: "PeopleForJudge/getPeopleOne",
    }),



    viewItem (item) {
      this.btnIndex = 1
      this.editedIndex = this.peopleData['data'].indexOf(item)
      this.peopleItem = Object.assign({}, item)
      this.dialogView = true
    },

    editItem (item) {
      this.btnIndex = 0
      this.editedIndex = this.peopleData['data'].indexOf(item)
      this.peopleItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.peopleItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.peopleItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.peopleItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.peopleItem)
      } else {
        this.desserts.push(this.peopleItem)
      }
      this.close()
    },
  },

}
</script>

<style lang="scss" scoped>


.container-content{
  width: 100%;
  background-color: #f0f2f5;
  padding: 1rem;

  .make_center{
    width: 100%;
    text-align: center;
  }
}
 .v-data-table ::v-deep th{

        font-size: 24px !important
  }
    .v-data-table ::v-deep td{
font-size: 16px !important
    }
</style>
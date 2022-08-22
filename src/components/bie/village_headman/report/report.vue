<template>
  <div>

    <div class="container-content pt-5">
            <center><h1>ລາຍງານຂໍ້ມູນການເລືອກຕັ້ງ</h1></center>
     
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
            <h2>ຈຳນວນປະຊາກອນທີ່ມີສິດເລືອກຕັ້ງ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2> {{this.voting}} ຄົນ</h2>
          </v-col>
          <v-col cols="12" sm="6">
            <h2>ຈຳນວນປະຊາກອນທີ່ລົງຄະແນນ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2>{{peopleData['data'].length ?? "0"}} ຄົນ</h2>
          </v-col>
          <v-col cols="12" sm="6">
            <h2>ຈຳນວນຜູ້ລົງສະໝັກເລືອກຕັ້ງນາຍບ້ານ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2>{{candidateData['data'].length ?? "0"}} ຄົນ</h2>
          </v-col>
        </v-row>
      </v-container>
      <br>
      <hr>
      <br>
      <div class="make_center py-3 pt-3" >
        <h1>ຄະແນນການເລືອກຕັ້ງປັດຈຸບັນ</h1>
      </div>

      <v-simple-table >
        <template v-slot:default>
          <thead>
          <tr>
             <th class="text-left">
              ຮູບ
            </th>
            <th class="text-left">
              ເພດ
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

            <td> 
               <v-img
                max-height="150"
                max-width="100"
                :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.candidate_image"
            ></v-img></td>
            <td>{{ item.gender}}</td>
            <td>{{ item.candidate_name }}</td>
            <td>{{ item.candidate_surname }}</td>
            <td>{{ item.votes_count }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
       <center><h1 class="pt-3 py-3">ລາຍຊື່ປະຊາກອນທັງໝົດທີ່ເລືອກຕັ້ງແລ້ວ</h1></center>
       <v-data-table
          :search="search"
          :headers="headersPeople"
          :items="peopleData['data']"
          sort-by="calories"
          class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
              flat
          >


            <v-spacer></v-spacer>
            <v-dialog
                v-model="dialog"
                max-width="700px"
            >

              <template v-slot:activator="{  }">

                <v-text-field

                    class="pr-10"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
              </template>

              <v-card>
                <v-card-title>
                  {{ formTitle }}
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row dense>
                      <v-col
                          cols="6"
                      >
                        <v-img

                            max-height="600"
                            max-width="400"
                            :src="'http://127.0.0.1:8000/storage/populations_images/'+peopleItem.image"
                        ></v-img>

                      </v-col>

                      <v-col cols="6">
                        <v-row >

                          <v-col
                              cols="12"
                          >
                            <h3>
                              ຊື່ແລະນາມສະກຸນ: {{peopleItem.gender}} {{peopleItem.name}} {{peopleItem.surname}}
                            </h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >
                            <h3>ວັນເດືອນປີເກີດ: {{peopleItem.dateOfBirth}}</h3>
                          </v-col>

                          <!-- <v-col
                              cols="12"
                          >
                            <h3>ເບີໂທ: {{peopleItem.phoneNumber}}</h3>
                          </v-col> -->

                          <v-col
                              cols="12"
                          >
                            <h3>ເລກສຳມະໂນ: {{peopleItem.cencus_id}}</h3>
                          </v-col>

                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                  >
                    ປິດ
                  </v-btn>
                  <!-- <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                  >
                    ບັນທຶກ
                  </v-btn> -->
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="800px" >
              <v-card
              >
                <br>
                <v-card-title class="text-h5 justify-center" >ຕ້ອງການລຶບຜູ້ໃຊ້ແທ້ຫຼືບໍ່?</v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey" dark @click="closeDelete">Cancel</v-btn>
                  <v-btn color="red darken-1" dark @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            
          </v-toolbar>
        </template>
        
        <template v-slot:[`item.image`]="{item}">
          <v-img
              max-height="80"
              max-width="60"
              :src="'http://127.0.0.1:8000/storage/populations_images/'+item.image"
          ></v-img>
        </template>
        <template v-slot:[`item.actions`]="{ item }">

          <v-icon
              color="blue"
              large
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-eye
          </v-icon>
          <!--          <v-icon-->
          <!--              color="red"-->
          <!--              dense-->
          <!--              @click="deleteItem(item)"-->
          <!--          >-->
          <!--            mdi-delete-->
          <!--          </v-icon>-->
        </template>

      </v-data-table>
    </div>
    <v-btn
      depressed
      color="primary"
       @click="print"
    >
      ປີ້ນລາຍງານ
    </v-btn>
     <div  id="report">
     <div style="text-align:center;"><h1>ປະຊາກອນທີ່ມີສິດແຕ່ຍັງບໍ່ໄດ້ເລືອກຕັ້ງ</h1></div>
    
      
     <v-data-table 
     :search="search"
    :headers="header"
    :items="notevote"
    :items-per-page="50"
    class="elevation-1 "
  >
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
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "election_candidates",
  data(){
    return{
      voting:"",
      peopleCanvote:"",
      
      
   search: '',
      title:"ລາຍງານຂໍ້ມູນການເລືອກຕັ້ງ",
      dialog: false,
      dialogDelete: false,
      permissionItem:[
        'abc',
        'efg'
      ],      no:1,
      header:[
        //   {
        //   text:'ລຳດັບທີ',
        //   align:'start',
        //   sortable: true,
        //   value: 'index'
        // },
        {
          text:'ຊື່ ແລະ ນາມສະກຸນ',
          align:'start',
          sortable: true,
          value:'name'
        },
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

        // {
        //   text:'ຄະແນນເລືອກຕັ້ງ',
        //   sortable: true,
        //   value:'votes_count'
        // }
      ],
      notevote:[]

      ,
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
  // console.log('res',response);
      let vot = response.data.data;
      this.voting= vot[0]['canvoted'];
      // console.log(this.voting);
    }).catch((err)=>{
      console.log(err);
    });
 axios.get("http://127.0.0.1:8000/api/peopleNotvote").then((response)=>{
  // console.log('res',response);
       this.notevote = response.data.data;
    
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
      async print () {
      // Pass the element id here
      await this.$htmlToPaper('report');
    },
  



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

font-style:bold;
        font-size: 24px !important;
        text-align: center !important ;
        
  }
    .v-data-table ::v-deep td{
font-size: 18px !important;
 text-align: center !important ;
    }
    #report{
      text-align: center !important; 
    }
</style>
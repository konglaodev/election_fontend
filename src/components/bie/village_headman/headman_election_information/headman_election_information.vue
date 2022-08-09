<template>
  <div>
    <Navbar :title="title"/>
    <div class="container-content">

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

                            max-height="250"
                            max-width="150"
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

                          <v-col
                              cols="12"
                          >
                            <h3>ເບີໂທ: {{peopleItem.phoneNumber}}</h3>
                          </v-col>

                          <v-col
                              cols="12"
                          >
                            <h3>ທີ່ຢູ່: {{peopleItem.address}}</h3>
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
                    ຍົກເລີກ
                  </v-btn>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                  >
                    ບັນທຶກ
                  </v-btn>
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
              max-height="250"
              max-width="150"
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
      <br>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6">
            <h2>ປະຊາກອນທັງໝົດ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2>{{peopleData['data'].length ?? "0"}} ຄົນ</h2>
          </v-col>
          <v-col cols="12" sm="6">
            <h2>ປະຊາກອນທີ່ສາມາດລົງຄະແນນທັງໝົດ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2>{{peopleData['data'].length - peopleVotedData['data'].length ?? "0"}} ຄົນ</h2>
          </v-col>
          <v-col cols="12" sm="6">
            <h2>ປະຊາກອນທີ່ລົງສຽງແລ້ວ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2>{{peopleVotedData['data'].length ?? "0"}} ຄົນ</h2>
          </v-col>
          <v-col cols="12" sm="6">
            <h2>ຜູ້ລົງສະໝັກເລືອກຕັ້ງ</h2>
          </v-col>
          <v-col cols="12" sm="2">
            <h2>{{candidateData['data'].length ?? "0"}} ຄົນ</h2>
          </v-col>
        </v-row>
      </v-container>
      <br>
      <hr>
      <br>
      <div class="make_center">
        <h1>ຄະແນນການເລືອກຕັ້ງປັດຈຸບັນ</h1>
      </div>

      <v-simple-table dark>
        <template v-slot:default>
          <thead>
          <tr>
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
              v-for="item in candidateHighVoteData['data']"
              :key="item.id"
          >

            <td>  <v-img
                max-height="250"
                max-width="150"
                :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.image"
            ></v-img></td>
            <td>{{ item.gender }}</td>
            <td>{{ item.candidate_name }}</td>
            <td>{{ item.candidate_surname }}</td>
            <td>{{ item.votes_count }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "@/components/bie/village_headman/dashboard/navbar.vue"
export default {
  name: "election_candidates",
  data(){
    return{
      search: '',
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
        { text: 'ເບີໂທ', value: 'phoneNumber' },
        { text: 'ວ/ດ/ປ ເກີດ', value: 'dateOfBirth' },
        { text: 'ທີ່ຢູ່', value: 'address' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      peopleItem: {
        name: '',
        surname: '',
        gender: '',
        dateOfBirth: '',
        phoneNumber: '',
        address: '',
        image: '',
      },
      defaultItem: {
        name: '',
        surname: '',
        gender: '',
        dateOfBirth: '',
        phoneNumber: '',
        address: '',
        image: '',
      },
    }
  },
  components:{
    Navbar
  },
  computed: {
    ...mapGetters({
      peopleVotedData:"People/peopleVotedData",
      candidateHighVoteData: "ElectionInformation/candidateHighVoteData",
      peopleData: "PeopleForJudge/peopleData",
      censusData: "Census/censusData",
      candidateData: "Candidate/candidateData"

    }),
    formTitle () {
      return this.editedIndex === -1 ? 'ເພີ່ມຜູ້ໃຊ້' : 'ລາຍລະອຽດຂອງປະຊາກອນ'
    },
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

  },

  methods: {
    ...mapActions({
      getPeopleVoted:"People/getPeopleVoted",
      getCandidate: "Candidate/getCandidate",
      getCandidateHighVote: "ElectionInformation/getCandidateAllHighVote",
      getCensus:"Census/getCensus",
      getPeople: "PeopleForJudge/getPeople",
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
</style>
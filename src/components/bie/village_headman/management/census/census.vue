<template>
  <div>
    <Navbar :title="title"/>
    <div class="container-content">

      <v-data-table
          :search="search"
          :headers="headers"
          :items="censusData['0']"
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
                max-width="500px"
            >
              <template v-slot:activator="{ on, attrs }">

                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                >
                  ເພີ່ມ
                </v-btn>
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
                          cols="12"
                      >
                        <v-text-field
                            outlined
                            v-model="censusItem.cencus_id"
                            label="ເລກສຳມະໂນ"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                      >
                        <v-select
                            :items="unitData['data']"
                            item-text="number"
                            item-value="id"
                            label="ໜ່ວຍ"
                            outlined
                            v-model="censusItem.village_id"
                        ></v-select>

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
            <v-dialog v-model="dialogDelete" max-width="500px" >
              <v-card>
                <v-card-title class="justify-center" >ຕ້ອງການລຶບເລກສຳມະໂນແທ້ຫຼືບໍ່?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey" dark @click="closeDelete">ຍົກເລີກ</v-btn>
                  <v-btn color="red darken-1" dark @click="deleteItemConfirm">ຕົກລົງ</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">

          <v-icon
              color="orange"
              dense
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              color="red"
              dense
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
              color="primary"
              @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </div>
    <Alert/>
  </div>
</template>

<script>
import Alert from "@/components/bie/alert/alert.vue"
import Navbar from "@/components/bie/village_headman/dashboard/navbar.vue"
import {mapActions, mapGetters} from "vuex";
export default {
  name: "census",
  data(){
    return{
      search: '',
      title:"ຈັດການເລກສຳມະໂນ",
      dialog: false,
      dialogDelete: false,
      unitItem:[
        'ໜ່ວຍ1',
        'ໜ່ວຍ2'
      ],
      headers: [
        {
          text: 'ເລກສຳມະໂນ',
          align: 'start',
          sortable: false,
          value: 'cencus_id',
        },
        { text: 'ເລກໜ່ວຍ', value: 'village_id', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      censusItem: {
        cencus_id:'',
        village_id: '',
      },
      defaultItem: {
        cencus_id:'',
        village_id: '',
      },
    }
  },
  components:{
    Navbar,
    Alert
  },
  computed: {
    ...mapGetters({
      censusData: "Census/censusData",
      unitData: "Unit/unitData"
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'ເພີ່ມເລກສຳມະໂນ' : 'ແກ້ເລກສຳມະໂນ'
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
    this.getCensus()
    this.getUnit()
  },

  methods: {
    ...mapActions({
      getUnit:"Unit/getUnit",
      getCensus: "Census/getCensus",
      getCensusOne: "Census/getCensusOne",
      createCensus: "Census/createCensus",
      updateCensus: "Census/updateCensus",
      deleteCensus: "Census/deleteCensus"
    }),
    initialize () {
      this.desserts = [
        {
          census:'001',
          villages_number: 'ໜ່ວຍ1',
        },
        {
          census:'002',
          villages_number: 'ໜ່ວຍ2',
        },

      ]
    },

    editItem (item) {
      this.editedIndex = this.censusData['0'].indexOf(item)
      this.censusItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.censusData['0'].indexOf(item)
      this.censusItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.deleteCensus(
          {census_id:this.censusData['0'][this.editedIndex]['id']}
      )
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.censusItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.censusItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        this.updateCensus({census_id: this.censusData['0'][this.editedIndex]['id'],village_id_ref:this.censusItem.village_id,cencus_id_ref:this.censusItem.cencus_id})
      } else {
        this.createCensus({cencus_id_ref:this.censusItem.cencus_id.toString(),village_id_ref:this.censusItem.village_id})
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
}
</style>
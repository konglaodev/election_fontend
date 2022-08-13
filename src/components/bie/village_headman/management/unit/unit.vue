<template>
  <div>
    <Navbar :title="title"/>
    <div class="container-content">

      <v-data-table
          :search="search"
          :headers="headers"
          :items="unitData['data']"

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
                            v-model="unitItem.number"
                            label="ໜ່ວຍ"
                        ></v-text-field>
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
              <v-card
              >

                <v-card-title class="justify-center" >ຕ້ອງການລຶບໜ່ວຍບ້ານແທ້ຫຼືບໍ່?</v-card-title>

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
  name: "unit",
  data(){
    return{
      search: '',
      title:"ຈັດການໜ່ວຍບ້ານ",
      dialog: false,
      dialogDelete: false,

      headers: [
        {
          text: 'ເລກໜ່ວຍ',
          align: 'start',
          sortable: false,
          value: 'number',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],

      editedIndex: -1,
      unitItem: {
        number: '',
      },
      defaultItem: {
        number: '',
      },
    }
  },
  components:{
    Navbar,
    Alert
  },
  computed: {
    ...mapGetters({
      unitData: "Unit/unitData",
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'ເພີ່ມໜ່ວຍບ້ານ' : 'ແກ້ໜ່ວຍບ້ານ'
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

 mounted() {
    this.getUnit()
 },

  methods: {
    ...mapActions({
      getUnit: "Unit/getUnit",
      getUnitOne: "Unit/getUnitOne",
      createUnit: "Unit/createUnit",
      updateUnit: "Unit/updateUnit",
      deleteUnit: "Unit/deleteUnit"
    }),

    editItem (item) {
      this.editedIndex = this.unitData['data'].indexOf(item)
      this.unitItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.unitData['data'].indexOf(item)
      this.unitItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.deleteUnit({village_number_id:this.unitData['data'][this.editedIndex]['id']})
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.unitItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.unitItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        this.updateUnit({village_number_id: this.unitData['data'][this.editedIndex]['id'],number:this.unitItem.number})
      } else {
        this.createUnit({number:this.unitItem.number})
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
 .v-data-table ::v-deep th{

        font-size: 24px !important
  }
    .v-data-table ::v-deep td{
font-size: 24px !important
    }
</style>
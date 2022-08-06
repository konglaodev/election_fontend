<template>
  <div>
    <Navbar :title="title"/>
    <div class="container-content">

      <v-data-table
          :search="search"
          :headers="headers"
          :items="desserts"
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
                  New Item
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
                            v-model="editedItem.census"
                            label="ເລກສຳມະໂນ"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"

                      >
                        <v-select
                            :items="unitItem"
                            label="ໜ່ວຍ"
                            outlined
                            v-model="editedItem.villages_number"
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
                    Cancel
                  </v-btn>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px" >
              <v-card
              >

                <v-card-title class="justify-center" >ຕ້ອງການລຶບເລກສຳມະໂນແທ້ຫຼືບໍ່?</v-card-title>

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
  </div>
</template>

<script>
import Navbar from "@/components/bie/village_headman/dashboard/navbar.vue"
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
          text: 'Census No',
          align: 'start',
          sortable: false,
          value: 'census',
        },
        { text: 'Villages number', value: 'villages_number', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        census:'',
        villages_number: '',
      },
      defaultItem: {
        census:'',
        villages_number: '',
      },
    }
  },
  components:{
    Navbar
  },
  computed: {
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
    this.initialize()
  },

  methods: {
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
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
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
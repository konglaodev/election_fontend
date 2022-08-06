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
                            v-model="editedItem.name"
                            label="ຊື່ຜູ້ໃຊ້"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"

                      >
                        <v-text-field
                            outlined
                            v-model="editedItem.phone"
                            label="ເບີໂທ"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"

                      >
                        <v-text-field
                            outlined
                            v-model="editedItem.password"
                            label="ລະຫັດຜ່ານ"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"

                      >
                        <v-text-field
                            outlined
                            v-model="editedItem.cpassword"
                            label="ຢືນຢັນລະຫັດຜ່ານ"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"

                      >
                        <v-select
                            :items="permissionItem"
                            label="ສິດການນຳໃຊ້"
                            outlined
                            v-model="editedItem.permission"
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

                <v-card-title class="justify-center" >ຕ້ອງການລຶບປະຊາກອນຄົນນີ້ແທ້ຫຼືບໍ່?</v-card-title>
                <v-card-subtitle >{{editedItem.name}}</v-card-subtitle>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey" dark @click="closeDelete">Cancel</v-btn>
                  <v-btn color="red darken-1" dark @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog
                v-model="dialogView"
                max-width="500px"
            >
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
                            lazy-src="https://picsum.photos/id/11/10/6"
                            max-height="250"
                            max-width="150"
                            src="https://picsum.photos/id/11/500/300"
                        ></v-img>

                      </v-col>

                      <v-col cols="6">
                        <v-row >

                          <v-col
                              cols="12"
                          >
                            <h3>
                              ຊື່ຜູ້ໃຊ້: {{editedItem.name}}
                            </h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >
                            <h3>ເບີໂທ: {{editedItem.phone}}</h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >

                            <h3>ວັນເດືອນປີເກີດ: {{editedItem.dob}}</h3>
                          </v-col>
                          <v-col
                              cols="12"

                          >

                            <h3>ທີ່ຢູ່: {{editedItem.address}}</h3>
                          </v-col>
                          <v-col
                              cols="12"

                          >
                            <h3>ສຳມະໂນຄົວເລກທີ: {{editedItem.census_no}}</h3>

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
                      @click="closeView"
                  >
                    Cancel
                  </v-btn>

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
              class="mr-2"
              color="red"
              dense
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
          <v-icon
              color="blue"
              large
              class="mr-2"
              @click="viewItem(item)"
          >
            mdi-eye
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
  name: "elector",
  data(){
    return{
      btnIndex:-1,
      search: '',
      title:"ຈັດການປະຊາກອນ",
      dialog: false,
      dialogDelete: false,
      dialogView:false,
      permissionItem:[
        'abc',
        'efg'
      ],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        phone: '',
        password: '',
        cpassword: '',
        permission: '',
      },
      defaultItem: {
        name: '',
        phone: '',
        password: '',
        cpassword: '',
        permission: '',
      },
    }
  },
  components:{
    Navbar
  },
  computed: {
    formTitle () {
      return this.btnIndex === -1 ? 'ເພີ່ມປະຊາກອນ' :this.btnIndex === 0 ? 'ແກ້ໄຂປະຊາກອນ' : 'ເບິ່ງລາຍລະອຽດປະຊາກອນ'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogView (val) {
      val || this.closeView()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ]
    },

    viewItem (item) {
      this.btnIndex = 1
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogView = true
    },

    editItem (item) {
      this.btnIndex = 0
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

    closeView () {
      this.dialogView = false
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
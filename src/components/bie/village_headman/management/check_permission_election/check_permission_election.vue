<template>
  <div>
    <Navbar :title="title"/>
    <div class="container-content">
      <center>
        <h1 style="margin-top:30px;margin-bottom:30px;">ກວດສອບສິດເລືອກຕັ້ງ</h1>
      </center>
        
      <v-data-table
          :search="search"
          :headers="headers"
          :items="verifyData['data']"
          class="elevation-1"
      >
      
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-spacer></v-spacer>
            <v-dialog
                v-model="dialog"
                max-width="395px"
            >
              <template v-slot:activator="{ }">


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
                            disabled
                            outlined
                            v-model="verifyItem.status"
                            label="ປ່ຽນສະຖານະ"
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

                            max-height="250"
                            max-width="150"
                            :src="'http://127.0.0.1:8000/storage/verifys_images/'+verifyItem"
                        ></v-img>

                      </v-col>

                      <v-col cols="6">
                        <v-row >

                          <v-col
                              cols="12"
                          >
                            <h3>
                              ສະຖານະ: {{verifyItem.status}}
                            </h3>
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
                    ປິດ
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
              color="blue"
              large
              class="mr-2"
              @click="viewItem(item)"
          >
            mdi-eye
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
  name: "check_permission_election",
  data(){
    return{
      btnIndex:-1,
      search: '',
      title:"ກວດສອບສິດເລືອກຕັ້ງ",
      dialog: false,
      dialogDelete: false,
      dialogView:false,

      headers: [
        {
          text: 'ຮູບ',
          align: 'start',
          sortable: false,
          value: 'picture_verify',
        },
        { text: 'ສະຖານະ', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      verifyItem: {
        picture_verify: '',
        status: '',
        user_id: '',
      },
      defaultItem: {
        picture_verify: '',
        status: '',
        user_id: '',
      },
    }
  },
  components:{
    Navbar,
    Alert
  },
  computed: {
    ...mapGetters({
      verifyData: "Verify/verifyData",
    }),
    formTitle () {
      return this.btnIndex === -1 ? 'ເພີ່ມປະຊາກອນ' :this.btnIndex === 0 ? 'ແກ້ໄຂສິດ' : 'ເບິ່ງລາຍລະອຽດ'
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
    this.getVerify()
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
    ...mapActions({
      getVerify:"Verify/getVerify",
      updateVerify: "Verify/updateVerify"
    }),

    viewItem (item) {
      this.btnIndex = 1
      this.editedIndex = this.VerifyData['data'].indexOf(item)
      this.verifyItem = Object.assign({}, item)
      this.dialogView = true
    },

    editItem (item) {
      this.btnIndex = 0
      this.editedIndex =this.VerifyData['data'].indexOf(item)
      this.verifyItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.verifyItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.verifyItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.verifyItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeView () {
      this.dialogView = false
      this.$nextTick(() => {
        this.verifyItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        this.updateVerify({verify_id:this.VerifyData['data'][this.editedIndex]['id'] ,user_id:this.verifyItem.user_id,status:this.verifyItem.status})
      } else {
        this.desserts.push(this.verifyItem)
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
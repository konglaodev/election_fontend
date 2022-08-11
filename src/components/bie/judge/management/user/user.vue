<template>
  <div>
    <Navbar :title="title"/>
    <div class="container-content">

      <v-data-table
          :search="search"
          :headers="headers"
          :items="userData['data']"

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
                          v-show="editedIndex < 0"
                          cols="12"
                      >
                        <v-text-field
                            outlined
                            v-model="userItem.name"
                            label="ຊື່ຜູ້ໃຊ້"
                        ></v-text-field>
                      </v-col>
                      <v-col

                          cols="12"

                      >
                        <v-text-field
                            :disabled="editedIndex > -1"
                            outlined
                            v-model="userItem.phoneNumber"
                            label="ເບີໂທ"
                        ></v-text-field>
                      </v-col>
<v-col
                          v-show="editedIndex < 0"
                          cols="12"
                      >
                        <v-text-field
                            outlined
                            v-model="userItem.password"
                            label="ລະຫັດຜ່ານ"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                      >
                          <v-select
                              :items="permissionItem"
                              item-text="name"
                              item-value="id"
                              label="ສິດການນຳໃຊ້"
                              outlined
                              v-model="userItem.role_id"
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

        </template>
        

      </v-data-table>
    </div>
    <Alert/>
  </div>
</template>

<script>
import Alert from "@/components/bie/alert/alert.vue"
import Navbar from "@/components/bie/judge/dashboard/navbar.vue"
import {mapActions, mapGetters} from "vuex";
export default {
  name: "user",
  data(){
    return{
      search: '',
      title:"ຈັດການຜູ້ໃຊ້",
      dialog: false,
      dialogDelete: false,
      permissionItem:[
        {'id':1,'name': 'superadmin'},
        {'id':2,'name': 'admin'},
        {'id':3,'name': 'user'}
      ],
      headers: [
        {
          text: 'ຊື່',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ເບີໂທ', value: 'phoneNumber' },
         { text: 'ລະຫັດຜ່ານ', value: 'password' },
        { text: 'ສະຖານະ', value: 'status' },
        
        { text: 'ສິດການນຳໃຊ້', value: 'role_id' },

        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      userItem: {
        name: '',
        phoneNumber: '',
        status: '',
        role_id: '',
           password: '',
      },
      defaultItem: {
        name: '',
        phoneNumber: '',
        status: '',
        role_id: '',
           password: '',
      },
    }
  },
  components:{
    Navbar,
    Alert
  },
  computed: {
    ...mapGetters({
      userData: "User/userData",
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'ເພີ່ມຜູ້ໃຊ້' : 'ແກ້ໄຂສິດນຳໃຂ້'
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
    this.getUser()

  },

  methods: {
    ...mapActions({
      getUser: "User/getUser",
      getUserOne: "User/getUserOne",
      createUser: "User/createUser",
      updateUser: "User/updateUser",
      deleteUser: "User/deleteUser"
    }),



    editItem (item) {
      this.editedIndex = this.userData['data'].indexOf(item)
      this.userItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.userItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.userItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.userItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        this.updateUser({user_id:this.userData['data'][this.editedIndex]['id'],phoneNumber:this.userItem.phoneNumber,role_id:this.userItem.role_id})
      } else {
        this.createUser({password:this.userItem.password,name:this.userItem.name,phoneNumber:this.userItem.phoneNumber,role_id:this.userItem.role_id})
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
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
                              ທ່ານ: {{peopleItem.name}} {{peopleItem.surname}}
                            </h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >
                            <h3>ເບີໂທ: {{peopleItem.phone}}</h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >

                            <h3>ລະດັບ: {{peopleItem.degree}}</h3>
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
        <template v-slot:no-data>
          <v-btn
              color="primary"
              @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
      <br>
      <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <h2>ປະຊາກອນທັງໝົດ</h2>
        </v-col>
        <v-col cols="12" sm="2">
          <h2>500 ຄົນ</h2>
        </v-col>
        <v-col cols="12" sm="6">
          <h2>ປະຊາກອນທີ່ສາມາດລົງຄະແນນທັງໝົດ</h2>
        </v-col>
        <v-col cols="12" sm="2">
          <h2>250 ຄົນ</h2>
        </v-col>
        <v-col cols="12" sm="6">
          <h2>ປະຊາກອນທີ່ລົງສຽງແລ້ວ</h2>
        </v-col>
        <v-col cols="12" sm="2">
          <h2>250 ຄົນ</h2>
        </v-col>
        <v-col cols="12" sm="6">
          <h2>ຜູ້ແທນທີ່ລົງສະໝັກ</h2>
        </v-col>
        <v-col cols="12" sm="2">
          <h2>250 ຄົນ</h2>
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
              Name
            </th>
            <th class="text-left">
              ຊື່ແລະນາມສະກຸນ
            </th>
            <th class="text-left">
              ຄະແນນ
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in desserts"
              :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.name }} {{ item.surname }}</td>
            <td>{{ item.phone }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/bie/judge/dashboard/navbar.vue"
export default {
  name: "election_candidates",
  data(){
    return{
      search: '',
      title:"ຂໍ້ມູນການເລືອກຕັ້ງ",
      dialog: false,
      dialogDelete: false,
      permissionItem:[
        'abc',
        'efg'
      ],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Surname', value: 'surname' },
        { text: 'Phone', value: 'phone' },
        { text: 'Degree', value: 'degree' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      peopleItem: {
        name: '',
        surname: '',
        phone: '',
        degree: '',

      },
      defaultItem: {
        name: '',
        surname: '',
        phone: '',
        degree: '',
      },
    }
  },
  components:{
    Navbar
  },
  computed: {
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
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          surname: 'Surname1',
          phone: '+8562059880655',
          degree: 'CEO',
        },
        {
          name: 'Fire',
          surname: 'Surname2',
          phone: '+8562059880655',
          degree: 'CEO',
        },
        {
          name: 'Water',
          surname: 'Surname4',
          phone: '+8562059880655',
          degree: 'CEO',
        },
        {
          name: 'Electric',
          surname: 'Surname4',
          phone: '+8562059880655',
          degree: 'CEO',
        },

      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
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
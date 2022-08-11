<template>
  <div>
    <Navbar :title="title" />
    <div class="container-content">
      <center>
        <h1 style="margin-top: 30px; margin-bottom: 30px">
          ກວດສອບສິດເລືອກຕັ້ງ
        </h1>
      </center>

      <v-data-table
        :search="search"
        :headers="headers"
        :items="verifyData['data']"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="395px">
              <template v-slot:activator="{}">
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
                      <v-col cols="12">
                        <v-select
                         
                          :items="statusData"
                          item-text="name"
                          item-value="name"
                          outlined
                          label="ກວດສອບສິດເລືອກຕັ້ງ"
                          v-model="verifyItem.status"
                        >
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    ຍົກເລີກ
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    ບັນທຶກ
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialogView" max-width="100%">
              <v-card>
                <v-card-title>
                  {{ formTitle }}
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row dense>
                      <v-col cols="6">
                        <v-img
                          max-height="400"
                          max-width="400"
                          :src="
                            'http://127.0.0.1:8000/storage/verifys_images/' +
                            verifyItem.picture_verify
                          "
                        ></v-img>
                        <h3>ສະຖານະ: {{ verifyItem.status }}</h3>
                      </v-col>
                      <v-col cols="6">
                          <h1>ຂໍ້ມູນຜູ້ໃຊ້</h1> 
                          <br/>


                        <h3>ຊື່ຜູ້ໃຊ້: {{ verifyItem.name }}</h3> <br>
                        <h3>ເບີໂທລະສັບ: {{ verifyItem.phoneNumber }}</h3><br>
                        <h3>ສະຖານະ: {{ verifyItem.status }}</h3><br>
                        <h3>ວັນທີ: {{ verifyItem.created_at }}</h3><br>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeView">
                    ປິດ
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon color="orange" dense class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>

          <v-icon color="blue" large class="mr-2" @click="viewItem(item)">
            mdi-eye
          </v-icon>
        </template>
        <template v-slot:[`item.picture_verify`]="{ item }">
          
   <v-img
                          max-height="250"
                          max-width="150"
                          :src="
                            'http://127.0.0.1:8000/storage/verifys_images/' +
                            item.picture_verify
                          "
                        ></v-img>
        </template>
      </v-data-table>
    </div>
    <Alert />
  </div>
</template>

<script>
import Alert from "@/components/bie/alert/alert.vue";
import Navbar from "@/components/bie/village_headman/dashboard/navbar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "check_permission_election",
  data() {
    return {
      btnIndex: -1,
      search: "",
      title: "ກວດສອບສິດເລືອກຕັ້ງ",
      dialog: false,
      dialogDelete: false,
      dialogView: false,
      statusData: [{ id: 1, name: "verify" },{id: 2, name: "not_verify"}],
      headers: [
        {
          text: "ຮູບ",
          value: "picture_verify",
          align: "start",
          sortable: false,
        },
        {
          text: "name",
          value: "name",
        },
        { text: "phoneNumber", value: "phoneNumber" },

        { text: "ສະຖານະ", value: "status" },
        { text: "ວັນທີ", value: "created_at" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      verifyItem: {
        picture_verify: "",
        name: "",
        phoneNumber: "",
        status: "",
        created_at: "",
        user_id: "",
      },
      defaultItem: {
      picture_verify: "",
        name: "",
        phoneNumber: "",
        status: "",
        created_at: "",
        user_id: "",
      },
    };
  },
  components: {
    Navbar,
    Alert,
  },
  computed: {
    ...mapGetters({
      verifyData: "Verify/verifyData",
    }),
    formTitle() {
      return this.btnIndex === -1
        ? "ເພີ່ມປະຊາກອນ"
        : this.btnIndex === 0
        ? "ແກ້ໄຂສິດ"
        : "ເບິ່ງລາຍລະອຽດ";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogView(val) {
      val || this.closeView();
    },
  },

  created() {
    
    this.getVerify();
  },

  methods: {
  
    ...mapActions({
      getVerify: "Verify/getVerify",
      updateVerify: "Verify/updateVerify",
    }),

    viewItem(item) {
      this.btnIndex = 1;
      this.editedIndex = this.verifyData["data"].indexOf(item);
      this.verifyItem = Object.assign({}, item);
      this.dialogView = true;
    },

    editItem(item) {
//       console.log(this.verifyData['data']);
//       this.btnIndex = 0;
// console.log(this.verifyData["data"][this.editedIndex]["id"]);
      this.editedIndex = this.verifyData["data"].indexOf(item);
console.log(this.editIndex);
      this.verifyItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.verifyItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.verifyItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.verifyItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeView() {
      this.dialogView = false;
      this.$nextTick(() => {
        this.verifyItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        this.updateVerify({
          user_id: this.verifyData["data"][this.editedIndex]["id"],
         
          status: this.verifyItem.status,
        });
      } else {
        this.desserts.push(this.verifyItem);
      }
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.container-content {
  width: 100%;
  background-color: #f0f2f5;
  padding: 1rem;
}
</style>
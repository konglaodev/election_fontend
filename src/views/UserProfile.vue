<template>
  <div class="userprofile">
    <v-app>
      <Navbar />
      <div style="margin-top: 100px">
        <center>
          <h1>ຂໍ້ມູນຜູ້ໃຊ້ລະບົບ</h1>
        </center>

        <v-card class="mx-auto my-12" max-width="1000">
          <v-card-title v-if="profileData.status == 'not_verify'"
            ><b
              >ສະຖານະ: <span style="color: red">ຍັງບໍ່ທັນຢືນຢັນ</span></b
            ></v-card-title
          >
          <v-card-title v-else-if="profileData.status == 'verify'"
            ><b
              >ສະຖານະ:
              <span style="color: lime">ຢືນຢັນແລ້ວ</span>
            </b></v-card-title
          >
          <v-card-title v-else
            ><b>
              <span style="color: grey">ກະລຸນາເຂົ້າສູ່ລະບົບ</span>
            </b></v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="grey--text ms-4" style="text-align: center">
                <b>ຊື່: </b>{{ profileData.name }}
              </div>
            </v-row>
            <v-row align="center" class="mx-0">
              <div class="grey--text ms-4">
                <b>ເບີໂທລະສັບ: </b> {{ profileData.phoneNumber }}
              </div>
            </v-row>
            <v-row align="center" class="mx-0">
              <div class="grey--text ms-4">
                <b>ລະດັບສິດ: </b> {{ profileDataAll.rolesname }}
              </div>
            </v-row>
            <center>
              <div>
                <div
                  class="profile"
                  style="width: 100%; margin-top: 100px; margin-bottom: 100px"
                >
                  <v-img
                    max-height="600"
                    max-width="400"
                    min-width="150"
                    :src="
                      'http://127.0.0.1:8000/storage/populations_images/' +
                      profileDataAll.image
                    "
                  ></v-img>
                </div>
              </div>
            </center>
            <div class="details">
              <center>
                <h1>ຂໍ້ມູນປະຊາກອນ</h1>
                <br />
              </center>

              <h3>
                ຊື່ແລະນາມສະກຸນ :
                <b
                  >{{ profileDataAll.gender }} {{ profileDataAll.name }}
                  {{ profileDataAll.surname }}</b
                >
              </h3>
              <br />
              <h3>
                ວັນເດືອນປີເກີດ :
                <b
                  >{{ profileDataAll.dateOfBirth }} </b
                >
              </h3>
              <br />
              <h3>
                ທີ່ຢູ່ :
                <b
                  >{{ profileDataAll.address }} </b
                >
              </h3>
              <br />
              <h3>
                ສຳມະໂນຄົວເລກທີ :
                <b
                  >{{ profileDataAll.cencus_id }} </b
                >
              </h3>
              <br />
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title v-if="profileData.status == 'not_verify'">
            <v-img :src="image"> </v-img>
            <v-file-input
              v-model="selectImage"
              @change="onFileChange"
              class="mt-6"
              label="File input"
              filled
              prepend-icon="mdi-camera"
            ></v-file-input>
            <v-btn
              color="green lighten-2"
              class="ml-3"
              :disabled="selectImage == null"
              @click="sendVerify()"
            >
              ອັບໂຫລດຮູບ
            </v-btn>
          </v-card-title>
          <v-card-title v-else> </v-card-title>
        </v-card>
      </div>

      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> ບັນທຶກຂໍ້ມູນແລ້ວ </v-card-title>
          <v-card-text>ຂໍ້ມູນຂອງທ່ານຖືກສົ່ງໄປແລ້ວ.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              ປິດ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
import Navbar from "@/components/homepage/Navbar.vue";
import image_holder from "@/assets/image_holder.jpg";
import axios from "axios";
export default {
  name: "userprofile",
  components: {
    Navbar,
  },
  
  mounted() {
    this.token = JSON.parse( localStorage.getItem('toten'));
  

    this.image = image_holder;
    axios
      .get(
        "http://127.0.0.1:8000/api/getuserid/" + localStorage.getItem("user_id")
      )
      .then((response) => {
        this.profileData = response.data.data[0];
        console.log(response.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      }),
      axios
        .get(
          "http://127.0.0.1:8000/api/profilestatus/" +
            localStorage.getItem("user_id")
        )
        .then((response) => {
          this.profileDataAll = response.data.data[0];
          console.log(response.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
  },
  methods: {
    sendVerify() {
      let formData = new FormData();
      formData.append("user_id", localStorage.getItem("user_id"));
      formData.append("picture_verify", this.selectImage);
      axios
      
        .post("http://127.0.0.1:8000/api/addVerify", formData)
        .then((response) => {
          this.dialog = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange(file) {
      if (!file) {
        this.image = image_holder;
        this.selectImage = null;
        return;
      }
      this.createImage(file);
    },
  },
  data() {
    return {
      dialog: false,
      image: null,
      selectImage: null,
      profileData: {},
      profileDataAll: {},
      token:"",
    };
  },
};
</script>

<style></style>
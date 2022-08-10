<template>
  <div class="userprofile">
    <v-app>
      <Navbar />
      <div style="margin-top: 100px">
        <v-card class="mx-auto my-12" max-width="374">
          <v-card-title v-if="profileData.status == 'not_verify'"
            ><b
              >ສະຖານະ: <span style="color: red">ຍັງບໍ່ທັນຢືນຢັນ</span></b
            ></v-card-title
          >
          <v-card-title v-else-if="profileData.status=='verify'"
            ><b
              >ສະຖານະ:
              <span style="color: lime">ຢືນຢັນແລ້ວ</span>
            </b></v-card-title
          >
          <v-card-title v-else
            ><b
              >
              <span style="color: grey">ກະລຸນາເຂົ້າສູ່ລະບົບ</span>
            </b></v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="grey--text ms-4">
                <b>ຊື່: </b>{{ profileData.name }}
              </div>
            </v-row>
            <v-row align="center" class="mx-0">
              <div class="grey--text ms-4">
                <b>ເບີໂທລະສັບ: </b> {{ profileData.phoneNumber }}
              </div>
            </v-row>

            <div></div>
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
            <v-btn color="green lighten-2" class="ml-3" :disabled="selectImage==null" @click="sendVerify()"> upload </v-btn>
          </v-card-title>
          <v-card-title v-else> </v-card-title>
        </v-card>
      </div>


<v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          ບັນທຶກຂໍ້ມູນແລ້ວ
        </v-card-title>
        <v-card-text>ຂໍ້ມູນຂອງທ່ານຖືກສົ່ງໄປແລ້ວ.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
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
    this.image = image_holder;
    axios.get("http://127.0.0.1:8000/api/getuserid/"+localStorage.getItem("user_id")).then((response)=>{
      this.profileData =response.data.data[0];
      console.log(response.data.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  },
  methods: {
    sendVerify() {
      let formData = new FormData();
      formData.append("user_id",localStorage.getItem("user_id"));
      formData.append("picture_verify",this.selectImage);
      axios
        .post("http://127.0.0.1:8000/api/addVerify", 
         formData
        )
        .then((response) => {
          this.dialog=true;
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
      dialog:false,
      image: null,
      selectImage: null,
      profileData: {},
    };
  },
};
</script>

<style></style>
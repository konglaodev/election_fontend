<template>
  <div>
    <v-container>
      <v-card class="elevation-6 mt-10">
        <v-row>
          <v-col cols="12" md="6" class="blue rounded-br-xl">
            <div style="text-align: center; padding: 180px 0">
              <v-card-text class="white--text">
                <h3 class="text-center">
                  ຖ້າມີບັນຊີຜູ້ໃຊ້ແລ້ວ ກະລຸນາເຂົ້າສູ່ລະບົບ?
                </h3>
                <!-- <h6
                          class="text-center"
                        >Log in to your account so you can continue building and<br>  editing your onboarding flows</h6> -->
              </v-card-text>
              <div class="text-center">
                <v-btn href="/login" tile outlined dark>ເຂົ້າສູ່ລະບົບ</v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-card-text class="mt-12">
              <h4 class="text-center">ລົງທະບຽນ ສ້າງບັນຊີຜູ້ໃຊ້</h4>
              <!-- <h6
                          class="text-center  grey--text "
                        >Let's get you all set up so you can start creatin your <br>
                        first onboarding experiance</h6> -->
              <v-row align="center" justify="center">
                <v-col cols="12" sm="8">
                  <v-form @submit="handleSubmit">
                    <v-text-field
                      v-model="name"
                      label="ຊື່ຜູ້ໃຊ້"
                      outlined
                      dense
                      color="blue"
                      autocomplete="false"
                      class="mt-4"
                    />

                    <v-text-field
                      for="phoneNumber"
                      v-model="username"
                      label="ເບີໂທລະສັບ"
                      outlined
                      dense
                      color="blue"
                      autocomplete="false"
                    />
                    <v-text-field
                      v-model="password"
                      label="ລະຫັສຜ່ານ"
                      outlined
                      dense
                      color="blue"
                      autocomplete="false"
                      type="password"
                    />

                    <v-btn type="submit" color="blue" dark block tile
                      >ລົງທະບຽນ</v-btn
                    >
                  </v-form>
                  <!-- <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Sign up using</h5> -->
                  <!-- <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn>
                         </div> -->
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
let phonelocal = localStorage.getItem("phoneNumber");
import axios from "axios";
export default {
  data: () => ({
    // name: this.name,
    // username: this.username,
    // password: this.password,
    name: "",
    username: phonelocal,
    password: "",
  }),
  name: "register",
  methods: {
    async handleSubmit() {
      

      const data = {
        name: this.name,
        username: this.username,
        password: this.password,
      };

      const res = axios
        .post("http://localhost:8000/api/register/", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
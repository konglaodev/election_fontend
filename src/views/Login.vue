<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h1 class="text-center">ເຂົ້າສູ່ລະບົບ</h1>
                    <h6
                      style="
                        font-size: 16px;
                        margin-bottom: 10px;
                        margin-top: 40px;
                      "
                      class="text-center grey--text"
                    >
                      ລະບົບຈະກວດສອບສິດອັດຕະໂນມັດຖ້າທ່ານມີເບີໂທລະສັບ
                      ທີ່ທາງຄະນະກຳມະການຫຼືຄະນະບ້ານເອົາເຂົ້າໃນລະບົບແລ້ວ
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-form @submit.prevent="handleSubmit">
                          <v-text-field
                            v-model="username"
                            label="ເບີໂທລະສັບ"
                            v-validate="'required'"
                            outlined
                            dense
                            color="blue"
                            autocomplete="true"
                            class="mt-16"
                            :rules="usernameRule"
                          />

                          <v-text-field
                            v-model="password"
                            label="ລະຫັສຜ່ານ"
                            v-validate="'required'"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            :rules="passwordRule"
                          />

                          <v-row>
                            <div class="form-group"></div>
                            <v-col cols="12" sm="5"> </v-col>
                          </v-row>
                          <v-btn type="submit" color="blue" dark block tile
                            >ເຂົ້າສູ່ລະບົບ</v-btn
                          >
                        </v-form>
                        <!-- <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Log in using</h5> -->
                        <div
                          class="
                            d-flex
                            justify-space-between
                            align-center
                            mx-10
                            mb-16
                          "
                        >
                          <!-- <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn> -->
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">ຖ້າທ່ານຍັງບໍ່ທັນລົງທະບຽນ</h3>
                      <h6 class="text-center">
                        ກະລຸນາລົງທະບຽນ ເພື່ອເຂົ້າໃຊ້ລະບົບ
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn href="/firebase" tile outlined dark
                        >ລົງທະບຽນ</v-btn
                      >
                      <!-- <v-btn @click=" $store.state.isLoggedIn = !$store.state.isLoggedIn" tile outlined dark >click test state</v-btn> -->
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>
<script>
import axios from "axios";
import User from "../models/user";
export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: true,
      message: "",
      step: 1,
      username: "",
      password: "",
      token:"",
      usernameRule: [(v1) => !!v1 || "ປ້ອນເບີໂທ"],
      passwordRule: [(v1) => !!v1 || "ປ້ອນລະຫັສຜ່ານ"],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    // submit(){
    //   return alert(JSON.stringify(this.user));

    // },

    // submit() {

    //     if (this.user.username && this.user.password) {
    //       this.$store.dispatch('auth/login', this.user).then(
    //         () => {
    //           this.$router.push('/profile');
    //         },
    //         error => {
    //           this.loading = false;
    //           this.message =
    //             (error.response && error.response.data) ||
    //             error.message ||
    //             error.toString();
    //         }
    //       );
    //     }

    // }

    async handleSubmit(e) {
      e.preventDefault();
     const res = await axios.post("http://localhost:8000/api/login", {
        username: this.username,
        password: this.password,
        
       
      });
      const data = JSON.stringify(res.data.Token.access_token);
      const role = JSON.stringify(res.data.Users.role_id);
      const populations_id = JSON.stringify(res.data.Population);
      const status = JSON.stringify(res.data.Users.status);
      localStorage.setItem("token", data);
      localStorage.setItem("role", role);
      localStorage.setItem("populations_id",populations_id);
      localStorage.setItem("status",status);
      console.log(data,role,populations_id);
      alert(data);
      // const token = JSON.parse(res);
      // console.log(JSON.parse(res));
      // console.log(token);
      this.$router.push('/home');
    
          
          
          
    
    },
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }
        if (this.user.username && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$router.push("/profile");
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
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
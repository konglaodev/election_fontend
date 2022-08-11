
<!-- <template>
  <div>
    <input type="tel" id="phoneNumber" />

    <button id="sign-in-button" @click="submitPhoneNumberAuth()">
      SIGN IN WITH PHONE
    </button>

    <input type="text" id="otpcode" v-model="otpcode" />
    <button id="confirm-code" @click="submitPhoneNumberAuthCode()">
      ENTER CODE
    </button>

    <div id="recaptcha-container"></div>
  </div>
</template> -->
<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> ກະລຸນາປ້ອນລະຫັດ OTP </v-card-title>
          <v-card-text>
            <v-otp-input length="6" v-model="otpcode"></v-otp-input>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              ຍົກເລີກ
            </v-btn>
            <v-btn color="green darken-1" text @click="submitPhoneNumberAuthCode()">
              ຢັ້ນຢືນ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-row>
            <v-col cols="12" md="6">
              <v-card-text class="mt-12">
                <h1 class="text-center">ຢັ້ນຢືນ OTP</h1>
                <h6
                  style="font-size: 16px; margin-bottom: 10px; margin-top: 40px"
                  class="text-center grey--text"
                >
                  ລະບົບຈະສົ່ງລະຫັດຢັ້ນຢືນເຂົ້າສູ່ເບີໂທລະສັບຂອງທ່ານ
                </h6>
                <v-alert v-model="dialogfalse" type="info">
      ປ້ອນເບີໂທໃໝ່
    </v-alert>
                <v-row align="center" justify="center">
                  
                  <v-col cols="12" sm="8">
                    <v-text-field
                    
                      label="ເບີໂທລະສັບ"
                      outlined
                      dense
                      color="blue"
                      placeholder="98765432"
                      autocomplete="true"
                      class="mt-16"
                      type="number"
                      v-model="phoneNumber"
                      :rules="usernameRule"
                    />
                    <!-- <v-text-field
                            label="ລະຫັສຜ່ານ"
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                           type="password"
                          
                          /> -->
                    <v-row>
                      <v-col cols="12" sm="5"> </v-col>
                    </v-row>
                    <v-btn
                  
                    :loading="loading"
                    id="sign-in-button"
                      color="blue"
                      dark
                      block
                      tile
                      @click="submitPhoneNumberAuth()"
                      >ສົ່ງລະຫັສ OTP</v-btn
                    >

                    <!-- <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Log in using</h5> -->
                    <div
                      class="d-flex justify-space-between align-center mx-10 mb-16"
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
                  <h6 class="text-center">ກະລຸນາລົງທະບຽນ ເພື່ອເຂົ້າໃຊ້ລະບົບ</h6>
                </v-card-text>
                <div class="text-center">
                  <v-btn tile outlined dark @click="$router.push('/login');" >ເຂົ້າສູ່ລະບົບ</v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/compat/app";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
export default {
  data: () => ({
  dialogfalse : false,
    recaptchaVerifier: null,
    confirmationResult: null,
    otpcode: "",
    dialog: false,
    phoneNumber: "",
    loading:false,
    phoneNumberAll:"",
    code:"+85620",
    phone:"",
    usernameRule:[ v1=>!!v1 || "ປ້ອນເບີໂທ",],
  }),
  mounted() {
    if (this.recaptchaVerifier) {
      this.recaptchaVerifier.clear();
    }
   getAuth().settings.appVerificationDisabledForTesting = true;
    this.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: function (response) {
        //  submitPhoneNumberAuth();
        },
      },
      getAuth()
    );

    
    
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    submitPhoneNumberAuth() {
      if(this.phoneNumber == null){
        this.dialogfalse = true;
        this.loading=false;
      }
      this.loading=true;
      // We are using the test phone numbers we created before
      // var phoneNumber = document.getElementById("phoneNumber").value;
      var phoneNumberAll =this.code + this.phoneNumber;
      var phoneNumber = this.phoneNumber
      var appVerifier = this.recaptchaVerifier;
      console.log(appVerifier);
      const auth = getAuth();

      signInWithPhoneNumber(auth, phoneNumberAll, this.recaptchaVerifier)
        .then((confirmResult) => {
          this.confirmationResult = confirmResult;
          console.log(this.confirmationResult);
          this.dialog = true;
          this.loading=false;
          localStorage.setItem('phoneNumber',phoneNumber);
        })
        .catch((error) => {
          console.log(error);
          this.loading=false;
        });
    },

    submitPhoneNumberAuthCode() {
      // We are using the test code we created before
      // var code = document.getElementById("code").value;
      var code = this.otpcode;
      const codeInstance = this;
      this.confirmationResult
        .confirm(code)
        .then(function (result) {
          var user = result.user;
          //ປ່ຽນໜ້າ
          
          codeInstance.$router.push({path:'/register'});
          location.reload();
          console.log(user);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
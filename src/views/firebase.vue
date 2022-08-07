<template>
  <div style="background-color: gray;">

    <input   type="tel" id="phoneNumber" />

    <button id="sign-in-button" @click="submitPhoneNumberAuth()">
      SIGN IN WITH PHONE
    </button>

    <input  type="text" id="otpcode" v-model="otpcode" />
    <button id="confirm-code" @click="submitPhoneNumberAuthCode()">
      ENTER CODE
    </button>

    <div style="background-color:gray;" id="recaptcha-container"></div>
  </div>
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
    recaptchaVerifier: null,
    confirmationResult: null,
    otpcode:"",
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
          // submitPhoneNumberAuth();
        },
      },
      getAuth()
    );
  },
  methods: {
    submitPhoneNumberAuth() {
      // We are using the test phone numbers we created before
      // var phoneNumber = document.getElementById("phoneNumber").value;
      var phoneNumber = "+8562011111111";
    
      var appVerifier = this.recaptchaVerifier;
      console.log(appVerifier);
      const auth = getAuth();

     
        signInWithPhoneNumber(
        auth,
          phoneNumber,
          this.recaptchaVerifier
        )
        .then((confirmResult) => {
          this.confirmationResult = confirmResult;
          console.log(  this.confirmationResult);
          // this.OTPDialog = true;
        })
        .catch((error) => {
         console.log(error);
        });
    },

    submitPhoneNumberAuthCode() {
      // We are using the test code we created before
      // var code = document.getElementById("code").value;
      var code = this.otpcode;
     this.confirmationResult
        .confirm(code)
        .then(function (result) {
          var user = result.user;
          console.log(user);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

 
  },
};
</script>

<style scoped>

</style>

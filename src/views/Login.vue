<template>
  <v-container>
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center"
                        >ເຂົ້າສູ່ລະບົບ</h1>
                        <h6 style="font-size:16px; margin-bottom:10px; margin-top:40px"
                          class="text-center  grey--text "
                        >ລະບົບຈະກວດສອບສິດອັດຕະໂນມັດຖ້າທ່ານມີເບີໂທລະສັບ
                        ທີ່ທາງຄະນະກຳມະການຫຼືຄະນະບ້ານເອົາເຂົ້າໃນລະບົບແລ້ວ</h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           
                          <v-text-field
                            label="ເບີໂທລະສັບ"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-16"
                          />
                          <v-text-field
                            label="ລະຫັສຜ່ານ"
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                           type="password"
                          
                          />
                            <v-row>
                             
                              <v-col cols="12" sm="5">
                                
                              </v-col>
                            </v-row>
                          <v-btn href="/" color="blue" dark block tile>ເຂົ້າສູ່ລະບົບ</v-btn>
                     
                         <!-- <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Log in using</h5> -->
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
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
                    <v-col cols="12" md="6" class="blue rounded-bl-xl" >
                    <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">ຖ້າທ່ານຍັງບໍ່ທັນລົງທະບຽນ</h3>
                        <h6
                          class="text-center"
                        >ກະລຸນາລົງທະບຽນ ເພື່ອເຂົ້າໃຊ້ລະບົບ</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">ລົງທະບຽນ</v-btn>
                      </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row >
                    <v-col cols="12" md="6" class="blue rounded-br-xl">
                     <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">ຖ້າມີບັນຊີຜູ້ໃຊ້ແລ້ວ ກະລຸນາເຂົ້າສູ່ລະບົບ?</h3>
                        <!-- <h6
                          class="text-center"
                        >Log in to your account so you can continue building and<br>  editing your onboarding flows</h6> -->
                      </v-card-text>
                      <div class="text-center">
                        <v-btn  tile outlined dark @click="step--">ເຂົ້າສູ່ລະບົບ</v-btn>
                      </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >ລົງທະບຽນ ສ້າງບັນຊີຜູ້ໃຊ້</h4>
                        <!-- <h6
                          class="text-center  grey--text "
                        >Let's get you all set up so you can start creatin your <br>
                        first onboarding experiance</h6> -->
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           
                            <v-text-field
                            label="ຊື່ຜູ້ໃຊ້"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                          
                          <v-text-field
                            label="ເບີໂທລະສັບ"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="ລະຫັສຜ່ານ"
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                           type="password"
                          
                          />
                            
                          <v-btn color="blue" dark block tile>ລົງທະບຽນ</v-btn>
                     
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
    step: 1
  }),
  props: {
    source: String
  } 
    
  }
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">ເພີ່ມຜູ້ໃຊ້ໃໝ່</p>
    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="user.name"
          :rules="[(v) => !!v || 'ປ້ອນຊື່ຜູ້ໃຊ້']"
          label="name"
          required
        ></v-text-field>
        <v-text-field type="number"
          v-model="user.phoneNumber"
          :rules="[(v) => !!v || 'ກະລຸນາປ້ອນເບີໂທ']"
          label="phoneNumber"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          :rules="[(v) => !!v || 'password is required']"
          label="password"
          required
        ></v-text-field>
         <v-select
         v-model="user.role_id"
          :items="items"
          filled
          label="ເລຶອກລະດັບສິດ"
        ></v-select>
      </v-form>
      <v-btn color="primary" class="mt-3" @click="saveuser">ບັນທືກ</v-btn>
    </div>
    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          ບັນທືກສຳເລັດ
        </v-card-title>
        <v-card-subtitle>
          ເພີ່ມຜູ້ໃຊ້ໃໝ່
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="success" @click="newuser">ເພີ່ມ</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
import userDataService from "../services/userDataService";
export default {
  name: "add-user",
  data() {
    return {
        items:['1', '2', '3'],
      user: {
        id: null,
        name: "",
        phoneNumber: "",
        password: "",
        role_id: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveuser() {
      var data = {
        name: this.user.name,
        phoneNumber: this.user.phoneNumber,
        password: this.user.password,
        role_id: this.user.role_id,
      };
      userDataService.create(data)
        .then((response) => {
          this.user.id = response.data.data.id;
          console.log(response.data.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newuser() {
      this.submitted = false;
      this.user ={};
      this.user.name = "";
      this.user.phoneNumber="";
      this.user.password="";
      this.user.role_id="";
    },
  },
};
</script>
<style>
.submit-form {
  max-width: 300px;
}
</style>
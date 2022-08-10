<template>
  <div>
    <v-app-bar color="#1CB4BE" fixed>
      <v-app-bar-nav-icon color="#F6F1F0"  @click="drawer=true">

      </v-app-bar-nav-icon>

      <v-toolbar-title class="te" > ລະບົບເລືອກຕັ້ງນາຍບ້ານບ້ານພະໂພ
         </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn @click="clearAndLogout()"  style="margin-right: 10px">
        <v-icon>mdi-logout</v-icon>
      </v-btn> -->
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template> -->

        <!-- <v-list v-for="(item, index) in items" :key="index"> -->
          <!-- <router-link :to="item.link" style="text-decoration: none">
            <v-list-item>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list> -->
      <!-- </v-menu> -->
    </v-app-bar>

    <v-navigation-drawer class="white--text" color="#1CB4BE" v-model="drawer" absolute temporary fixed>
      <v-list  nav dense >
        <v-list-item-group  
          v-model="group"
          active-class="deep-gray--text text--white"
        >
          <router-link to="/" style="text-decoration: none">
            <v-list-item class="white--text">
              <v-list-item-icon>
                <v-icon  color="white">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ໜ້າຫຼັກ</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/candidate" style="text-decoration: none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ຂໍ້ມູນຜູ້ສະໝັກນາຍບ້ານ</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/profiles" style="text-decoration: none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ຂໍ້ມູນຜູ້ໃຊ້</v-list-item-title>
            </v-list-item>
          </router-link>
          <!-- <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ອອກຈາກລະບົບ</v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false,
    drawer: false,
    group: null,
    items: [
      { title: "ຂໍ້ມູນຜູ້ໃຊ້", link: "/profiles" },
      { title: "ລົງທະບຽນ", link: "/firebase" },
      { title: "ເຂົ້າສູ່ລະບົບ", link: "/Login" },
    ],
  }),
  methods: {
    clearAndLogout() {
      localStorage.removeItem("user_id");
      localStorage.removeItem("role");
      localStorage.removeItem("populations_id");
      localStorage.removeItem("status");
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("name");
      localStorage.removeItem("_grecaptcha");
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    onClickLogout() {
      this.$router.push("/");
      this.$store.dispatch("/doLogout");
    },
  },
  mounted() {
    if (localStorage.getItem("token") == null) {
      this.show = false;
    } else {
      this.show = true;
    }
  },
};
</script>
<style scoped>
router-link a {
  text-decoration: none !important;
  
}
.te{
  color: rgb(255, 255, 255);
  font-size: 24px;
}
</style>
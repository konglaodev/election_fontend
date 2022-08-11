<template>
  <div>
    <v-app-bar color="blue" fixed>
      <!-- <v-app-bar-nav-icon color="#F6F1F0"  @click="drawer=true">

      </v-app-bar-nav-icon> -->
      <router-link to="/" class="te">
      <v-toolbar-title class="te"  style="margin-left:40px"> ລະບົບເລືອກຕັ້ງນາຍບ້ານບ້ານພະໂພ
         </v-toolbar-title></router-link>
      <v-spacer></v-spacer>
       <v-menu  transition="scale-transition"
      origin="center center"
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="white">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
<v-list  nav dense >
        <v-list-item-group  
          v-model="group"
          active-class="deep-gray--text text--white"
        >
          <router-link to="/" style="text-decoration: none">
            <v-list-item >
              <v-list-item-icon>
                <v-icon >mdi-home</v-icon>
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
          <router-link to="/dashboard_village_headman" v-if="this.$store.state.showAdmin" style="text-decoration: none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ໜ້າຈັດການຂໍ້ມູນຄະນະບ້ານ</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/dashboardsuper" v-if="this.$store.state.showSuper" style="text-decoration: none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ໜ້າຈັດການຂໍ້ມູນກຳມະການ</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-list-item @click="clearAndLogout(),$router.push('/login');" v-if="$store.state.showlogoutbutton">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ອອກຈາກລະບົບ</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/firebase')" v-if="this.$store.state.showlogin">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ລົງທະບຽນ</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/login')" v-if="this.$store.state.showlogin">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ເຂົ້າສູ່ລະບົບ</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      </v-menu>
      <!-- <v-btn @click="clearAndLogout()" v-if="$store.state.showlogoutbutton" style="margin-right: 10px">
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
          <v-list-item @click="clearAndLogout" v-if="$store.state.showlogoutbutton">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ອອກຈາກລະບົບ</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="this.$store.state.showlogoutbutton">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ເຂົ້າສູ່ລະບົບ</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
  </div>
</template>
<script>
export default {
  data: () => ({
    username:"",
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
      this.$router.push("/login");
      this.$store.state.showlogoutbutton=false;
      this.$store.state.showlogin=true;
    },
    // onClickLogout() {
    //   this.$router.push("/");
    //   this.$store.dispatch("/doLogout");
    // },
  },
  mounted() {
 localStorage.getItem('token');
 this.username= localStorage.getItem('name');
 var role = localStorage.getItem('role');
    if (localStorage.getItem("token") == null) {
      this.$store.state.showlogin=true;
      this.$store.state.showlogoutbutton=false;
     
    } else if(localStorage.getItem('role')==1){
         this.$store.state.showAdmin=false;
      this.$store.state.showSuper=true;
this.$store.state.showlogoutbutton=true;
    }else if(localStorage.getItem('role')==2){
this.$store.state.showAdmin=true;
this.$store.state.showSuper=false;
this.$store.state.showlogoutbutton=true;
    }else{

      this.$store.state.showlogoutbutton=true;
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
  text-decoration: none !important;
}
</style>
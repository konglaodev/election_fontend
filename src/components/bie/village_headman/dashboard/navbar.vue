<template>
  <div class="navbar" >
    <v-app-bar 
      dense
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item >
            <v-list-item-title><b>ຊື່ຜູ້ໃຊ້ລະບົບ : </b> {{ userinfo}}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/');">
            <v-list-item-title> ໜ້າຫຼັກ</v-list-item-title>
          </v-list-item>

          <v-list-item @click="clearAndLogout();">
             
            <v-list-item-title>ອອກຈາກລະບົບ</v-list-item-title>  
          </v-list-item>
       
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <!-- <v-app-bar-title class="justify-center">
            ຊື່ຜູ້ໃຊ້ລະບົບ : <strong>{{ userinfo }}</strong></v-app-bar-title
          > -->

          <v-list-item link @click="$router.push('/dashboard_village_headman')">
            ໜ້າຫຼັກ
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item link @click="$router.push('/unit_information')">
            <v-list-item-icon>
              <v-icon>mdi-format-list-checkbox</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ຂໍ້ມູນໜ່ວຍ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="$router.push('/census_information')">
            <v-list-item-icon>
              <v-icon>mdi-format-list-numbered</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ຂໍ້ມູນເລກທີສຳມະໂນ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="$router.push('/people_infomation')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ຂໍ້ມູນປະຊາກອນ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="$router.push('/check_permission_election')">
            <v-list-item-icon>
              <v-icon>mdi-human-greeting-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ກວດສອບສິດເລືອກຕັ້ງ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            link
            @click="$router.push('/headman_election_information')"
          >
            <v-list-item-icon>
              <v-icon>mdi-human-handsup</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ລາຍງານຂໍ້ມູນການເລືອກຕັ້ງ</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
                    <v-list-item
            link
            @click="$router.push('/pdfgenerate')"
          >
            <v-list-item-icon>
              <v-icon>mdi-newspaper-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ກົດລາຍງານຂໍ້ມູນປະຊາກອນທີ່ມາໃຊ້ສິດ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    title: String,
  },
  data: () => ({
    drawer: false,
    group: null,
    userinfo: "",
    
  }),
  methods:{
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
  },
  mounted() {
    this.userinfo = JSON.parse(localStorage.getItem("name"));
    if(this.userinfo==null){
       this.$store.state.showlogoutbutton=false;
      this.$store.state.showlogin=true;
      this.$router.push('/login');
    }
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
  
};
</script>

<style scoped lang="scss">
</style>
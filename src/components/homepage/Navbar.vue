<template>
 <div>
    <v-app-bar
      color="#1CB4BE"
      fixed 
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>ລະບົບເລືອກຕັ້ງນາຍບ້ານບ້ານພະໂພ</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
           <v-btn v-bind="attrs"
          v-on="on" icon>
        <v-icon >mdi-account</v-icon>
      </v-btn>
      </template>
      <v-list v-for="(item, index) in items" :key="index">
        <router-link  :to= "item.link" style="text-decoration:none;"> 
        <v-list-item
          
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        </router-link>
      </v-list>
      
    </v-menu>
       
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-gray--text text--accent-4"
        >
        <router-link to="/" style="text-decoration:none;"> 
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ໜ້າຫຼັກ</v-list-item-title>
          </v-list-item>
        </router-link>
          <router-link to="/candidate" style="text-decoration:none;"> 
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ຂໍ້ມູນຜູ້ສະໝັກນາຍບ້ານ</v-list-item-title>
          </v-list-item>
            </router-link>
<router-link to="/profiles" style="text-decoration:none;"> 
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ຂໍ້ມູນຜູ້ໃຊ້:{{username}}</v-list-item-title>
          </v-list-item>
</router-link>
<v-list-item>
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-title>ອອກຈາກລະບົບ</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
 </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
        items: [
        { title: 'ຂໍ້ມູນຜູ້ໃຊ້',link:'/profiles' },
        { title: 'ລົງທະບຽນ' ,link:'/firebase'},
        { title: 'ເຂົ້າສູ່ລະບົບ' ,link:'/Login'},
        
      ],
    }),methods:{
        onClickLogout(){
          this.$router.push('/');
          this.$store.dispatch('/doLogout');
        } 
    },
  }
</script>
<style scoped>
router-link a{
    text-decoration: none !important;
}
</style>